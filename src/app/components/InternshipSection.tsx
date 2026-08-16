import { ScrollReveal } from "./ScrollReveal";

const steps = [
  ["01", "Kenali", "Membaca kebutuhan dan budaya kerja sebelum masuk ke dalamnya."],
  ["02", "Terlibat", "Mengerjakan tugas nyata bersama mentor dan tim di lapangan."],
  ["03", "Kembali", "Membawa pulang pengalaman untuk dibagikan dan dikembangkan."],
];

export function InternshipSection() {
  return (
    <ScrollReveal><section id="pkl" className="mx-auto w-[min(1180px,calc(100%-3rem))] py-[clamp(5rem,12vw,11rem)]">
      <div className="grid gap-10 border-b border-ink/20 pb-10 md:grid-cols-[1fr_1.5fr] md:gap-20"><div className="section-kicker"><span className="text-brick-light">05</span><span>Ekosistem PKL</span></div><div><h2 className="display-heading">Dari ruang kelas<br /><span className="text-brick">ke dunia nyata.</span></h2><p className="mt-6 max-w-[45ch] text-ink/75">Praktik kerja lapangan menjadi jembatan: peserta didik belajar mengambil konteks, berkomunikasi, dan bertanggung jawab atas pekerjaannya.</p></div></div>
      <div className="relative mt-12 grid gap-8 md:grid-cols-3 md:gap-0">{steps.map(([number, title, text], index) => <div key={number} className="relative border-l-2 border-brick/30 px-6 py-2 first:border-brick md:min-h-64 md:border-l-0 md:border-t-2 md:px-8 md:pt-8"><span className="font-mono text-[.7rem] text-brick-light">{number}</span><h3 className="mt-5 font-display text-3xl font-semibold">{title}</h3><p className="mt-3 max-w-[26ch] text-ink/70">{text}</p>{index < steps.length - 1 && <span className="absolute right-0 top-[-.4rem] hidden text-2xl text-brick md:block">→</span>}</div>)}</div>
      <div className="mt-12 grid gap-6 rounded-[2rem_1rem_2rem_1rem] bg-brick p-6 text-paper md:grid-cols-[1fr_auto] md:items-center md:p-8"><p className="max-w-[52ch]">Jejaring industri dibangun dari percakapan yang konsisten, karya yang bisa ditunjukkan, dan sikap yang dapat dipercaya.</p><a href="#kontak" className="button-outline inline-flex min-h-11 items-center justify-center border-paper/60 px-5 font-semibold">Bangun koneksi <span className="ml-3">↗</span></a></div>
    </section></ScrollReveal>
  );
}
