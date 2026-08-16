import { ScrollReveal } from "./ScrollReveal";

export function ExploreSection() {
  return (
    <ScrollReveal><section id="jelajah" className="mx-auto flex w-[min(1180px,calc(100%-3rem))] flex-col justify-between gap-12 border-t border-ink/20 py-[clamp(5rem,12vw,11rem)] md:flex-row md:items-end">
      <div className="max-w-2xl">
        <div className="section-kicker"><span className="text-brick-light">06</span><span>Langkah berikutnya</span></div>
        <h2 className="display-heading mt-5">Temukan arah <span className="block text-brick">berikutnya.</span></h2>
        <p className="mt-6 max-w-[42ch]">Jelajahi informasi resmi tentang program keahlian, kabar sekolah, dan penerimaan peserta didik baru.</p>
      </div>
      <div className="grid justify-items-start gap-3">
        <a href="#kontak" className="button-slice gradient-brick mt-2 inline-flex min-h-12 items-center gap-3 px-6 font-semibold text-paper">Info penerimaan <span aria-hidden="true">↗</span></a>
        <a href="#profil" className="text-link mt-2">Kembali ke profil <span aria-hidden="true">↑</span></a>
      </div>
    </section></ScrollReveal>
  );
}
