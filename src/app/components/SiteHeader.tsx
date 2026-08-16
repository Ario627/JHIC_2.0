export function SiteHeader() {
  return (
    <header className="absolute inset-x-0 top-0 z-40 text-paper">
      <nav className="mx-auto flex min-h-20 w-[min(1240px,calc(100%-3rem))] items-center justify-between border-b border-paper/25">
        <a href="#awal" className="flex items-baseline gap-2 font-display leading-none" aria-label="SMKN 1 Purwokerto, halaman awal">
          <strong className="text-[1.1rem] tracking-[-.04em]">SMKN 1</strong>
          <span className="font-mono text-[.65rem] uppercase tracking-[.08em] text-brick-lighter">Purwokerto</span>
        </a>
        <div className="hidden items-center gap-7 text-[.92rem] md:flex">
          <a href="#profil" className="nav-link">Profil</a>
          <a href="#nilai" className="nav-link">Nilai</a>
          <a href="#jurusan" className="nav-link">Jurusan</a>
          <a href="#pkl" className="nav-link">PKL</a>
          <a href="#kontak" className="button-slice inline-flex min-h-11 items-center bg-paper px-5 font-semibold text-brick-dark">Info penerimaan <span className="ml-2" aria-hidden="true">↗</span></a>
        </div>
        <a href="#kontak" className="font-mono text-xs uppercase text-brick-lighter md:hidden">Info</a>
      </nav>
    </header>
  );
}
