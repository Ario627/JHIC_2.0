export type PinSize = "sm" | "md" | "lg";

export type JurusanTrail = {
  id: string;
  kode: string;
  nama: string;
  logo: string;
  pin: { top: string; left: string; ukuran: PinSize };
  shard: { top: string; left: string; rotate: number };
  bend: number;
};

export const jurusanTrails: JurusanTrail[] = [
  { id: "akl", kode: "AKL", nama: "Akuntansi dan Keuangan Lembaga", logo: "/images/jurusan/akl.png", pin: { top: "24%", left: "68%", ukuran: "md" }, shard: { top: "18%", left: "68%", rotate: -12 }, bend: -0.16 },
  { id: "mplb", kode: "MPLB", nama: "Manajemen Perkantoran dan Layanan Bisnis", logo: "/images/jurusan/mplb.png", pin: { top: "42%", left: "84%", ukuran: "sm" }, shard: { top: "40%", left: "82%", rotate: 9 }, bend: 0.2 },
  { id: "pm", kode: "PM", nama: "Pemasaran", logo: "/images/jurusan/pm.png", pin: { top: "67%", left: "61%", ukuran: "lg" }, shard: { top: "65%", left: "70%", rotate: -7 }, bend: -0.22 },
  { id: "tjkt", kode: "TJKT", nama: "Teknik Jaringan Komputer dan Telekomunikasi", logo: "/images/jurusan/tjkt.png", pin: { top: "17%", left: "89%", ukuran: "sm" }, shard: { top: "25%", left: "84%", rotate: 14 }, bend: 0.18 },
  { id: "pplg", kode: "PPLG", nama: "Pengembangan Perangkat Lunak dan Gim", logo: "/images/jurusan/pplg.png", pin: { top: "78%", left: "78%", ukuran: "md" }, shard: { top: "78%", left: "80%", rotate: 10 }, bend: 0.24 },
  { id: "dkv", kode: "DKV", nama: "Desain Komunikasi Visual", logo: "/images/jurusan/dkv.png", pin: { top: "51%", left: "73%", ukuran: "lg" }, shard: { top: "50%", left: "61%", rotate: -16 }, bend: -0.2 },
  { id: "tf", kode: "TF", nama: "Teknologi Farmasi", logo: "/images/jurusan/tf.png", pin: { top: "34%", left: "58%", ukuran: "sm" }, shard: { top: "35%", left: "56%", rotate: 7 }, bend: 0.14 },
];

export const pinRegistry = new Map<string, HTMLElement>();
export const shardRegistry = new Map<string, HTMLElement>();

export function registerPin(id: string, element: HTMLElement | null) {
  if (element) pinRegistry.set(id, element);
  else pinRegistry.delete(id);
}

export function registerShard(id: string, element: HTMLElement | null) {
  if (element) shardRegistry.set(id, element);
  else shardRegistry.delete(id);
}
