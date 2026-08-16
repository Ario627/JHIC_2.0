import { ScrollReveal } from "./ScrollReveal";

export function ProfileSection() {
  return (
    <ScrollReveal><section id="profil" className="mx-auto w-[min(1180px,calc(100%-3rem))] py-[clamp(5rem,12vw,11rem)]">
      <div className="section-kicker"><span className="text-brick-light">02</span><span>Profil sekolah</span></div>
      <div className="mt-12 grid items-center gap-12 md:grid-cols-[4fr_5fr] md:gap-[clamp(3rem,8vw,9rem)]">
        <div>
          <div className="relative aspect-4/3 overflow-hidden bg-night" aria-label="Ruang arsip visual sekolah">
            <div className="gradient-brick absolute left-[5%] right-[-10%] top-[35%] h-px -rotate-12" />
            <div className="gradient-brick absolute left-[-8%] right-[8%] top-[58%] h-px -rotate-12" />
            <div className="absolute bottom-[18%] right-[15%] h-[48%] w-[42%] border border-paper bg-[repeating-linear-gradient(90deg,transparent_0_18%,rgb(168_41_35/0.7)_18%_21%)]" />
            <span className="absolute bottom-5 left-5 font-mono text-[.65rem] uppercase tracking-[.12em] text-paper/70">Arsip / 01</span>
          </div>
          <p className="mt-4 grid gap-1 text-sm text-brick"><span className="font-mono text-[.68rem] uppercase tracking-[.08em] text-brick-light">Arsip ruang</span>Elemen visual akan diganti dengan foto sekolah terverifikasi.</p>
        </div>
        <div className="max-w-[46ch]">
          <p className="section-label">Akar dan ruang</p>
          <h2 className="display-heading">Pendidikan yang <span className="block text-brick">bergerak.</span></h2>
          <p className="mt-6">Sekolah vokasi adalah tempat pengetahuan bertemu dengan ketekunan. Di sini, setiap kemampuan dibentuk melalui proses yang nyata dan terukur.</p>
          <p className="mt-6">Kami menyiapkan peserta didik untuk membaca perubahan, mengerjakan gagasan, dan mengambil peran di lingkungan sekitarnya.</p>
          <a href="#nilai" className="text-link mt-8">Lanjut ke nilai sekolah <span aria-hidden="true">→</span></a>
        </div>
      </div>
    </section></ScrollReveal>
  );
}
