import Link from "next/link";
import Image from "next/image";
import { MapPinIcon, ClockIcon } from "@heroicons/react/24/solid";

export function HariKedua() {
  return (
    <div>
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
                07.00 - 08.30 WITA{" "}
              </h1>
            </div>
            <hr className="my-4 h-px border-0 bg-gray-200 dark:bg-gray-700" />
            <h5 className="mb-2 text-lg font-bold tracking-tight text-gray-900 dark:text-white">
              📒 Registrasi Peserta
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
                08.30 - 09.30 WITA{" "}
              </h1>
            </div>
            <hr className="my-4 h-px border-0 bg-gray-200 dark:bg-gray-700" />
            <h5 className="text-lg font-bold tracking-tight text-gray-900 dark:text-white">
              Pembukaan
            </h5>
            <div className="mb-3 flex items-center align-middle">
              <MapPinIcon
                className="mr-1 h-6 w-6 flex-shrink-0 text-red-500"
                aria-hidden="true"
              />
              <h1 className="text-md font-semibold text-gray-400 dark:text-gray-200">
                Ruang Phinisi (? Cek ruangan)
              </h1>
            </div>
            <p className="text-md mt-1 font-normal opacity-80">
              (<b>Dresscode:</b> Seragam Tenun / Batik Lengan Panjang)
            </p>

            <hr className="my-4 h-px border-0 bg-gray-200 dark:bg-gray-700" />
            <h5 className="text-md mb-1 font-normal tracking-tight text-gray-900 dark:text-white">
              - Tarian Penyambutan
            </h5>
            <h5 className="text-md mb-1 font-normal tracking-tight text-gray-900 dark:text-white">
              - Menyanyikan Lagu Indonesia Raya
            </h5>
            <h5 className="text-md mb-1 font-normal tracking-tight text-gray-900 dark:text-white">
              - Pembacaan Doa
            </h5>
            <h5 className="text-md mb-1 font-normal tracking-tight text-gray-900 dark:text-white">
              - Laporan Penyelenggara Konreg Kasulampua Tahun 2024 oleh Kepala
              Bapperida Prov. Sulawesi Barat
            </h5>
            <h5 className="text-md mb-1 font-normal tracking-tight text-gray-900 dark:text-white">
              - Opening Speech oleh Deputi Bidang Neraca dan Analisis Statistik
              BPS RI
            </h5>
            <h5 className="text-md mb-1 font-normal tracking-tight text-gray-900 dark:text-white">
              - Sambutan Plt. Gubernur Sulawesi Barat sekaligus membuka acara
            </h5>
            <h5 className="text-md mb-3 font-normal tracking-tight text-gray-900 dark:text-white">
              - Foto Bersama
            </h5>

            <hr className="my-4 h-px border-0 bg-gray-200 dark:bg-gray-700" />
            <h5 className="text-md mb-3 font-medium tracking-tight text-gray-900 dark:text-white">
              Laporan Penyelenggaran Konreg Kasulampua Tahun 2024
            </h5>
            <div className="mt-3 flex items-center space-x-4">
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
                <dd className="text-md mb-1 font-bold text-gray-400 dark:text-gray-300">
                  Narasumber:
                </dd>
                <dd className="text-lg text-gray-900 dark:text-white">
                  Dr. Junda Maulana
                </dd>
                <p className="text-sm text-gray-400 dark:text-gray-300">
                  Kepala Bapperida Sulawesi Barat
                </p>
              </dl>
            </div>

            <hr className="my-4 h-px border-0 bg-gray-200 dark:bg-gray-700" />
            <h5 className="text-md mb-3 font-medium tracking-tight text-gray-900 dark:text-white">
              Opening Speech
            </h5>
            <div className="mt-3 flex items-center space-x-4">
              <div className="flex-shrink-0">
                <Image
                  className="rounded-full"
                  width="64"
                  height="64"
                  src="/people/edy.png"
                  alt="Margo"
                />
              </div>
              <dl className="whitespace-no-wrap ml-3 text-left text-sm font-medium leading-4">
                <dd className="text-md mb-1 font-bold text-gray-400 dark:text-gray-300">
                  Narasumber:
                </dd>
                <dd className="text-lg text-gray-900 dark:text-white">
                  Moh. Edy Mahmud, S.Si., MP.
                </dd>
                <p className="text-sm text-gray-400 dark:text-gray-300">
                  Deputi Bidang Neraca dan Analisis Statistik BPS RI
                </p>
              </dl>
            </div>

            <hr className="my-4 h-px border-0 bg-gray-200 dark:bg-gray-700" />
            <h5 className="text-md mb-3 font-medium tracking-tight text-gray-900 dark:text-white">
              Sambutan sekaligus Membuka Acara
            </h5>
            <div className="mt-3 flex items-center space-x-4">
              <div className="flex-shrink-0">
                <Image
                  className="rounded-full"
                  width="64"
                  height="64"
                  src="/people/ali.png"
                  alt="Ali"
                />
              </div>
              <dl className="whitespace-no-wrap ml-3 text-left text-sm font-medium leading-4">
                <dd className="text-md mb-1 font-bold text-gray-400 dark:text-gray-300">
                  Narasumber:
                </dd>
                <dd className="text-lg text-gray-900 dark:text-white">
                  H. Ali Mazi, SH.
                </dd>
                <p className="text-sm text-gray-400 dark:text-gray-300">
                  Pj. Gubernur Sulawesi Barat
                </p>
              </dl>
            </div>
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
                09.30 - 09.45 WITA{" "}
              </h1>
            </div>
            <hr className="my-4 h-px border-0 bg-gray-200 dark:bg-gray-700" />
            <h5 className="mb-2 text-lg font-medium tracking-tight text-gray-900 dark:text-white">
              ☕ Coffee Break
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
                09.45 - 12.15 WITA{" "}
              </h1>
            </div>
            <hr className="my-4 h-px border-0 bg-gray-200 dark:bg-gray-700" />
            <h5 className="mb-3 text-lg font-bold tracking-tight text-gray-900 dark:text-white">
              Pemaparan Materi
            </h5>

            <hr className="my-4 h-px border-0 bg-gray-200 dark:bg-gray-700" />
            <div className="mt-3 flex items-center space-x-4">
              <div className="flex-shrink-0">
                <Image
                  className="rounded-full"
                  width="64"
                  height="64"
                  src="/people/azhar.png"
                  alt="Azhar"
                />
              </div>
              <dl className="whitespace-no-wrap ml-3 text-left text-sm font-medium leading-4">
                <dd className="text-md mb-1 font-bold text-gray-400 dark:text-gray-300">
                  Moderator:
                </dd>
                <dd className="text-lg text-gray-900 dark:text-white">
                  Prof. Dr. Ir. Azhar Bafadal, M.Si.
                </dd>
                <p className="text-sm text-gray-400 dark:text-gray-300">
                  Guru Besar Fakultas Pertanian Universitas Haluoleo
                </p>
              </dl>
            </div>

            <hr className="my-4 h-px border-0 bg-gray-200 dark:bg-gray-700" />
            <h5 className="text-md mb-3 font-medium tracking-tight text-gray-900 dark:text-white">
              Strategi Penguatan Konektivitas dalam Mewujudkan Pertumbuhan
              Ekonomi Inklusif Kasulampua{" "}
            </h5>
            <div className="mt-3 flex items-center space-x-4">
              <div className="flex-shrink-0">
                <Image
                  className="rounded-full"
                  width="64"
                  height="64"
                  src="/people/roudo.png"
                  alt="Blank"
                />
              </div>
              <dl className="whitespace-no-wrap ml-3 text-left text-sm font-medium leading-4">
                <dd className="text-md mb-1 font-bold text-gray-400 dark:text-gray-300">
                  Narasumber:
                </dd>
                <dd className="text-lg text-gray-900 dark:text-white">
                  Mohammad Roudo, ST, MPP, Ph.D
                </dd>
                <p className="text-sm text-gray-400 dark:text-gray-300">
                  Plt. Direktur Regional II, Kedeputian Bidang Pengembangan
                  Regional Bappenas RI
                </p>
              </dl>
            </div>

            <hr className="my-4 h-px border-0 bg-gray-200 dark:bg-gray-700" />
            <h5 className="text-md mb-3 font-medium tracking-tight text-gray-900 dark:text-white">
              Pemanfaatan Sumberdaya Alam dalam Mendukung Ekonomi yang
              Berkelanjutan{" "}
            </h5>
            <div className="mt-3 flex items-center space-x-4">
              <div className="flex-shrink-0">
                <Image
                  className="rounded-full"
                  width="64"
                  height="64"
                  src="/people/buyung.png"
                  alt="Buyung"
                />
              </div>
              <dl className="whitespace-no-wrap ml-3 text-left text-sm font-medium leading-4">
                <dd className="text-md mb-1 font-bold text-gray-400 dark:text-gray-300">
                  Narasumber:
                </dd>
                <dd className="text-lg text-gray-900 dark:text-white">
                  Buyung Airlangga, M.Bus.
                </dd>
                <p className="text-sm text-gray-400 dark:text-gray-300">
                  Direktur Neraca Pengeluaran BPS RI
                </p>
              </dl>
            </div>

            <hr className="my-4 h-px border-0 bg-gray-200 dark:bg-gray-700" />
            <h5 className="text-md mb-3 font-medium tracking-tight text-gray-900 dark:text-white">
              Peran Bank Indonesia dalam Ekonomi Inklusif dalam Memajukan
              Kalimantan dan Sulampua{" "}
            </h5>
            <div className="mt-3 flex items-center space-x-4">
              <div className="flex-shrink-0">
                <Image
                  className="rounded-full"
                  width="64"
                  height="64"
                  src="/people/causa.png"
                  alt="Causa"
                />
              </div>
              <dl className="whitespace-no-wrap ml-3 text-left text-sm font-medium leading-4">
                <dd className="text-md mb-1 font-bold text-gray-400 dark:text-gray-300">
                  Narasumber:
                </dd>
                <dd className="text-lg text-gray-900 dark:text-white">
                  Causa Iman Karana
                </dd>
                <p className="text-sm text-gray-400 dark:text-gray-300">
                  KPW Bank Indonesia Provinsi Sulawesi Selatan
                </p>
              </dl>
            </div>
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
                12.15 - 12.30 WITA{" "}
              </h1>
            </div>
            <hr className="my-4 h-px border-0 bg-gray-200 dark:bg-gray-700" />
            <h5 className="mb-2 text-lg font-bold tracking-tight text-gray-900 dark:text-white">
              Diskusi dan Tanya Jawab
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
                12.30 - 13.30 WITA{" "}
              </h1>
            </div>
            <hr className="my-4 h-px border-0 bg-gray-200 dark:bg-gray-700" />
            <h5 className="mb-2 text-lg font-bold tracking-tight text-gray-900 dark:text-white">
              🔄 ISHOMA (Istirahat, Sholat, Makan)
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
                13.30 - 14.50 WITA{" "}
              </h1>
            </div>
            <hr className="my-4 h-px border-0 bg-gray-200 dark:bg-gray-700" />
            <h5 className="mb-2 text-lg font-bold tracking-tight text-gray-900 dark:text-white">
              Pemaparan Usulan Kebersamaan
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
                14.50 - 15.00 WITA{" "}
              </h1>
            </div>
            <hr className="my-4 h-px border-0 bg-gray-200 dark:bg-gray-700" />
            <h5 className="mb-2 text-lg font-bold tracking-tight text-gray-900 dark:text-white">
              Pemaparan Hasil Perumusan Kesepakatan
            </h5>
            <div className="mt-3 flex items-center space-x-4">
              <div className="flex-shrink-0">
                <Image
                  className="rounded-full"
                  width="64"
                  height="64"
                  src="/people/buyung.png"
                  alt="Buyung"
                />
              </div>
              <dl className="whitespace-no-wrap ml-3 text-left text-sm font-medium leading-4">
                <dd className="text-md mb-1 font-bold text-gray-400 dark:text-gray-300">
                  Narasumber:
                </dd>
                <dd className="text-lg text-gray-900 dark:text-white">
                  Buyung Airlangga, M.Bus.
                </dd>
                <p className="text-sm text-gray-400 dark:text-gray-300">
                  Direktur Neraca Pengeluaran BPS RI
                </p>
              </dl>
            </div>
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
                15.00 - 15.10 WITA{" "}
              </h1>
            </div>
            <hr className="my-4 h-px border-0 bg-gray-200 dark:bg-gray-700" />
            <h5 className="mb-2 text-lg font-bold tracking-tight text-gray-900 dark:text-white">
              Penandatanganan Hasil Kesepakatan Konreg PDRB Kasulampua Tahun
              2024 dan Hasil Kesepakatan Musrenbang Regional Sulawesi Tahun 2024
            </h5>
            <p className="mt-2 text-sm font-normal text-gray-700 dark:text-gray-400">
              <b>Penanda Tangan:</b> Kepala BPS Provinsi, KPW BI Provinsi,
              Kepala Bappeda Provinsi
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
                15.10 - 15.40 WITA{" "}
              </h1>
            </div>
            <hr className="my-4 h-px border-0 bg-gray-200 dark:bg-gray-700" />
            <h5 className="mb-3 text-lg font-bold tracking-tight text-gray-900 dark:text-white">
              Penutupan
            </h5>
          </a>
        </div>
      </div>

      <div className="mt-3 grid grid-cols-1 gap-4">
        <div className="font-bold">
          <Link
            href="/akomodasi/rumahmakan"
            className="block w-full rounded-lg border border-gray-200 bg-white p-6 shadow hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700"
          >
            <div className="mb-3 flex items-center align-middle">
              <ClockIcon
                className="mr-1 h-6 w-6 flex-shrink-0 text-gray-400 dark:text-gray-200"
                aria-hidden="true"
              />
              <h1 className="text-md font-semibold text-gray-400 dark:text-gray-200">
                18.30 WITA - selesai{" "}
              </h1>
            </div>
            <hr className="my-4 h-px border-0 bg-gray-200 dark:bg-gray-700" />
            <h5 className="mb-2 text-lg font-bold tracking-tight text-gray-900 dark:text-white">
              🔄 Makan Malam dan Istirahat
            </h5>
            <div className="flex items-center align-middle">
              <MapPinIcon
                className="mr-1 h-6 w-6 flex-shrink-0 text-red-500"
                aria-hidden="true"
              />
              <span className="inline-block text-sm font-medium text-blue-500">
                {" "}
                Lihat tempat makan di Mamuju →
              </span>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}
