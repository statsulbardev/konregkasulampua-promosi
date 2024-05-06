import React, { useState } from "react";
import { MapPinIcon, StarIcon } from "@heroicons/react/24/solid";
import Image from "next/image";

const resto = [
  {
    id: 1,
    foto: "/restoran/lepa-lepa.jpg",
    nama: "Lepa-Lepa",
    kategori: "restoran",
    tag: "Pizza, Makanan Berat, Makanan Tradisional",
    rate: "4,3",
    jarak: 0,
    waktu: 0,
    gmaps: "https://maps.app.goo.gl/nuWmuCthvL8bt4bq5",
    href: "https://maps.app.goo.gl/u7UEdH1Fy9XCbYpD7",
    tombol: "Makan/Pesan",
  },
  {
    id: 2,
    foto: "/restoran/cilacap.jpg",
    nama: "Cilacap Cafe & Resto",
    kategori: "restoran",
    tag: "Seafood, Dessert, Mie Titi",
    rate: "4",
    jarak: "0,7",
    waktu: 6,
    gmaps: "https://maps.app.goo.gl/gdmTHxG4d9QrDirKA",
    href: "https://maps.app.goo.gl/gdmTHxG4d9QrDirKA",
    tombol: "Makan/Pesan",
  },
  {
    id: 3,
    foto: "/restoran/sambalutta.jpg",
    nama: "RM. New Sambalutta",
    kategori: "rumah makan",
    tag: "Seafood",
    rate: "4",
    jarak: "0,9",
    waktu: 5,
    gmaps: "https://maps.app.goo.gl/a5JwzE2q5RjTxks68",
    href: "https://maps.app.goo.gl/a5JwzE2q5RjTxks68",
    tombol: "Makan/Pesan",
  },
  {
    id: 4,
    foto: "/restoran/cici.jpg",
    nama: "Rumah Makan Cici",
    kategori: "restoran",
    tag: "Oriental, Ayam, Seafood, Bakmi, Aneka Nasi",
    rate: "4",
    jarak: "4,2",
    waktu: 9,
    gmaps: "https://maps.app.goo.gl/CKCEccNaRjWFnpU17",
    href: "https://maps.app.goo.gl/CKCEccNaRjWFnpU17",
    tombol: "Makan/Pesan",
  },
  {
    id: 5,
    foto: "/restoran/gayatri.jpg",
    nama: "RM. Gayatri",
    kategori: "rumah makan",
    tag: "Seafood",
    rate: "4",
    jarak: "0,8",
    waktu: 4,
    gmaps: "https://maps.app.goo.gl/pWhG7ozHbryNwQVr5",
    href: "https://maps.app.goo.gl/pWhG7ozHbryNwQVr5",
    tombol: "Makan/Pesan",
  },
  {
    id: 6,
    foto: "/restoran/kfc.jpg",
    nama: "KFC Mamuju",
    kategori: "restoran",
    tag: "Ayam Goreng, Soft Drink, Ice Cream",
    rate: "4,2",
    jarak: "2,8",
    waktu: 15,
    gmaps: "https://maps.app.goo.gl/7MoGKCBYfJCMHP6Y8",
    href: "https://maps.app.goo.gl/7MoGKCBYfJCMHP6Y8",
    tombol: "Makan/Pesan",
  },
  {
    id: 7,
    foto: "/restoran/revive.jpg",
    nama: "Revive Cafe & Resto",
    kategori: "cafe",
    tag: "Kopi, Seafood, Berbagai Mie",
    rate: "4",
    jarak: "1,5",
    waktu: 6,
    gmaps: "https://maps.app.goo.gl/vTocZK6KvEGL99jy5",
    href: "https://maps.app.goo.gl/mZ6ECVVfHvDhRzDm6",
    tombol: "Makan/Pesan",
  },
  {
    id: 8,
    foto: "/restoran/paddock.jpg",
    nama: "Paddock Cafe & Resto",
    kategori: "cafe",
    tag: "Kopi, Cemilan, Makanan Berat",
    rate: "4",
    jarak: "2,5",
    waktu: 10,
    gmaps: "https://maps.app.goo.gl/7EVidxSvR2pzVuYy9",
    href: "https://maps.app.goo.gl/7EVidxSvR2pzVuYy9",
    tombol: "Makan/Pesan",
  },
  {
    id: 9,
    foto: "/restoran/mak-datuak.jpg",
    nama: "Rumah Makan Padang Mak Datuak",
    kategori: "restoran",
    tag: "Masakan padang",
    rate: "4",
    jarak: "0,1",
    waktu: 5,
    gmaps: "https://maps.app.goo.gl/FsNSyMXyEmm9SZQs7",
    href: "https://maps.app.goo.gl/FsNSyMXyEmm9SZQs7",
    tombol: "Makan/Pesan",
  },
  {
    id: 10,
    foto: "/restoran/coto.jpg",
    nama: "Coto Paraikatte",
    kategori: "tradisional",
    tag: "Coto makassar",
    rate: "4",
    jarak: "1",
    waktu: 5,
    gmaps: "https://maps.app.goo.gl/qM2EwdkyMdHahiSR8",
    href: "https://maps.app.goo.gl/qM2EwdkyMdHahiSR8",
    tombol: "Makan/Pesan",
  },
  {
    id: 11,
    foto: "/restoran/sop-saudara.jpg",
    nama: "Sop Saudara",
    kategori: "tradisional",
    tag: "Sop, Konro, Ikan Bakar",
    rate: "4",
    jarak: "0,9",
    waktu: 5,
    gmaps: "https://maps.app.goo.gl/qtZvUsAHiLGdhS38A",
    href: "https://maps.app.goo.gl/qtZvUsAHiLGdhS38A",
    tombol: "Makan/Pesan",
  },
  {
    id: 12,
    foto: "/restoran/syndrome.jpg",
    nama: "Syndrome Coffeeshop and Musicstore",
    kategori: "cafe",
    tag: "Kopi, Snack",
    rate: "3,5",
    jarak: "0,9",
    waktu: 5,
    gmaps: "https://maps.app.goo.gl/SaNCJ1wJtvMFmHUA9",
    href: "https://maps.app.goo.gl/SaNCJ1wJtvMFmHUA9",
    tombol: "Makan/Pesan",
  },
  {
    id: 13,
    foto: "/restoran/ruang-rindu.jpg",
    nama: "Ruang Rindu",
    kategori: "cafe",
    tag: "Kopi, Snack",
    rate: "4",
    jarak: "2,2",
    waktu: 10,
    gmaps: "https://maps.app.goo.gl/SBBc1XJYQ2tdzPSt8",
    href: "https://maps.app.goo.gl/SBBc1XJYQ2tdzPSt8",
    tombol: "Makan/Pesan",
  },
  {
    id: 14,
    foto: "/restoran/brew.jpg",
    nama: "Brew Coffee & Roastery",
    kategori: "cafe",
    tag: "Kopi, Snack",
    rate: "4,5",
    jarak: "3,1",
    waktu: 15,
    gmaps: "https://maps.app.goo.gl/vCnf7eabw6dgsh7E8",
    href: "https://maps.app.goo.gl/vCnf7eabw6dgsh7E8",
    tombol: "Makan/Pesan",
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
                <a
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-lg bg-blue-600 px-2.5 py-1.5 text-center text-sm font-medium text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                  {item.tombol}
                </a>
              </div>
            </div>
          ))}
        </div>
        <p className="mt-12 text-xs">
          Sumber data: Dinas Pariwisata Provinsi Sulawesi Barat
        </p>
      </div>
    </div>
  );
}
