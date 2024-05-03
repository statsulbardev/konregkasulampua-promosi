import { MapPinIcon, BanknotesIcon } from "@heroicons/react/24/solid";
import Image from "next/image";

const masjid = [
  {
    id: 1,
    foto: "/hotel/muttahida.jpg",
    namahotel: "Masjid Nurul Muttahida",
    jarak: "0,3",
    gmaps: "https://maps.app.goo.gl/WJxGKqZuKm7jqaMs6",
  },
  {
    id: 2,
    foto: "/hotel/quba.jpg",
    namahotel: "Masjid Al Quba",
    jarak: "0,9",
    gmaps: "https://maps.app.goo.gl/cFT674GpMMBoKHv47",
  },
];

export function Masjid() {
  return (
    <div className="mx-auto max-w-2xl px-2 py-2 sm:px-2 sm:py-2 lg:max-w-7xl lg:px-2">
      <div className="mt-2 grid grid-cols-2 gap-x-2 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4 xl:gap-x-2">
        {masjid.map((item) => (
          <div
            key={item.id}
            className="max-w-sm rounded-lg border border-gray-200 bg-white shadow dark:border-gray-700 dark:bg-gray-800"
          >
            <Image
              className="rounded-t-lg"
              width="630"
              height="420"
              src={item.foto}
              alt="claro"
            />
            <div className="p-5">
              <h5 className="mb-0 text-lg font-bold tracking-tight text-gray-900 dark:text-white">
                {item.namahotel}
              </h5>
              <div className="mb-1 flex items-center justify-between align-middle">
                <p className="font-normal text-gray-700 dark:text-white">
                  <MapPinIcon
                    className="hidden h-6 w-6 flex-shrink-0 text-red-500 md:inline-flex lg:inline-flex"
                    aria-hidden="true"
                  />{" "}
                  {item.jarak} km
                </p>
              </div>
              <a href={item.gmaps} target="_blank" rel="noopener noreferrer">
                <span className="mb-3 inline-block text-sm font-medium text-blue-500">
                  Lihat Peta →
                </span>
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
