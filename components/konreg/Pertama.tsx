import Link from "next/link";
import Image from "next/image";
import { MapPinIcon, ClockIcon } from "@heroicons/react/24/solid";

export function HariPertama() {
  return (
    <div>
      <div className="mt-3 grid grid-cols-1 gap-4">
        <div className="font-bold">
          <Link
            href="/akomodasi/hotel"
            className="block w-full rounded-lg border border-gray-200 bg-white p-6 shadow hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700"
          >
            <div className="mb-3 flex items-center align-middle">
              <ClockIcon
                className="mr-1 h-6 w-6 flex-shrink-0 text-gray-400 dark:text-gray-200"
                aria-hidden="true"
              />
              <h1 className="text-md font-semibold text-gray-400 dark:text-gray-200">
                12.00 - 18.00 WITA{" "}
              </h1>
            </div>
            <hr className="my-4 h-px border-0 bg-gray-200 dark:bg-gray-700" />
            <h5 className="mb-2 text-lg font-bold tracking-tight text-gray-900 dark:text-white">
              Kedatangan Peserta (Check in dan Registrasi)
            </h5>
            <div className="mb-1 flex items-center align-middle">
              <MapPinIcon
                className="mr-1 h-6 w-6 flex-shrink-0 text-red-500"
                aria-hidden="true"
              />
              <span className="inline-block text-sm font-medium text-blue-500">
                {" "}
                Lihat Lokasi Hotel →
              </span>
            </div>
          </Link>
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
                18.00 - 18.30 WITA{" "}
              </h1>
            </div>
            <hr className="my-4 h-px border-0 bg-gray-200 dark:bg-gray-700" />
            <h5 className="mb-2 text-lg font-bold tracking-tight text-gray-900 dark:text-white">
              🔄 Istirahat dan Sholat
            </h5>
          </a>
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
                18.30 - 19.30 WITA{" "}
              </h1>
            </div>
            <hr className="my-4 h-px border-0 bg-gray-200 dark:bg-gray-700" />
            <h5 className="text-lg font-bold tracking-tight text-gray-900 dark:text-white">
              🛎️ Welcome Dinner
            </h5>
            <div className="mt-2 flex items-center align-middle">
              <MapPinIcon
                className="mr-1 h-6 w-6 flex-shrink-0 text-red-500"
                aria-hidden="true"
              />
              <h1 className="text-md font-semibold text-gray-400 dark:text-gray-200">
                Waterpark Area
              </h1>
            </div>
            <p className="text-md mt-1 font-normal opacity-80">
              (<b>Dresscode:</b> Batik Nasional/Daerah, Lengan Panjang)
            </p>
          </a>
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
                19.30 WITA - Selesai{" "}
              </h1>
            </div>
            <hr className="my-4 h-px border-0 bg-gray-200 dark:bg-gray-700" />
            <h5 className="text-lg font-bold tracking-tight text-gray-900 dark:text-white">
              High Level Meeting
            </h5>
            <div className="mt-2 flex items-center align-middle">
              <MapPinIcon
                className="mr-1 h-6 w-6 flex-shrink-0 text-red-500"
                aria-hidden="true"
              />
              <h1 className="text-md font-semibold text-gray-400 dark:text-gray-200">
                Waterpark Area
              </h1>
            </div>
            <p className="text-md mb-6 mt-1 font-normal opacity-80">
              (<b>Dresscode:</b> Batik Nasional/Daerah, Lengan Panjang)
            </p>
            <h5 className="text-md mb-1 font-normal tracking-tight text-gray-900 dark:text-white">
              - Tindak Lanjut dan Evaluasi Pelaksanaan Hasil Konreg PDRB
              Kasulampua Tahun 2023
            </h5>
            <h5 className="text-md mb-1 font-normal tracking-tight text-gray-900 dark:text-white">
              - Penentuan Tuan Rumah Konreg Kasulampua selanjutnya
            </h5>
            <h5 className="text-md mb-6 font-bold tracking-tight text-gray-900 dark:text-white">
              Pimpinan Rapat :
            </h5>
            {/* <div className="mt-6 flex items-center space-x-4">
              <div className="flex-shrink-0">
                <Image
                  className="rounded-full"
                  width="64"
                  height="64"
                  src="/people/na.png"
                  alt="direktur"
                />
              </div>
              <dl className="whitespace-no-wrap ml-3 text-left text-sm font-medium leading-4">
                <dd className="text-lg text-gray-900 dark:text-white">
                  Buyung Airlangga, M.Bus
                </dd>
                <p className="text-sm text-gray-400 dark:text-gray-300">
                  Direktur Neraca Pengeluaran BPS RI
                </p>
              </dl>
            </div> */}
            <div className="mt-6 flex items-center space-x-4">
              <div className="flex-shrink-0">
                <Image
                  className="rounded-full"
                  width="64"
                  height="64"
                  src="/people/puji.png"
                  alt="direktur"
                />
              </div>
              <dl className="whitespace-no-wrap ml-3 text-left text-sm font-medium leading-4">
                <dd className="text-lg text-gray-900 dark:text-white">
                  Puji Agus Kurniawan, S.Si., M.A.
                </dd>
                <p className="text-sm text-gray-400 dark:text-gray-300">
                  Direktur Neraca Produksi BPS RI
                </p>
              </dl>
            </div>
            <div className="mt-6 flex items-center space-x-4">
              <div className="flex-shrink-0">
                <Image
                  className="rounded-full"
                  width="64"
                  height="64"
                  src="/people/junda.png"
                  alt="Junda Maulana"
                />
              </div>
              <dl className="whitespace-no-wrap ml-3 text-left text-sm font-medium leading-4">
                <dd className="text-lg text-gray-900 dark:text-white">
                  Dr. Junda Maulana, M.Si.
                </dd>
                <p className="text-sm text-gray-400 dark:text-gray-300">
                  Kepala Bapperida Sulawesi Barat
                </p>
              </dl>
            </div>
            <p className="mt-6 text-sm font-normal text-gray-700 dark:text-gray-400">
              <b>Peserta Rapat:</b> Kepala BPS, Kepala Perwakilan BI, Kepala
              Bapperida, Kepala Kanwil DJPb
            </p>

            <hr className="my-4 h-px border-0 bg-gray-200 dark:bg-gray-700" />
            <h5 className="text-lg font-bold tracking-tight text-gray-900 dark:text-white">
              Rapat Teknis Tim Data dan Tim Perumus membahas perumusan
              Kesepakatan Konsultasi Regional PDRB Kasulampua Tahun 2024
            </h5>
            <div className="mb-1 mt-2 flex items-center align-middle">
              <MapPinIcon
                className="mr-1 h-6 w-6 flex-shrink-0 text-red-500"
                aria-hidden="true"
              />
              <h1 className="text-md font-semibold text-gray-400 dark:text-gray-200">
                Ruang Sriti
              </h1>
            </div>
            {/* <h5 className="text-md mb-1 font-normal tracking-tight text-gray-900 dark:text-white">
              - Pengenalan Website
            </h5>
            <h5 className="text-md mb-6 font-normal tracking-tight text-gray-900 dark:text-white">
              - Kontribusi Konten
            </h5> */}
            <h5 className="text-md mb-2 mt-4 font-bold tracking-tight text-gray-900 dark:text-white">
              Pimpinan Rapat:
            </h5>
            <div className="mt-2 flex items-center space-x-4">
              <div className="flex-shrink-0">
                <Image
                  className="rounded-full"
                  width="64"
                  height="64"
                  src="/people/labi.png"
                  alt="direktur"
                />
              </div>
              <dl className="whitespace-no-wrap ml-3 text-left text-sm font-medium leading-4">
                <dd className="text-lg text-gray-900 dark:text-white">
                  Moh. Labi, S.Si., MM.
                </dd>
                <p className="text-sm text-gray-400 dark:text-gray-300">
                  Statistis Ahli Madya BPS Prov. Sulawesi Barat
                </p>
              </dl>
            </div>
            <p className="mt-6 text-sm font-normal text-gray-700 dark:text-gray-400">
              <b>Peserta Rapat:</b> Tim Perumus dari BPS, BI, DJPb dan Bapperida
            </p>
          </a>
        </div>
      </div>

      {/* <div className="mt-3 grid grid-cols-1 gap-4">
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
                21.30 WITA - selesai{" "}
              </h1>
            </div>
            <hr className="my-4 h-px border-0 bg-gray-200 dark:bg-gray-700" />
            <h5 className="mb-2 text-lg font-bold tracking-tight text-gray-900 dark:text-white">
              🔄 Istirahat
            </h5>
          </a>
        </div>
      </div> */}
    </div>
  );
}
