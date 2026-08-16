"use client";

import { useEffect, useState } from "react";

export function MotionLayer() {
  const [reducedMotion, setReducedMotion] = useState(false);
  const [pointer, setPointer] = useState({ x: -100, y: -100, visible: false });

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    const updateMotion = () => setReducedMotion(mediaQuery.matches);
    updateMotion();
    mediaQuery.addEventListener("change", updateMotion);

    return () => mediaQuery.removeEventListener("change", updateMotion);
  }, []);

  useEffect(() => {
    if (reducedMotion || window.matchMedia("(pointer: coarse)").matches) return;

    const updatePointer = (event: PointerEvent) => {
      setPointer({ x: event.clientX, y: event.clientY, visible: true });
    };
    const hidePointer = () => setPointer((current) => ({ ...current, visible: false }));

    window.addEventListener("pointermove", updatePointer, { passive: true });
    window.addEventListener("pointerleave", hidePointer);
    return () => {
      window.removeEventListener("pointermove", updatePointer);
      window.removeEventListener("pointerleave", hidePointer);
    };
  }, [reducedMotion]);

  return (
    <div
      className={`pointer-orb ${pointer.visible ? "is-visible" : ""}`}
      style={{ transform: `translate3d(${pointer.x}px, ${pointer.y}px, 0)` }}
      aria-hidden="true"
    />
  );
}