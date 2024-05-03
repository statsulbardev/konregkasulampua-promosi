import { CSSProperties } from "react";

export type Sponsor = {
  caption: string;
  image: string;
  infoLink: string;
  pinned?: boolean;
  style?: CSSProperties;
};

export const users: Array<Sponsor> = [
  {
    caption: "Pemda",
    image: "/logos/sulbarprov.png",
    infoLink: "https://bapperida.sulbarprov.go.id/",
    pinned: true,
    style: {
      width: 80,
      height: 80,
    },
  },
  {
    caption: "BPS",
    image: "/logos/bps.png",
    infoLink: "https://sulbar.bps.go.id/",
    pinned: true,
    style: {
      width: 100,
      height: 70,
    },
  },
  {
    caption: "BI",
    image: "/logos/bi.png",
    infoLink:
      "https://www.bi.go.id/id/tentang-bi/profil/organisasi/Pages/Kantor-Perwakilan-Sulawesi-Barat.aspx",
    pinned: true,
    style: {
      width: 80,
      height: 80,
    },
  },
  {
    caption: "DJPB",
    image: "/logos/djpb.png",
    infoLink: "https://djpb.kemenkeu.go.id/kanwil/sulbar/id/",
    pinned: true,
    style: {
      width: 80,
      height: 80,
    },
  },
];
