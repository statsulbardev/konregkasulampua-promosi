import React, { useState } from "react";
import { MapPinIcon, TagIcon } from "@heroicons/react/24/solid";
import Image from "next/image";
import Link from "next/link";

const oleh = [
  {
    id: 1,
    foto: "/oleh/cendera-mata.jpg",
    nama: "Toko Cendera Mata Sulbar",
    kategori: "oleh-oleh",
    tag: "Tenun, makanan, kain, kerajinan",
    gmaps: "https://maps.app.goo.gl/6w8PRrvRxKGQCpcb7",
    kontak: "https://wa.me/081245959890",
  },
  {
    id: 2,
    foto: "/oleh/bagea-crispy.jpg",
    nama: "Bagea Crispy",
    kategori: "oleh-oleh",
    tag: "Makanan ringan, suvenir",
    gmaps: "https://maps.app.goo.gl/VGgXVdK3rETuHciu5",
    kontak: "https://wa.me/081340899397",
  },
  {
    id: 3,
    foto: "/oleh/pawonqu.jpg",
    nama: "PawonQu",
    kategori: "oleh-oleh",
    tag: "kue tradisional",
    gmaps: "https://maps.app.goo.gl/nqBi45jABuQ8LtG9A",
    kontak: "https://wa.me/085330226900",
  },
];

export function Oleholeh() {
  const [selectedCategory, setSelectedCategory] = useState<string | []>([]);
  const [filteredoleh, setFilteredData] = useState(oleh);

  const handleFilter = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const category = event.target.value;
    setSelectedCategory(category);

    if (!category) {
      setFilteredData(oleh);
      return;
    }

    setFilteredData(oleh.filter((item) => item.kategori === category));
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
          <option value="makanan">Makanan dan Souvenir</option>
          <option value="tenun">Rumah Tenun</option>
        </select>
      </div>
      <div className="mx-auto max-w-2xl px-2 py-2 sm:px-2 sm:py-2 lg:max-w-7xl lg:px-2">
        <div className="mt-2 grid grid-cols-1 gap-x-2 gap-y-10 sm:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 xl:gap-x-2">
          {filteredoleh.map((item) => (
            <div
              key={item.id}
              className="max-w-sm rounded-lg border border-gray-200 bg-white shadow dark:border-gray-700 dark:bg-gray-800"
            >
              <Link
                href={item.kontak}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  className="rounded-t-lg"
                  width="630"
                  height="420"
                  src={item.foto}
                  alt="claro"
                />
              </Link>

              <div className="p-5">
                <h5 className="mb-0 text-lg font-bold tracking-tight text-gray-900 dark:text-white">
                  {item.nama}
                </h5>
                <p
                  className="mb-2 text-sm opacity-80"
                  style={{ marginTop: ".5rem" }}
                >
                  <TagIcon className="mr-1 inline-flex h-4 w-4 flex-shrink-0 align-middle opacity-80" />{" "}
                  {item.tag}
                </p>
                <div className="flex items-center justify-between align-middle">
                  <Link
                    href={item.gmaps}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <span className="mb-3 inline-block text-sm font-medium text-blue-500">
                      Lihat Peta →
                    </span>
                  </Link>
                </div>
                <div className="mt-1 flex flex-wrap gap-2">
                  <Link
                    href={item.kontak}
                    className="inline-flex items-center rounded bg-black px-3 py-2 text-center text-sm font-medium text-white hover:bg-gray-800 focus:outline-none focus:ring-4 focus:ring-gray-300"
                  >
                    <span>
                      <img
                        src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/WhatsApp_icon.png/598px-WhatsApp_icon.png"
                        className="inline-flex h-5  w-5"
                      />{" "}
                      Kontak
                    </span>
                    <style jsx>{`
                      span {
                        padding: 0;
                        mask-image: linear-gradient(
                          60deg,
                          black 25%,
                          rgba(0, 0, 0, 0.2) 50%,
                          black 75%
                        );
                        mask-size: 400%;
                        mask-position: 0%;
                      }
                      span:hover {
                        mask-position: 100%;
                        transition: mask-position 1s ease,
                          -webkit-mask-position 1s ease;
                      }
                    `}</style>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
