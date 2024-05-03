import { MapPinIcon } from "@heroicons/react/24/solid";
import Image from "next/image";
import Link from "next/link";

const mal = [
  {
    id: 1,
    foto: "/minimarket/maleo.jpg",
    nama: "Maleo Town Square",
    jarak: "0,9",
    waktu: 3,
    gmaps: "https://maps.app.goo.gl/VkRnvwVW8mG45NH4A",
  },
  {
    id: 2,
    foto: "/minimarket/diy.jpg",
    nama: "Mr. DIY",
    jarak: "0,9",
    waktu: 3,
    gmaps: "https://maps.app.goo.gl/46nXS3j34tsXrpQ48",
  },
  {
    id: 3,
    foto: "/minimarket/subur.jpg",
    nama: "Toko Subur Union",
    jarak: "1,1",
    waktu: 5,
    gmaps: "https://maps.app.goo.gl/JE3EzgVJfGBbaV2S9",
  },
  {
    id: 4,
    foto: "/minimarket/family.jpg",
    nama: "Toko Family",
    jarak: "1,1",
    waktu: 5,
    gmaps: "https://maps.app.goo.gl/ayjJoNAixSyZ66EQ9",
  },
];

export function Mal() {
  return (
    <div className="mx-auto max-w-2xl px-2 py-2 sm:px-2 sm:py-2 lg:max-w-7xl lg:px-2">
      <div className="mt-2 grid grid-cols-1 gap-x-2 gap-y-10 sm:grid-cols-1 lg:grid-cols-2 xl:grid-cols-2 xl:gap-x-2">
        {mal.map((item) => (
          <div
            key={item.id}
            className="max-w-sm rounded-lg border border-gray-200 bg-white shadow dark:border-gray-700 dark:bg-gray-800"
          >
            <Link
              href={item.gmaps}
              target="_blank"
              className="flex flex-row items-center"
            >
              <Image
                className="h-36 w-24 rounded-l-lg object-cover"
                width="450"
                height="600"
                src={item.foto}
                alt="foto"
              />
              <div className="flex flex-col justify-between p-4 leading-normal">
                <h5 className="mb-1 text-lg font-bold tracking-tight text-gray-900 dark:text-white">
                  {item.nama}
                </h5>
                <div className="mb-1 flex items-center justify-between align-middle">
                  <p className="font-normal text-gray-700 dark:text-white">
                    <MapPinIcon
                      className="hidden h-6 w-6 flex-shrink-0 text-red-500 md:inline-flex lg:inline-flex"
                      aria-hidden="true"
                    />{" "}
                    {item.jarak} km • {item.waktu} menit
                  </p>
                </div>
                <div rel="noopener noreferrer">
                  <span className="mb-3 inline-block text-sm font-medium text-blue-500">
                    Lihat Peta →
                  </span>
                </div>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
