"use client";

import { useEffect, useRef, useState } from "react";
import { jurusanTrails, pinRegistry, shardRegistry } from "./jurusanTrail";

type TrailPath = { id: string; d: string };
type Point = { x: number; y: number };

function center(element: HTMLElement): Point {
  const rect = element.getBoundingClientRect();
  return { x: rect.left + rect.width / 2, y: rect.top + rect.height / 2 + window.scrollY };
}

function buildPath(start: Point, end: Point, bend: number) {
  const dx = end.x - start.x;
  const dy = end.y - start.y;
  const curve = Math.max(48, Math.min(180, Math.abs(dy) * 0.24));
  const sway = dx * bend;
  return `M ${start.x} ${start.y} C ${start.x + sway} ${start.y + curve}, ${end.x - sway} ${end.y - curve}, ${end.x} ${end.y}`;
}

export function TrailOverlay() {
  const [paths, setPaths] = useState<TrailPath[]>([]);
  const [reducedMotion, setReducedMotion] = useState(false);
  const pathRefs = useRef(new Map<string, SVGPathElement>());
  const headRefs = useRef(new Map<string, SVGCircleElement>());
  const measurements = useRef(new Map<string, { start: Point; end: Point; length: number }>());
  const frame = useRef<number | null>(null);
  const svgRef = useRef<SVGSVGElement>(null);
  const hasScrolled = useRef(false);

  useEffect(() => {
    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    const updateMotion = () => setReducedMotion(media.matches);
    updateMotion();
    media.addEventListener("change", updateMotion);

    const measure = () => {
      const nextPaths: TrailPath[] = [];
      const nextMeasurements = new Map<string, { start: Point; end: Point; length: number }>();

      for (const trail of jurusanTrails) {
        const pin = pinRegistry.get(trail.id);
        const shard = shardRegistry.get(trail.id);
        if (!pin || !shard) continue;
        const start = center(pin);
        const end = center(shard);
        const d = buildPath(start, end, trail.bend);
        nextPaths.push({ id: trail.id, d });
        nextMeasurements.set(trail.id, { start, end, length: 1 });
      }

      setPaths(nextPaths);
      measurements.current = nextMeasurements;
      requestAnimationFrame(() => {
        for (const trail of jurusanTrails) {
          const path = pathRefs.current.get(trail.id);
          const measurement = measurements.current.get(trail.id);
          if (path && measurement) measurement.length = path.getTotalLength();
        }
        updateProgress();
      });
    };

    const updateProgress = () => {
      const scrollY = window.scrollY;
      const isStarted = hasScrolled.current || reducedMotion;
      for (const trail of jurusanTrails) {
        const measurement = measurements.current.get(trail.id);
        const path = pathRefs.current.get(trail.id);
        const head = headRefs.current.get(trail.id);
        const shard = shardRegistry.get(trail.id);
        if (!measurement || !path || !shard) continue;

        const distance = measurement.end.y - measurement.start.y;
        const progress = !isStarted
          ? 0
          : reducedMotion || distance <= 0
          ? 1
          : Math.max(0, Math.min(1, (scrollY - measurement.start.y + window.innerHeight * 0.45) / Math.max(distance, 1)));
        const visibleLength = measurement.length * progress;
          path.style.strokeDasharray = `${measurement.length}`;
        path.style.strokeDashoffset = `${measurement.length - visibleLength}`;
        path.style.opacity = progress > 0.02 ? "1" : "0";
        shard.classList.toggle("is-trail-active", progress >= 0.98);

        if (head) {
          const point = path.getPointAtLength(visibleLength);
          head.setAttribute("cx", String(point.x));
          head.setAttribute("cy", String(point.y));
          head.style.opacity = progress > 0.03 && progress < 0.99 ? "1" : "0";
        }
      }
      frame.current = null;
    };

    const onScroll = () => {
      if (!hasScrolled.current) {
        hasScrolled.current = true;
        svgRef.current?.classList.add("is-scroll-started");
      }
      if (frame.current === null) frame.current = requestAnimationFrame(updateProgress);
    };
    const onResize = () => measure();
    const observer = new ResizeObserver(measure);
    observer.observe(document.body);
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onResize);
    window.addEventListener("load", measure);
    if (reducedMotion) svgRef.current?.classList.add("is-scroll-started");
    measure();

    return () => {
      media.removeEventListener("change", updateMotion);
      observer.disconnect();
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onResize);
      window.removeEventListener("load", measure);
      if (frame.current !== null) cancelAnimationFrame(frame.current);
    };
  }, [reducedMotion]);

  return (
    <svg ref={svgRef} className="jurusan-trails" aria-hidden="true">
      <defs>
        <filter id="trail-glow"><feGaussianBlur stdDeviation="3" result="blur" /><feMerge><feMergeNode in="blur" /><feMergeNode in="SourceGraphic" /></feMerge></filter>
      </defs>
      {paths.map((path) => (
        <g key={path.id}>
          <path className="jurusan-trail-glow" d={path.d} />
          <path className="jurusan-trail" d={path.d} ref={(element) => { if (element) pathRefs.current.set(path.id, element); else pathRefs.current.delete(path.id); }} />
          <circle ref={(element) => { if (element) headRefs.current.set(path.id, element); else headRefs.current.delete(path.id); }} className="jurusan-trail-head" r="3" />
        </g>
      ))}
    </svg>
  );
}
