import {
  MapPinIcon,
  TagIcon,
  MapIcon,
  ClockIcon,
  ExclamationTriangleIcon,
  TicketIcon,
} from "@heroicons/react/24/solid";
import Image from "next/image";

const objekwisata = [
  {
    id: 1,
    foto: "/objekwisata/sulbar/buntu-liarra.jpg",
    wisata: "Buntu Liarra",
    lokasi: "Kab. Mamasa",
    jarak: 125,
    durasi: "4 jam",
    tiket: "-",
    kapal: "-",
    keterangan: "Darat",
    gmaps: "https://maps.app.goo.gl/E7WbzwSHZD1fErBU9",
    href: "#",
  },
  {
    id: 2,
    foto: "/objekwisata/sulbar/rawa-bangun.jpg",
    wisata: "Wisata Alam Rawa Bangun",
    lokasi: "Kab. Polewali Mandar",
    jarak: 220,
    durasi: "3,5 jam",
    tiket: "± 5k",
    kapal: "-",
    keterangan: "Darat",
    gmaps: "https://maps.app.goo.gl/p96dnjcokXfFHH6PA",
    href: "#",
  },
  {
    id: 3,
    foto: "/objekwisata/sulbar/gentungan.jpg",
    wisata: "Bukit Jati Gentungan",
    lokasi: "Kab. Mamuju",
    jarak: 28,
    durasi: "25 menit",
    tiket: "± 10k",
    kapal: "-",
    keterangan: "Darat",
    gmaps: "https://maps.app.goo.gl/zB2kqkWT3TjrhMZm6",
    href: "#",
  },
  {
    id: 4,
    foto: "/objekwisata/sulbar/karampuang.jpg",
    wisata: "Pulau Karampuang",
    lokasi: "Kab. Mamuju",
    jarak: 4,
    durasi: "20 menit",
    tiket: "-",
    kapal: "± 20k",
    keterangan: "Laut",
    gmaps: "https://maps.app.goo.gl/zB2kqkWT3TjrhMZm6",
    href: "#",
  },
  {
    id: 5,
    foto: "/objekwisata/sulbar/gusung-toraja.jpg",
    wisata: "Pulau Gusung Toraja",
    lokasi: "Kab. Polewali Mandar",
    jarak: 218,
    durasi: "4,5 jam",
    tiket: "± 125k",
    kapal: "-",
    keterangan: "Darat & Laut",
    gmaps: "https://maps.app.goo.gl/N4aQH8hfqdAL7zXi8",
    href: "#",
  },
  {
    id: 6,
    foto: "/objekwisata/sulbar/rewata.jpg",
    wisata: "Mangrove Rewataa",
    lokasi: "Kab. Majene",
    jarak: 100,
    durasi: "2 jam",
    tiket: "-",
    kapal: "-",
    keterangan: "Darat",
    gmaps: "https://maps.app.goo.gl/8MPdnK46mkXmMDbr5",
    href: "#",
  },
  {
    id: 7,
    foto: "/objekwisata/sulbar/anjoro-pitu.jpg",
    wisata: "Kelapa Tujuh",
    lokasi: "Kab. Mamuju",
    jarak: 8,
    durasi: "20 menit",
    tiket: "-",
    kapal: "-",
    keterangan: "Darat",
    gmaps: "https://maps.app.goo.gl/8MPdnK46mkXmMDbr5",
    href: "#",
  },
  {
    id: 8,
    foto: "/objekwisata/sulbar/tapandullu.jpg",
    wisata: "Pantai Tapandullu",
    lokasi: "Kab. Mamuju",
    jarak: 10,
    durasi: "30 menit",
    tiket: "± 5k",
    kapal: "-",
    keterangan: "Darat",
    gmaps: "https://maps.app.goo.gl/55UKrjbLr8xqVzCt6",
    href: "#",
  },
  {
    id: 9,
    foto: "/objekwisata/sulbar/manakarra.jpg",
    wisata: "Pantai Manakarra",
    lokasi: "Kab. Mamuju",
    jarak: "0,2",
    durasi: "5 meni",
    tiket: "-",
    kapal: "-",
    keterangan: "Darat",
    gmaps: "https://maps.app.goo.gl/jhq8VgyGFGxLs54B9",
    href: "#",
  },
  {
    id: 10,
    foto: "/objekwisata/sulbar/lombang.jpg",
    wisata: "Pantai Lombang-Lombang",
    lokasi: "Kab. Mamuju",
    jarak: 30,
    durasi: "1 jam",
    tiket: "± 10k",
    kapal: "-",
    keterangan: "Darat",
    gmaps: "https://maps.app.goo.gl/a447t5bSdnh5CKn59",
    href: "#",
  },
  {
    id: 11,
    foto: "/objekwisata/sulbar/dato.jpg",
    wisata: "Pantai Dato",
    lokasi: "Kab. Majene",
    jarak: 134,
    durasi: "3 jam",
    tiket: "± 10k",
    kapal: "-",
    keterangan: "Darat",
    gmaps: "https://maps.app.goo.gl/DEvHNvNueab3EXXT8",
    href: "#",
  },
  {
    id: 12,
    foto: "/objekwisata/sulbar/gonda.jpg",
    wisata: "Pantai Gonda",
    lokasi: "Kab. Polewali Mandar",
    jarak: 230,
    durasi: "4 jam",
    tiket: "-",
    kapal: "-",
    keterangan: "Darat",
    gmaps: "https://maps.app.goo.gl/DEvHNvNueab3EXXT8",
    href: "#",
  },
];

export function Objekwisata() {
  return (
    <div className="py-auto px-auto sm:py-auto sm:px-auto mx-auto max-w-2xl lg:max-w-7xl lg:px-2">
      <div className="mt-2 grid grid-cols-2 gap-x-2 gap-y-5 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-3 xl:gap-x-2">
        {objekwisata.map((item) => (
          <div
            key={item.id}
            className="max-w-sm rounded-lg border border-gray-200 bg-white shadow dark:border-gray-700 dark:bg-gray-800"
          >
            <a href={item.gmaps}>
              <Image
                className="rounded-t-lg"
                width="630"
                height="420"
                src={item.foto}
                alt="foto"
              />
            </a>
            <div className="p-5">
              <h5 className="mb-0 text-lg font-bold tracking-tight text-gray-900 dark:text-white">
                {item.wisata}
              </h5>
              <div className="mb-1 flex items-center justify-between align-middle">
                <p className="font-semibold text-gray-900">{item.lokasi}</p>
              </div>
              <div className="mb-1 flex items-center justify-between align-middle">
                <p className="font-semibold text-gray-500 dark:text-white">
                  <MapPinIcon
                    className="hidden h-6 w-6 flex-shrink-0 text-red-500 md:inline-flex lg:inline-flex"
                    aria-hidden="true"
                  />{" "}
                  {item.jarak} km • {item.durasi}
                </p>
              </div>
              {/* <div className="mb-1 flex items-center justify-between align-middle">
                          <p className="font-semibold text-gray-700 dark:text-white">
                          <ClockIcon className="flex-shrink-0 h-6 w-6 text-orange-400 inline-flex" aria-hidden="true"/> {item.durasi}</p>
                      </div> */}
              <div className="mb-1 flex items-center justify-between">
                <span className="text-sm font-semibold text-gray-400 dark:text-white">
                  <TagIcon
                    className="inline-flex h-6 w-6 flex-shrink-0 text-gray-300"
                    aria-hidden="true"
                  />{" "}
                  Tarif Masuk: IDR{item.tiket}
                </span>
              </div>
              {/* <div className="mb-1 flex items-center justify-between">
                          <span className="text-sm font-semibold text-gray-500 dark:text-white">
                          🚢 : {item.kapal}</span>
                      </div> */}
              <div className="mb-3 flex items-center justify-between">
                <span className="text-sm font-semibold text-gray-400 dark:text-white">
                  <MapIcon
                    className="inline-flex h-6 w-6 flex-shrink-0 text-gray-300"
                    aria-hidden="true"
                  />{" "}
                  Transportasi: {item.keterangan}
                </span>
              </div>
              {/* <div className="mb-1 flex items-center justify-between align-middle">
                          <span className="text-sm font-medium text-blue-600">
                          <MapIcon className="flex-shrink-0 h-6 w-6 text-blue-600 inline-flex" aria-hidden="true"/><a href={item.gmaps} target="_blank" rel="noopener noreferrer"> Lihat Peta</a></span>
                      </div> */}
              <a
                href={item.gmaps}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-lg bg-blue-600 px-2.5 py-1.5 text-center text-sm font-medium text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Lihat Peta
              </a>
            </div>
          </div>
        ))}
      </div>
      <p className="mt-12 text-xs">
        Sumber data:{" "}
        <span>
          https://www.senangrekreasi.com/tempat-wisata-sulawesi-barat/
        </span>
      </p>
    </div>
  );
}
