import { ScrollReveal } from "./ScrollReveal";

const values = [
  ["01", "Cara belajar", "Belajar dengan tangan dan pikiran", "Pemahaman, latihan, dan kebiasaan kerja bertemu dalam proses yang nyata."],
  ["02", "Ruang praktik", "Ruang untuk mencoba", "Setiap kemampuan dibentuk melalui keberanian menguji, memperbaiki, dan menyelesaikan."],
  ["03", "Komunitas", "Tumbuh bersama lingkungan", "Sekolah menjadi ruang pertemuan peserta didik, pendidik, keluarga, dan masyarakat."],
];

export function ValuesSection() {
  return (
    <ScrollReveal><section id="nilai" className="mx-auto w-[min(1180px,calc(100%-3rem))] py-[clamp(5rem,12vw,11rem)]">
      <div className="grid items-end gap-8 border-b border-ink/20 pb-8 md:grid-cols-[1fr_2fr]"><div className="section-kicker"><span className="text-brick-light">03</span><span>Yang dibangun</span></div><h2 className="display-heading">Tumbuh melalui <span className="block text-brick">kebiasaan.</span></h2></div>
      <div className="grid gap-10 pt-8 md:grid-cols-3">{values.map(([number, eyebrow, title, text]) => <article key={number} className="group relative min-h-60 border-t-2 border-brick pt-10 transition hover:-translate-y-1"><span className="absolute right-0 top-3 font-mono text-[.68rem] text-brick-light">{number}</span><p className="section-label">{eyebrow}</p><h3 className="mt-6 max-w-[15ch] font-display text-2xl font-semibold leading-tight">{title}</h3><p className="mt-3 max-w-[30ch] text-ink/75">{text}</p><span className="absolute bottom-0 left-0 h-px w-0 bg-brick transition-all duration-500 group-hover:w-full" /></article>)}</div>
    </section></ScrollReveal>
  );
}
