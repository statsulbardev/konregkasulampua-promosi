import Link from "next/link";
import Image from "next/image";
import { MapPinIcon, ClockIcon } from "@heroicons/react/24/solid";

export function HariKetiga() {
  return (
    <div>
      <div className="mt-3 grid grid-cols-1 gap-4">
        <div className="font-bold">
          <div className="block w-full rounded-lg border border-gray-200 bg-white p-6 shadow hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
            <div className="mb-3 flex items-center align-middle">
              <ClockIcon
                className="mr-1 h-6 w-6 flex-shrink-0 text-gray-400 dark:text-gray-200"
                aria-hidden="true"
              />
              <h1 className="text-md font-semibold text-gray-400 dark:text-gray-200">
                Bebas{" "}
              </h1>
            </div>
            <hr className="my-4 h-px border-0 bg-gray-200 dark:bg-gray-700" />
            <h5 className="mb-2 text-lg font-bold tracking-tight text-gray-900 dark:text-white">
              City Tour Mandiri
            </h5>
            <div className="mb-2 flex items-center align-middle">
              <MapPinIcon
                className="mr-1 h-6 w-6 flex-shrink-0 text-red-500"
                aria-hidden="true"
              />
              <Link href="/wisata/infowisata">
                <span className="inline-block text-sm font-medium text-blue-500">
                  {" "}
                  Tempat wisata di Sulawesi Barat →
                </span>
              </Link>
            </div>
            <div className="flex items-center align-middle">
              <MapPinIcon
                className="mr-1 h-6 w-6 flex-shrink-0 text-red-500"
                aria-hidden="true"
              />
              <Link href="/wisata/toko-oleh-oleh">
                <span className="inline-block text-sm font-medium text-blue-500">
                  {" "}
                  Toko oleh-oleh di Mamuju →
                </span>
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-3 grid grid-cols-1 gap-4">
        <div className="font-bold">
          <a
            href="#"
            className="block w-full rounded-lg border border-gray-200 bg-white p-6 shadow hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700"
          >
            <div className="mb-3 flex items-center align-middle">
              <ClockIcon
                className="mr-1 h-6 w-6 flex-shrink-0 text-gray-400 dark:text-gray-200"
                aria-hidden="true"
              />
              <h1 className="text-md font-semibold text-gray-400 dark:text-gray-200">
                s.d. 12.00 WITA
              </h1>
            </div>
            <hr className="my-4 h-px border-0 bg-gray-200 dark:bg-gray-700" />
            <h5 className="mb-2 text-lg font-bold tracking-tight text-gray-900 dark:text-white">
              Kepulangan Peserta (Check Out)
            </h5>
          </a>
        </div>
      </div>
    </div>
  );
}
