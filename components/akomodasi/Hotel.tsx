import { MapPinIcon, BanknotesIcon } from "@heroicons/react/24/solid";
import Image from "next/image";

const hotel = [
  {
    id: 1,
    foto: "/hotel/maleo.jpg",
    namahotel: "Grand Maleo Hotel & Convention",
    star: "★★★★",
    rate: "4,4",
    jarak: 0,
    waktu: 0,
    harga: 855,
    gmaps: "https://maps.app.goo.gl/ic89XkxCCcT5wzHQA",
    href: "https://www.tiket.com/hotel/indonesia/grand-maleo-hotel-convention-310001602045909751",
  },
  {
    id: 2,
    foto: "/hotel/pantai-indah.jpg",
    namahotel: "Hotel Pantai Indah Mamuju",
    star: "★★★★",
    rate: "4",
    jarak: "0,8",
    waktu: 4,
    harga: 500,
    gmaps: "https://maps.app.goo.gl/EwMevd3ngAsTLgfcA",
    href: "https://www.traveloka.com/id-id/hotel/indonesia/hotel-pantai-indah-syariah-9000000460116",
  },
  {
    id: 3,
    foto: "/hotel/grand-mutiara.jpg",
    namahotel: "Grand Mutiara Hotel",
    star: "★★★",
    rate: "3,7",
    jarak: "4,1",
    waktu: 10,
    harga: 600,
    gmaps: "https://maps.app.goo.gl/KjiJobmbaB6GtVWh7",
    href: "https://www.hotelmurah.com/hotel/Mamuju/grand-mutiara-hotel-mamuju-477-711574-1",
  },
  {
    id: 4,
    foto: "/hotel/srikandi.jpg",
    namahotel: "Hotel Srikandi",
    star: "★★★",
    rate: "3,5",
    jarak: "1,3",
    waktu: 8,
    harga: 500,
    gmaps: "https://maps.app.goo.gl/vGe9ruUQmcaHJRmEA",
    href: "https://www.traveloka.com/en-id/hotel/detail?spec=30-04-2024.01-05-2024.1.1.HOTEL.9000000174477.Srikandi%20Hotel%20Mamuju",
  },
  {
    id: 5,
    foto: "/hotel/meganita.jpg",
    namahotel: "Hotel Meganita",
    star: "★★★",
    rate: "4,3",
    jarak: "1,3",
    waktu: 8,
    harga: 450,
    gmaps: "https://maps.app.goo.gl/FncWvgoyUa3cDk879",
    href: "https://www.traveloka.com/en-id/hotel/detail?spec=30-04-2024.01-05-2024.1.1.HOTEL.9000000458936.Hotel%20Meganita%20Syariah",
  },
  {
    id: 6,
    foto: "/hotel/aflah.jpg",
    namahotel: "Hotel Aflah",
    star: "★★",
    rate: "4",
    jarak: "1,1",
    waktu: 6,
    harga: 600,
    gmaps: "https://maps.app.goo.gl/hsuahcQK7UnHaVJa6",
    href: "https://www.traveloka.com/en-id/hotel/detail?spec=30-04-2024.01-05-2024.1.1.HOTEL.9000003287779.Aflah%20Hotel.2",
  },
  {
    id: 7,
    foto: "/hotel/diana.jpg",
    namahotel: "Hotel Diana",
    star: "★★★",
    rate: "3,8",
    jarak: "0,8",
    waktu: 4,
    harga: 400,
    gmaps: "https://maps.app.goo.gl/TV5yyYYVM5qaKSdT9",
    href: "https://www.tripadvisor.co.id/Hotel_Review-g3404989-d19691913-Reviews-Hotel_Diana-Mamuju_West_Sulawesi_Sulawesi.html",
  },
  {
    id: 8,
    foto: "/hotel/grand-putra.jpg",
    namahotel: "Hotel Grand Putra",
    star: "★★",
    rate: "4",
    jarak: "1,2",
    waktu: 6,
    harga: 500,
    gmaps: "https://maps.app.goo.gl/ZDjyNXjcadc3r2xo6",
    href: "https://www.facebook.com/hotelgrandputra.mamuju/?locale=id_ID",
  },
];

export function Hotel() {
  return (
    <div className="mx-auto max-w-2xl px-2 py-2 sm:px-2 sm:py-2 lg:max-w-7xl lg:px-2">
      <div className="mt-2 grid grid-cols-2 gap-x-2 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4 xl:gap-x-2">
        {hotel.map((item) => (
          <div
            key={item.id}
            className="max-w-sm rounded-lg border border-gray-200 bg-white shadow dark:border-gray-700 dark:bg-gray-800"
          >
            <a href={item.href}>
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
                {item.namahotel}
              </h5>
              <div className="mb-1 flex items-center justify-between align-middle">
                <p className="font-normal text-yellow-500">
                  {item.star}
                  <span className="text-gray-600 dark:text-gray-300">
                    {" "}
                    • {item.rate}{" "}
                  </span>
                </p>
              </div>
              <div className="mb-1 flex items-center justify-between align-middle">
                <p className="font-normal text-gray-700 dark:text-white">
                  <MapPinIcon
                    className="hidden h-6 w-6 flex-shrink-0 text-red-500 md:inline-flex lg:inline-flex"
                    aria-hidden="true"
                  />{" "}
                  {item.jarak} km • {item.waktu} menit
                </p>
              </div>
              <a href={item.gmaps} target="_blank" rel="noopener noreferrer">
                <span className="mb-3 inline-block text-sm font-medium text-blue-500">
                  Lihat Peta →
                </span>
              </a>
              <div className="mb-3 flex items-center justify-between">
                <span className="text-md font-normal text-gray-900 dark:text-white">
                  <BanknotesIcon
                    className="inline-flex h-6 w-6 flex-shrink-0 text-green-500"
                    aria-hidden="true"
                  />{" "}
                  IDR ≥ {item.harga}k
                </span>
              </div>
              <a
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-lg bg-blue-600 px-2.5 py-1.5 text-center text-sm font-medium text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Selengkapnya
              </a>
            </div>
          </div>
        ))}
      </div>
      <p className="mt-12 text-xs">
        Sumber data: <span>Dinas Pariwisata Provinsi Sulawesi Barat</span>
      </p>
    </div>
  );
}
