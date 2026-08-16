import { ScrollReveal } from "./ScrollReveal";

const majors = [
  { code: "AKL", name: "Akuntansi dan Keuangan Lembaga", color: "bg-gold" },
  { code: "MPLB", name: "Manajemen Perkantoran dan Layanan Bisnis", color: "bg-brick-light" },
  { code: "PM", name: "Pemasaran", color: "bg-crest" },
  { code: "TJKT", name: "Teknik Jaringan Komputer dan Telekomunikasi", color: "bg-brick" },
  { code: "PPLG", name: "Pengembangan Perangkat Lunak dan Gim", color: "bg-brick-dark" },
];

export function MajorsSection() {
  return (
    <ScrollReveal><section id="jurusan" className="bg-night text-paper">
      <div className="mx-auto grid w-[min(1180px,calc(100%-3rem))] gap-12 py-[clamp(5rem,12vw,10rem)] lg:grid-cols-[.8fr_1.2fr]">
        <div className="max-w-xl"><div className="section-kicker text-paper"><span className="text-brick-lighter">04</span><span>Program keahlian</span></div><h2 className="display-heading mt-8">Banyak pintu.<br /><span className="text-brick-lighter">Satu arah.</span></h2><p className="mt-6 max-w-[38ch] text-paper/70">Temukan ruang yang paling dekat dengan rasa ingin tahu. Setiap jurusan menghubungkan fondasi sekolah dengan kebutuhan dunia kerja.</p><a href="#kontak" className="mt-8 inline-flex items-center gap-3 border border-paper/50 px-5 py-3 font-semibold transition hover:border-brick-lighter hover:bg-brick hover:text-paper">Tanya program keahlian <span>↗</span></a></div>
        <div className="relative grid gap-px border border-paper/20 bg-paper/20 sm:grid-cols-2">{majors.map((major, index) => <article key={major.code} className="group relative flex min-h-48 flex-col justify-between overflow-hidden bg-night p-6 transition hover:bg-brick-darker sm:min-h-56"><div className={`absolute -right-8 -top-8 h-28 w-28 opacity-20 blur-2xl transition group-hover:opacity-60 ${major.color}`} /><span className="font-mono text-[.7rem] text-brick-lighter">0{index + 1} / {major.code}</span><div><h3 className="max-w-[14ch] font-display text-2xl font-semibold leading-tight">{major.name}</h3><span className="mt-5 inline-flex translate-y-2 text-brick-lighter opacity-0 transition group-hover:translate-y-0 group-hover:opacity-100">Pelajari ↗</span></div></article>)}</div>
      </div>
    </section></ScrollReveal>
  );
}
