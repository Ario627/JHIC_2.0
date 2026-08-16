export type SchoolGalleryItem = {
  src: string;
  alt: string;
  caption: string;
};

export type SchoolLink = {
  label: string;
  href: string;
};

export type SchoolContent = {
  name: string;
  locationLabel: string;
  heroDescription: string;
  profile: {
    heading: string;
    body: string;
  };
  gallery: SchoolGalleryItem[];
  links: SchoolLink[];
};

export const schoolImages = {
  hero: {
    drone: "/images/hero-drone.webp",
    event: "/images/hero-event.webp",
    karya: "/images/hero-karya.webp",
  },
  gallery: [
    "/images/fasad-smkn1.webp",
    "/images/ruang-praktik-smkn1.webp",
    "/images/aktivitas-smkn1.webp",
  ],
} as const;

export const schoolContent: SchoolContent = {
  name: "SMKN 1 Purwokerto",
  locationLabel: "Sekolah vokasi · Purwokerto",
  heroDescription:
    "SMKN 1 Purwokerto menyiapkan langkah melalui pembelajaran yang dekat dengan praktik, disiplin, dan kehidupan nyata.",
  profile: {
    heading: "Pendidikan yang bergerak.",
    body: "Sekolah vokasi adalah tempat pengetahuan bertemu dengan ketekunan. Setiap kemampuan dibentuk melalui proses yang nyata dan terukur.",
  },
  gallery: [
    {
      src: "/images/fasad-smkn1.webp",
      alt: "Fasad gedung SMKN 1 Purwokerto",
      caption: "Fasad sekolah",
    },
    {
      src: "/images/ruang-praktik-smkn1.webp",
      alt: "Ruang praktik SMKN 1 Purwokerto",
      caption: "Ruang praktik",
    },
    {
      src: "/images/aktivitas-smkn1.webp",
      alt: "Aktivitas pembelajaran di SMKN 1 Purwokerto",
      caption: "Aktivitas belajar",
    },
  ],
  links: [
    {
      label: "Profil sekolah",
      href: "#profil",
    },
    {
      label: "Program keahlian",
      href: "#jelajah",
    },
    {
      label: "Info penerimaan",
      href: "#kontak",
    },
  ],
};
