import { ExploreSection } from "./components/ExploreSection";
import { HeroSection } from "./components/HeroSection";
import { InternshipSection } from "./components/InternshipSection";
import { MajorsSection } from "./components/MajorsSection";
import { ProfileSection } from "./components/ProfileSection";
import { SiteFooter } from "./components/SiteFooter";
import { SiteHeader } from "./components/SiteHeader";
import { ValuesSection } from "./components/ValuesSection";
import { MotionLayer } from "./components/MotionLayer";

export default function Home() {
  return (
    <>
      <MotionLayer />
      <a href="#konten" className="fixed left-3 top-3 z-100 -translate-y-24 bg-brick-light px-3 py-2 text-sm text-paper transition-transform focus:translate-y-0">Lewati ke konten utama</a>
      <SiteHeader />
      <main id="konten" className="overflow-hidden">
        <HeroSection />
        <ProfileSection />
        <ValuesSection />
        <MajorsSection />
        <InternshipSection />
        <ExploreSection />
      </main>
      <SiteFooter />
    </>
  );
}
