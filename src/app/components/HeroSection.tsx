"use client";

import { useEffect, useState, type SyntheticEvent } from "react";
import Image from "next/image";
import { schoolImages } from "../../data/school";
import { jurusanTrails, registerPin } from "./jurusanTrail";

const slides = [
  { eyebrow: "Sekolah vokasi · Purwokerto", title: "Ruang untuk tumbuh.", description: "Belajar dengan tangan, pikiran, dan keberanian untuk melangkah lebih jauh.", cta: "Kenali sekolah kami", image: schoolImages.hero.drone, alt: "Gedung dan lingkungan SMKN 1 Purwokerto dilihat dari udara" },
  { eyebrow: "Praktik · Kolaborasi · Ketekunan", title: "Belajar menjadi nyata.", description: "Setiap kompetensi tumbuh melalui praktik yang dekat dengan dunia kerja.", cta: "Lihat ruang praktik", image: schoolImages.hero.event, alt: "Peserta didik mengikuti kegiatan sekolah" },
  { eyebrow: "Karya peserta didik", title: "Gagasan yang dikerjakan.", description: "Dari rasa ingin tahu menjadi karya yang dapat dilihat, diuji, dan dibanggakan.", cta: "Jelajahi karya", image: schoolImages.hero.event, alt: "Peserta didik menampilkan karya dalam acara sekolah" },
];

export function HeroSection() {
  const [activeSlide, setActiveSlide] = useState(0);
  const [reducedMotion, setReducedMotion] = useState(false);
  const [activePin, setActivePin] = useState<string | null>(null);


  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    const update = () => setReducedMotion(mediaQuery.matches);
    update();
    mediaQuery.addEventListener("change", update);
    return () => mediaQuery.removeEventListener("change", update);
  }, []);

  useEffect(() => {
    if (reducedMotion) return;
    const timer = window.setInterval(() => setActiveSlide((current) => (current + 1) % slides.length), 6500);
    return () => window.clearInterval(timer);
  }, [reducedMotion]);

  const slide = slides[activeSlide];
  const hideBrokenImage = (event: SyntheticEvent<HTMLImageElement>) => {
    event.currentTarget.style.display = "none";
  };

  return (
    <section id="awal" className="relative flex min-h-[92svh] items-end overflow-hidden bg-night text-paper md:min-h-svh" aria-label="Cerita tentang SMKN 1 Purwokerto">
      <div className="absolute inset-0" aria-hidden="true">
        <div className="absolute inset-y-0 right-0 w-full md:right-[-4%] md:w-[74%]">
          {slides.map((item, index) => (
            <Image 
              key={`${item.image}-${index}`}
              src={item.image}
              alt={item.alt}
              fill
              priority={index === 0}
              sizes="(max-width: 768px) 100vw, 74vw"
              className={`object-cover object-[center_38%] transition-opacity duration-700 ${
                index === activeSlide ? "opacity-100" : "opacity-0"
              } ${reducedMotion ? "duration-0" : ""}`}
              onError={hideBrokenImage}
            />
          ))}

          <div className="absolute inset-0 bg-brick/25 mix-blend-multiply" />
          <div className="absolute inset-0 opacity-20 bg-[linear-gradient(rgb(255_248_241/.18)_1px,transparent_1px),linear-gradient(90deg,rgb(255_248_241/.18)_1px,transparent_1px)] bg-size-[56px_56px]" />
        </div>

        <div className="absolute inset-0 bg-linear-to-r from-night via-night/95 via-28% via-night/55 via-48% to-transparent" />
        <div className="absolute inset-0 bg-linear-to-t from-night/90 via-night/25 to-transparent" />

      </div>

      <div className="absolute inset-0">
        {jurusanTrails.map((pin) => (
          <a
            key={pin.id}
            href="#jurusan"
            className={`jurusan-node jurusan-node-${pin.pin.ukuran} ${
              activePin === pin.id ? "is-active" : ""
            }`}
            ref={(element) => registerPin(pin.id, element)}
            style={{ top: pin.pin.top, left: pin.pin.left }}
            onMouseEnter={() => setActivePin(pin.id)}
            onMouseLeave={() => setActivePin(null)}
            onFocus={() => setActivePin(pin.id)}
            onBlur={() => setActivePin(null)}
            aria-label={`Lihat jurusan ${pin.nama}`}
          >
            <span className="jurusan-node-orbit">
              <span className="jurusan-node-core">
                <Image
                  src={pin.logo}
                  alt=""
                  width={24}
                  height={24}
                  className="jurusan-node-logo"
                />
              </span>
            </span>

            <span className="jurusan-node-code">{pin.kode}</span>
            <span className="jurusan-node-label">{pin.nama}</span>
          </a>
        ))}

      </div>
      <div className="absolute inset-0 bg-linear-to-t from-night/90 via-night/25 to-transparent" />
      <div className="relative z-10 mx-auto w-[min(1240px,calc(100%-3rem))] pb-16 pt-36 md:pb-24">
        <div className="max-w-3xl" aria-live="polite">
          <p className="page-intro mb-5 font-mono text-[.68rem] uppercase tracking-[.12em] text-brick-lighter">{slide.eyebrow}</p>
          <h1 className="page-intro-delay max-w-[12ch] font-display text-[clamp(3.8rem,8vw,8rem)] font-semibold leading-[.9] tracking-[-.07em]">{slide.title}</h1>
          <p className="page-intro-delay mt-7 max-w-[42ch] text-[clamp(1rem,1rem+.25vw,1.2rem)] leading-relaxed text-paper/90">{slide.description}</p>
          <a href="#profil" className="button-slice page-intro-delay gradient-brick mt-8 inline-flex min-h-12 items-center gap-3 px-6 font-semibold text-paper">{slide.cta}<span aria-hidden="true">↘</span></a>
        </div>
        <div className="mt-14 flex items-center gap-6">
          <div className="flex items-center gap-3" role="tablist" aria-label="Pilih cerita hero">
            {slides.map((item, index) => <button key={item.title} type="button" role="tab" aria-selected={index === activeSlide} aria-label={`Tampilkan slide ${index + 1}: ${item.title}`} onClick={() => setActiveSlide(index)} className={`h-1 transition-all duration-500 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brick-light ${index === activeSlide ? "w-10 gradient-brick" : "w-5 bg-paper/45 hover:bg-paper"} ${reducedMotion ? "duration-0" : ""}`} />)}
          </div>
          <span className="font-mono text-[.65rem] text-paper/65">0{activeSlide + 1} / 0{slides.length}</span>
        </div>
      </div>
    </section>
  );
}
