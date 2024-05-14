import React, { useState } from "react";
import {
  MapPinIcon,
  StarIcon,
  PhoneArrowDownLeftIcon,
} from "@heroicons/react/24/solid";
import Image from "next/image";

const resto = [
  {
    id: 1,
    foto: "/restoran/lepa-lepa.jpg",
    nama: "Lepa-Lepa",
    kategori: "restoran",
    kontak: "-",
    tag: "Aneka masakan dan dessert",
    rate: "4,3",
    jarak: 0,
    waktu: 0,
    gmaps: "https://maps.app.goo.gl/nuWmuCthvL8bt4bq5",
    href: "https://drive.google.com/drive/folders/1layH0ayQdpp4dAndZgIFKxkHKvwunroo",
    tombol: "Daftar Menu",
  },
  {
    id: 2,
    foto: "/restoran/cilacap.jpg",
    nama: "Cilacap Cafe & Resto",
    kategori: "restoran",
    kontak: "https://wa.me/6282192064422",
    tag: "Seafood, Dessert, Mie Titi",
    rate: "4",
    jarak: "0,7",
    waktu: 6,
    gmaps: "https://maps.app.goo.gl/gdmTHxG4d9QrDirKA",
    href: "https://drive.google.com/drive/folders/1pVnYBA5I62BmJ23hydq93pAHcbGavc0N?usp=drive_link",
    tombol: "Daftar Menu",
  },
  {
    id: 3,
    foto: "/restoran/sambalutta.jpg",
    nama: "RM. New Sambalutta",
    kategori: "rumah makan",
    kontak: "https://wa.me/6282192064422",
    tag: "Seafood",
    rate: "4",
    jarak: "0,9",
    waktu: 5,
    gmaps: "https://maps.app.goo.gl/a5JwzE2q5RjTxks68",
    href: "https://drive.google.com/drive/folders/1tJt-_yzAAM9qrsyiuhSQfEWRj7LCR-aq?usp=drive_link",
    tombol: "Daftar Menu",
  },
  {
    id: 4,
    foto: "/restoran/cici.jpg",
    nama: "Rumah Makan Cici",
    kategori: "restoran",
    kontak: "https://wa.me/6281244356355",
    tag: "Oriental, Ayam, Seafood, Bakmi, Aneka Nasi",
    rate: "4",
    jarak: "4,2",
    waktu: 9,
    gmaps: "https://maps.app.goo.gl/CKCEccNaRjWFnpU17",
    href: "https://drive.google.com/drive/folders/1mGRz1s-bG5y7WCjj9M9TBFBrN2kW03jw",
    tombol: "Daftar Menu",
  },
  {
    id: 5,
    foto: "/restoran/gayatri.jpg",
    nama: "RM. Gayatri",
    kategori: "rumah makan",
    kontak: "https://wa.me/6285298462218",
    tag: "Seafood",
    rate: "4",
    jarak: "0,8",
    waktu: 4,
    gmaps: "https://maps.app.goo.gl/pWhG7ozHbryNwQVr5",
    href: "https://maps.app.goo.gl/pWhG7ozHbryNwQVr5",
    tombol: "Daftar Menu",
  },
  {
    id: 6,
    foto: "/restoran/kfc.jpg",
    nama: "KFC Mamuju",
    kategori: "restoran",
    kontak: "-",
    tag: "Ayam Goreng, Soft Drink, Ice Cream",
    rate: "4,2",
    jarak: "2,8",
    waktu: 15,
    gmaps: "https://maps.app.goo.gl/7MoGKCBYfJCMHP6Y8",
    href: "https://maps.app.goo.gl/7MoGKCBYfJCMHP6Y8",
    tombol: "Daftar Menu",
  },
  {
    id: 7,
    foto: "/restoran/revive.jpg",
    nama: "Revive Cafe & Resto",
    kategori: "cafe",
    kontak: "https://wa.me/6281356321833",
    tag: "Kopi, Seafood, Berbagai Mie",
    rate: "4",
    jarak: "1,5",
    waktu: 6,
    gmaps: "https://maps.app.goo.gl/vTocZK6KvEGL99jy5",
    href: "https://drive.google.com/drive/folders/1kBAMj-XjgQ2HfZZYh11jju-rXj4KvvZ9",
    tombol: "Daftar Menu",
  },
  {
    id: 8,
    foto: "/restoran/paddock.jpg",
    nama: "Paddock Cafe & Resto",
    kategori: "cafe",
    kontak: "-",
    tag: "Kopi, Cemilan, Makanan Berat",
    rate: "4",
    jarak: "2,5",
    waktu: 10,
    gmaps: "https://maps.app.goo.gl/7EVidxSvR2pzVuYy9",
    href: "https://maps.app.goo.gl/7EVidxSvR2pzVuYy9",
    tombol: "Daftar Menu",
  },
  {
    id: 9,
    foto: "/restoran/mak-datuak.jpg",
    nama: "Rumah Makan Padang Mak Datuak",
    kategori: "restoran",
    kontak: "https://wa.me/6282346719355",
    tag: "Masakan padang",
    rate: "4",
    jarak: "0,1",
    waktu: 5,
    gmaps: "https://maps.app.goo.gl/FsNSyMXyEmm9SZQs7",
    href: "https://drive.google.com/drive/folders/1mqz0pj2meoCtvuCOMPSHZij9s3fYaPEL",
    tombol: "Daftar Menu",
  },
  {
    id: 10,
    foto: "/restoran/coto.jpg",
    nama: "Coto Paraikatte",
    kategori: "tradisional",
    kontak: "-",
    tag: "Coto makassar",
    rate: "4",
    jarak: "1",
    waktu: 5,
    gmaps: "https://maps.app.goo.gl/qM2EwdkyMdHahiSR8",
    href: "https://maps.app.goo.gl/qM2EwdkyMdHahiSR8",
    tombol: "Daftar Menu",
  },
  {
    id: 11,
    foto: "/restoran/sop-saudara.jpg",
    nama: "Sop Saudara Rimuku",
    kategori: "tradisional",
    kontak: "-",
    tag: "Sop, Konro, Ikan Bakar",
    rate: "4",
    jarak: "0,9",
    waktu: 5,
    gmaps: "https://maps.app.goo.gl/WSVgAtQNvH2UGvJSA",
    href: "https://drive.google.com/drive/folders/1myAP-W_l6MP7R_U2T8n6EccIITM1gvpf",
    tombol: "Daftar Menu",
  },
  {
    id: 12,
    foto: "/restoran/syndrome.jpg",
    nama: "Syndrome Coffeeshop and Musicstore",
    kategori: "cafe",
    kontak: "-",
    tag: "Kopi, Snack",
    rate: "3,5",
    jarak: "0,9",
    waktu: 5,
    gmaps: "https://maps.app.goo.gl/SaNCJ1wJtvMFmHUA9",
    href: "https://drive.google.com/drive/folders/19gsoAI1CYRdsROTu56Ki6wTXWpExf168?usp=sharing",
    tombol: "Daftar Menu",
  },
  {
    id: 13,
    foto: "/restoran/ruang-rindu.jpg",
    nama: "Ruang Rindu",
    kategori: "cafe",
    kontak: "-",
    tag: "Kopi, Snack",
    rate: "4",
    jarak: "2,2",
    waktu: 10,
    gmaps: "https://maps.app.goo.gl/SBBc1XJYQ2tdzPSt8",
    href: "https://drive.google.com/drive/folders/1lSGwSMTaHqmS9hVOXas7CzlIKenhjpdN",
    tombol: "Daftar Menu",
  },
  {
    id: 14,
    foto: "/restoran/brew.jpg",
    nama: "Brew Coffee & Roastery",
    kategori: "cafe",
    kontak: "https://wa.me/6281935414666",
    tag: "Kopi, Snack",
    rate: "4,5",
    jarak: "3,1",
    waktu: 15,
    gmaps: "https://maps.app.goo.gl/vCnf7eabw6dgsh7E8",
    href: "https://drive.google.com/drive/folders/1k-280rx59BjFK4dCoIoAmaHTR3h6bzbm",
    tombol: "Daftar Menu",
  },
  {
    id: 15,
    foto: "/restoran/mbah-sinem.jpg",
    nama: "Penyetan Mbah Sinem",
    kategori: "rumah makan",
    kontak: "https://wa.me/628114502909",
    tag: "Ayam Goreng, Ikan Goreng, Penyetan, Lalapan",
    rate: "4,6",
    jarak: "2,5",
    waktu: 15,
    gmaps: "https://maps.app.goo.gl/jp6L5d315reRFUFh9",
    href: "https://drive.google.com/drive/folders/1kxy-ACx142b1GIldHAyWsZNU9Kpc8YV1",
    tombol: "Daftar Menu",
  },
  {
    id: 16,
    foto: "/restoran/coto-stie.jpg",
    nama: "Coto STIE",
    kategori: "rumah makan",
    kontak: "https://wa.me/628124286168",
    tag: "Coto Makassar",
    rate: "4,7",
    jarak: "1",
    waktu: 7,
    gmaps: "https://maps.app.goo.gl/VEe5qyGs52MqsCH97",
    href: "https://maps.app.goo.gl/VEe5qyGs52MqsCH97",
    tombol: "Daftar Menu",
  },
  {
    id: 17,
    foto: "/restoran/ayam-manakarra.jpg",
    nama: "Ayam Goreng Manakarra",
    kategori: "rumah makan",
    kontak: "https://wa.me/6285155210811",
    tag: "Ayam Goreng",
    rate: "4,2",
    jarak: "3",
    waktu: 15,
    gmaps: "https://maps.app.goo.gl/Jt69uR31zRbFTrgt8",
    href: "https://drive.google.com/drive/folders/1mwS8sL1SUr8W49E4WFtQkHsEHgUD73LS",
    tombol: "Daftar Menu",
  },
  {
    id: 18,
    foto: "/restoran/minza.jpg",
    nama: "Minza",
    kategori: "rumah makan",
    kontak: "https://wa.me/6281145500033",
    tag: "Aneka Mie",
    rate: "4,8",
    jarak: "0,8",
    waktu: 5,
    gmaps: "https://maps.app.goo.gl/4EvSmQPkcSD7NaM36",
    href: "https://drive.google.com/drive/folders/1lFSi1BMJ6n4gdXYDV2Bdr7P5-UUyXlFx",
    tombol: "Daftar Menu",
  },
  {
    id: 19,
    foto: "/restoran/sushira.jpg",
    nama: "Sushirah",
    kategori: "cafe",
    kontak: "https://wa.me/6282393114880",
    tag: "Sushi, Japanese Food",
    rate: "4,4",
    jarak: "1,2",
    waktu: 10,
    gmaps: "https://maps.app.goo.gl/2BayzvyLmn2Wt7wz6",
    href: "https://drive.google.com/drive/folders/1OgA9oWkCBYGYkfqa5P3S91zs3dnaFF8G?usp=sharing",
    tombol: "Daftar Menu",
  },
  {
    id: 20,
    foto: "/restoran/dapoer-ns.jpg",
    nama: "Dapoer NS",
    kategori: "rumah makan",
    kontak: "https://wa.me/6281343958622",
    tag: "kedai sarapan dan makan siang",
    rate: "4,5",
    jarak: "2,2",
    waktu: 10,
    gmaps: "https://maps.app.goo.gl/NfqB42n6b2dwvTGA9",
    href: "https://drive.google.com/drive/folders/1OgA9oWkCBYGYkfqa5P3S91zs3dnaFF8G?usp=sharing",
    tombol: "Daftar Menu",
  },
  {
    id: 21,
    foto: "/restoran/mj-solo.jpg",
    nama: "Bakso MJ Solo",
    kategori: "rumah makan",
    kontak: "https://wa.me/6281355134499",
    tag: "Bakso",
    rate: "4,4",
    jarak: "3,2",
    waktu: 15,
    gmaps: "https://maps.app.goo.gl/ebG1oaPKForzkvEL8",
    href: "https://drive.google.com/drive/folders/1l7BOjNDPcsQSRnWP3Z_utqy1MBDs9003",
    tombol: "Daftar Menu",
  },
  {
    id: 22,
    foto: "/restoran/dap.jpg",
    nama: "Dap Cafe & Resto",
    kategori: "restoran",
    kontak: "https://wa.me/6282349390743",
    tag: "Aneka masakan, minuman, cemilan",
    rate: "5",
    jarak: "3,5",
    waktu: 20,
    gmaps: "https://maps.app.goo.gl/VpN8aNkwHsYtPVNv7",
    href: "https://drive.google.com/drive/folders/1klENh7c4qYT9DO9HaIOPJSgnzliwFThF",
    tombol: "Daftar Menu",
  },
  {
    id: 23,
    foto: "/restoran/lukes.jpg",
    nama: "Luke's Bistro & Cafe",
    kategori: "cafe",
    kontak: "https://wa.me/628114514888",
    tag: "Aneka masakan, kopi, dessert",
    rate: "4,2",
    jarak: "1",
    waktu: 7,
    gmaps: "https://maps.app.goo.gl/SLU5HK2Tqn6pdodh9",
    href: "https://drive.google.com/drive/folders/1mZR96f1WhbE9XHcA0qKUX2LevuPfl3zj",
    tombol: "Daftar Menu",
  },
  {
    id: 24,
    foto: "/restoran/haedon.jpg",
    nama: "Hae Don Mamuju",
    kategori: "cafe",
    kontak: "https://wa.me/6281944563562",
    tag: "All you can eat",
    rate: "4,4",
    jarak: "0,9",
    waktu: 6,
    gmaps: "https://maps.app.goo.gl/FnYdDuyycehHdmtp7",
    href: "https://drive.google.com/drive/folders/1me5WQ1zsBgLuFs1W9ogyeRmUqG1vjznQ",
    tombol: "Daftar Menu",
  },
  {
    id: 25,
    foto: "/restoran/coto-axuri.jpg",
    nama: "Coto Axuri",
    kategori: "rumah makan",
    kontak: "-",
    tag: "Coto Makassar",
    rate: "4,4",
    jarak: "1,4",
    waktu: 5,
    gmaps: "https://maps.app.goo.gl/jdrDLt2ubJwUGUYa8",
    href: "-",
    tombol: "Daftar Menu",
  },
  {
    id: 26,
    foto: "/restoran/lywanza.jpg",
    nama: "Lywanza Hills",
    kategori: "cafe",
    kontak: "https://wa.me/6281211114690",
    tag: "Aneka makanan dan minuman",
    rate: "4,5",
    jarak: "4,1",
    waktu: 10,
    gmaps: "https://maps.app.goo.gl/WMVaEDagV9PBiUH3A",
    href: "https://drive.google.com/drive/folders/1mXzKHpbzZTmzKzT91SF5W-HQtyLx6PS2",
    tombol: "Daftar Menu",
  },
  {
    id: 27,
    foto: "/restoran/hn-cafe.jpg",
    nama: "HN Cafe Mamuju",
    kategori: "cafe",
    kontak: "https://wa.me/628114203040",
    tag: "Aneka makanan dan minuman",
    rate: "4,3",
    jarak: "2,4",
    waktu: 6,
    gmaps: "https://maps.app.goo.gl/Yp7GJ2qDs3eJwX34A",
    href: "https://drive.google.com/drive/folders/1n-9Fcvh7S4CdNkdc8NtBY9nwS7umkAXv",
    tombol: "Daftar Menu",
  },
  {
    id: 28,
    foto: "/restoran/food-court.jpg",
    nama: "Bakso Judes",
    kategori: "food court",
    kontak: "https://wa.me/6282231104204",
    tag: "Bakso, Bakso Mercon",
    rate: "-",
    jarak: "0,9",
    waktu: 5,
    gmaps: "https://maps.app.goo.gl/jFumjY32CZ16UrGm9",
    href: "https://drive.google.com/file/d/1wU02eJoJKflqvOdTsvEpRP8sbYiO5pz3/view?usp=sharing",
    tombol: "Daftar Menu",
  },
  {
    id: 29,
    foto: "/restoran/food-court.jpg",
    nama: "Ricebowl Bittes",
    kategori: "food court",
    kontak: "https://wa.me/6282231104204",
    tag: "Ricebowl",
    rate: "-",
    jarak: "0,9",
    waktu: 5,
    gmaps: "https://maps.app.goo.gl/jFumjY32CZ16UrGm9",
    href: "https://drive.google.com/file/d/1wNFvJ4YlznpsdpM2Tx--gc90e5vxALP7/view?usp=sharing",
    tombol: "Daftar Menu",
  },
  {
    id: 30,
    foto: "/restoran/food-court.jpg",
    nama: "Kandesapo",
    kategori: "food court",
    kontak: "https://wa.me/6285159558703",
    tag: "Aneka makanan dan minuman",
    rate: "-",
    jarak: "0,9",
    waktu: 5,
    gmaps: "https://maps.app.goo.gl/jFumjY32CZ16UrGm9",
    href: "https://drive.google.com/file/d/1dFm0DVjm9_gFQYDYOMVmG7UEe98C3QrY/view?usp=sharing",
    tombol: "Daftar Menu",
  },
  {
    id: 31,
    foto: "/restoran/food-court.jpg",
    nama: "Sop Saudara Iga Sapi",
    kategori: "food court",
    kontak: "https://wa.me/6282347356554",
    tag: "Aneka makanan dan minuman",
    rate: "-",
    jarak: "0,9",
    waktu: 5,
    gmaps: "https://maps.app.goo.gl/jFumjY32CZ16UrGm9",
    href: "https://drive.google.com/file/d/1bQU8OT6MMlWZion35174_Eq-YdPtY-5L/view?usp=sharing",
    tombol: "Daftar Menu",
  },
  {
    id: 32,
    foto: "/restoran/food-court.jpg",
    nama: "Raja Steak",
    kategori: "food court",
    kontak: "https://wa.me/6281242821126",
    tag: "Steak",
    rate: "-",
    jarak: "0,9",
    waktu: 5,
    gmaps: "https://maps.app.goo.gl/jFumjY32CZ16UrGm9",
    href: "https://drive.google.com/file/d/1eL1rvJfBvq0tbvmevdrPptVNA7bWiSl5/view?usp=sharing",
    tombol: "Daftar Menu",
  },
  {
    id: 32,
    foto: "/restoran/food-court.jpg",
    nama: "FA Dragon",
    kategori: "food court",
    kontak: "https://wa.me/6281354565399",
    tag: "Korean Food",
    rate: "-",
    jarak: "0,9",
    waktu: 5,
    gmaps: "https://maps.app.goo.gl/jFumjY32CZ16UrGm9",
    href: "https://drive.google.com/file/d/1jOLN-pxtB-WSMXz5mhoWf0yLOjk2SpMK/view?usp=sharing",
    tombol: "Daftar Menu",
  },
  {
    id: 33,
    foto: "/restoran/food-court.jpg",
    nama: "Rumah Pasta",
    kategori: "food court",
    kontak: "https://wa.me/6285222226934",
    tag: "Dessert",
    rate: "-",
    jarak: "0,9",
    waktu: 5,
    gmaps: "https://maps.app.goo.gl/jFumjY32CZ16UrGm9",
    href: "https://drive.google.com/file/d/1uJxEsL08i-HuolwxUK7DUhTnaeWNg3Iz/view?usp=sharing",
    tombol: "Daftar Menu",
  },
  {
    id: 34,
    foto: "/restoran/food-court.jpg",
    nama: "Arabian Food",
    kategori: "food court",
    kontak: "https://wa.me/6281241658370",
    tag: "Masakan Khas Timur Tengah",
    rate: "-",
    jarak: "0,9",
    waktu: 5,
    gmaps: "https://maps.app.goo.gl/jFumjY32CZ16UrGm9",
    href: "https://drive.google.com/file/d/15_nVf7mR-T_l-o_ytmazxOnjbfqGwJj8/view?usp=sharing",
    tombol: "Daftar Menu",
  },
  {
    id: 35,
    foto: "/restoran/food-court.jpg",
    nama: "Warung Azisyah",
    kategori: "food court",
    kontak: "https://wa.me/6281288715709",
    tag: "Aneka Makanan dan Minuman",
    rate: "-",
    jarak: "0,9",
    waktu: 5,
    gmaps: "https://maps.app.goo.gl/jFumjY32CZ16UrGm9",
    href: "https://drive.google.com/file/d/1e4xtIU7T7GB4uPfS3TStNxetC-FyJs1j/view?usp=sharing",
    tombol: "Daftar Menu",
  },
  {
    id: 36,
    foto: "/restoran/food-court.jpg",
    nama: "Bujur Food",
    kategori: "food court",
    kontak: "https://wa.me/6282291504201",
    tag: "Soto Banjar, Gado-Gado",
    rate: "-",
    jarak: "0,9",
    waktu: 5,
    gmaps: "https://maps.app.goo.gl/jFumjY32CZ16UrGm9",
    href: "https://drive.google.com/file/d/1SMB1Vt9YLgD6VHV00pD3JvW_wfkGGOwy/view?usp=sharing",
    tombol: "Daftar Menu",
  },
  {
    id: 37,
    foto: "/restoran/food-court.jpg",
    nama: "Sate Taichan Malabho",
    kategori: "food court",
    kontak: "https://wa.me/6281255556887",
    tag: "Sate Ayam",
    rate: "-",
    jarak: "0,9",
    waktu: 5,
    gmaps: "https://maps.app.goo.gl/jFumjY32CZ16UrGm9",
    href: "https://drive.google.com/file/d/1kVzjk1OZ0rhI0jmLgAfrCbi9HOc7DdLI/view?usp=sharing",
    tombol: "Daftar Menu",
  },
];

export function Restoran() {
  const [selectedCategory, setSelectedCategory] = useState<string | []>([]);
  const [filteredresto, setFilteredData] = useState(resto);

  const handleFilter = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const category = event.target.value;
    setSelectedCategory(category);

    if (!category) {
      setFilteredData(resto);
      return;
    }

    setFilteredData(resto.filter((item) => item.kategori === category));
  };

  return (
    <div className="mt-6">
      <p className="mb-2 text-sm text-gray-400 dark:text-gray-200">
        Tampilkan berdasarkan kategori:
      </p>
      <div>
        <select
          className="focus:shadow-outline mb-3 appearance-none rounded border border-gray-400 bg-white px-4 text-sm shadow-sm focus:outline-none dark:border-gray-700 dark:bg-gray-800"
          onChange={handleFilter}
          value={selectedCategory || ""}
        >
          <option value="">Semua</option>
          <option value="restoran">Restoran</option>
          <option value="tradisional">Makanan Tradisional</option>
          <option value="cafe">Warung Minum/Kafe</option>
        </select>
      </div>
      <div className="mx-auto max-w-2xl px-2 py-2 sm:px-2 sm:py-2 lg:max-w-7xl lg:px-2">
        <div className="mt-2 grid grid-cols-1 gap-x-2 gap-y-10 sm:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 xl:gap-x-2">
          {filteredresto.map((item) => (
            <div
              key={item.id}
              className="max-w-sm rounded-lg border border-gray-200 bg-white shadow dark:border-gray-700 dark:bg-gray-800"
            >
              <a href={item.href} target="_blank" rel="noopener noreferrer">
                <Image
                  className="rounded-t-lg"
                  width="630"
                  height="420"
                  src={item.foto}
                  alt="claro"
                />
              </a>

              <div className="p-5">
                <h5 className="mb-0 text-lg font-bold tracking-tight text-gray-900 dark:text-white">
                  {item.nama}
                </h5>
                <div className="mb-1 flex items-center justify-between align-middle">
                  <p className="text-xstext-gray-700 font-normal dark:text-white">
                    {item.tag}
                  </p>
                </div>
                <div className="mb-1 flex items-center justify-between align-middle">
                  <p className="text-sm font-normal text-gray-700 dark:text-white">
                    <StarIcon
                      className="inline-flex h-6 w-6 flex-shrink-0 text-yellow-500"
                      aria-hidden="true"
                    />{" "}
                    {item.rate}{" "}
                    <MapPinIcon
                      className="inline-flex h-6 w-6 flex-shrink-0 text-red-500"
                      aria-hidden="true"
                    />{" "}
                    {item.jarak} km • {item.waktu} mnt
                  </p>
                </div>
                <div className="flex items-center justify-between align-middle">
                  <a
                    href={item.gmaps}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <span className="mb-3 inline-block text-sm font-medium text-blue-500">
                      Lihat Peta →
                    </span>
                  </a>
                </div>
                <div className="mb-1 flex items-center justify-between align-middle">
                  <a
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-lg bg-blue-600 px-2.5 py-1.5 text-center text-sm font-medium text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                  >
                    {item.tombol}
                  </a>
                  <a
                    href={item.kontak}
                    className="rounded-lg bg-emerald-600 px-2.5 py-1.5 text-center text-sm font-medium text-white hover:bg-emerald-700 focus:outline-none focus:ring-2 focus:ring-emerald-300 dark:bg-emerald-600 dark:hover:bg-emerald-700 dark:focus:ring-emerald-800"
                  >
                    <PhoneArrowDownLeftIcon className="mr-1 inline-flex h-4 w-4 flex-shrink-0 align-middle text-white" />{" "}
                    Kontak
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
