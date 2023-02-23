import Link from "next/link";
import Image from "next/image";
import { MapPinIcon, ClockIcon } from '@heroicons/react/24/solid'

export function HariKedua () {
    return (

<div>
    <div className="mt-3 grid grid-cols-1 gap-4">
        <div className="font-bold">    
            <a href="#" className="block w-full p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
              <div className="mb-3 flex items-center align-middle">  
                <ClockIcon className="flex-shrink-0 h-6 w-6 text-gray-400 dark:text-gray-200 mr-1" aria-hidden="true"/><h1 className="font-semibold text-md text-gray-400 dark:text-gray-200">08.00 - 09.00 WITA </h1>
              </div><hr className="h-px my-4 bg-gray-200 border-0 dark:bg-gray-700" />
                <h5 className="mb-2 text-lg font-bold tracking-tight text-gray-900 dark:text-white">📒 Registrasi Peserta</h5>
            </a>
        </div>
    </div>
    
    <div className="mt-3 grid grid-cols-1 gap-4">
        <div className="font-bold">    
            <a href="#" className="block w-full p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
              <div className="mb-3 flex items-center align-middle">  
                <ClockIcon className="flex-shrink-0 h-6 w-6 text-gray-400 dark:text-gray-200 mr-1" aria-hidden="true"/><h1 className="font-semibold text-md text-gray-400 dark:text-gray-200">09.00 - 10.00 WITA </h1>
              </div>
              <hr className="h-px my-4 bg-gray-200 border-0 dark:bg-gray-700" />
                <h5 className="text-lg font-bold tracking-tight text-gray-900 dark:text-white">
                  Pembukaan</h5>

                <hr className="h-px my-4 bg-gray-200 border-0 dark:bg-gray-700" />
                  <h5 className="mb-3 text-md font-medium tracking-tight text-gray-900 dark:text-white">
                    Laporan Penyelenggaran Konreg Kasulampua Tahun 2023</h5>
                    <div className="mt-3 flex items-center space-x-4">
                      <div className="flex-shrink-0">
                       <Image className="rounded-full" width="64" height="64" src="/people/robert.png" alt="Robert" />
                      </div>
                        <dl className="ml-3 text-sm font-medium leading-4 text-left whitespace-no-wrap">
                          <dd className="mb-1 text-md font-bold text-gray-400 dark:text-gray-300">Narasumber:</dd>
                          <dd className="text-lg text-gray-900 dark:text-white">J. Robert, ST, MT.</dd>
                          <p className="text-sm text-gray-400 dark:text-gray-300">Kepala Bappeda Sulawesi Tenggara</p>
                        </dl>
                    </div>

                <hr className="h-px my-4 bg-gray-200 border-0 dark:bg-gray-700" />
                  <h5 className="mb-3 text-md font-medium tracking-tight text-gray-900 dark:text-white">
                    Opening Speech Kepala BPS RI</h5>
                    <div className="mt-3 flex items-center space-x-4">
                      <div className="flex-shrink-0">
                       <Image className="rounded-full" width="64" height="64" src="/people/margo.png" alt="Margo" />
                      </div>
                        <dl className="ml-3 text-sm font-medium leading-4 text-left whitespace-no-wrap">
                          <dd className="mb-1 text-md font-bold text-gray-400 dark:text-gray-300">Narasumber:</dd>
                          <dd className="text-lg text-gray-900 dark:text-white">Margo Yuwono, S.Si., M.Si.</dd>
                          <p className="text-sm text-gray-400 dark:text-gray-300">Kepala Badan Pusat Statistik RI</p>
                        </dl>
                    </div>

                <hr className="h-px my-4 bg-gray-200 border-0 dark:bg-gray-700" />
                  <h5 className="mb-3 text-md font-medium tracking-tight text-gray-900 dark:text-white">
                    Sambutan Gubernur Sulawesi Tenggara sekaligus Membuka Acara</h5>
                    <div className="mt-3 flex items-center space-x-4">
                      <div className="flex-shrink-0">
                       <Image className="rounded-full" width="64" height="64" src="/people/ali.png" alt="Ali" />
                      </div>
                        <dl className="ml-3 text-sm font-medium leading-4 text-left whitespace-no-wrap">
                          <dd className="mb-1 text-md font-bold text-gray-400 dark:text-gray-300">Narasumber:</dd>
                          <dd className="text-lg text-gray-900 dark:text-white">H. Ali Mazi, SH.</dd>
                          <p className="text-sm text-gray-400 dark:text-gray-300">Gubernur Sulawesi Tenggara</p>
                        </dl>
                    </div>

                <hr className="h-px my-4 bg-gray-200 border-0 dark:bg-gray-700" />
                  <h5 className="mb-3 text-md font-medium tracking-tight text-gray-900 dark:text-white">
                    Launching Website Kasulampua</h5>
                    <div className="mt-3 flex items-center space-x-4">
                      <Image className="items-center" width="300" height= "150" src="/kasulampuaweb.png" alt="Ali" />
                    </div>
            </a>
        </div>
    </div>
    
    <div className="mt-3 grid grid-cols-1 gap-4">
        <div className="font-bold">    
            <a href="#" className="block w-full p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
              <div className="mb-3 flex items-center align-middle">  
                <ClockIcon className="flex-shrink-0 h-6 w-6 text-gray-400 dark:text-gray-200 mr-1" aria-hidden="true"/><h1 className="font-semibold text-md text-gray-400 dark:text-gray-200">10.00 - 10.15 WITA </h1>
              </div><hr className="h-px my-4 bg-gray-200 border-0 dark:bg-gray-700" />
                <h5 className="mb-2 text-lg font-medium tracking-tight text-gray-900 dark:text-white">☕ Coffee Break</h5>
            </a>
        </div>
    </div>  

    <div className="mt-3 grid grid-cols-1 gap-4">
        <div className="font-bold">    
            <a href="#" className="block w-full p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
              <div className="mb-3 flex items-center align-middle">  
                <ClockIcon className="flex-shrink-0 h-6 w-6 text-gray-400 dark:text-gray-200 mr-1" aria-hidden="true"/><h1 className="font-semibold text-md text-gray-400 dark:text-gray-200">10.15 - 10.45 WITA </h1>
              </div><hr className="h-px my-4 bg-gray-200 border-0 dark:bg-gray-700" />
              <h5 className="mb-3 text-lg font-bold tracking-tight text-gray-900 dark:text-white">
                    Keynote Speech</h5>
                    <div className="mt-3 flex items-center space-x-4">
                      <div className="flex-shrink-0">
                       <Image className="rounded-full" width="64" height="64" src="/people/edy.png" alt="Edy" />
                      </div>
                        <dl className="ml-3 text-sm font-medium leading-4 text-left whitespace-no-wrap">
                          <dd className="mb-1 text-md font-bold text-gray-400 dark:text-gray-300">Narasumber:</dd>
                          <dd className="text-lg text-gray-900 dark:text-white">Moh. Edy Mahmud, S.Si., MP.</dd>
                          <p className="text-sm text-gray-400 dark:text-gray-300"> Deputi Neraca dan Analisis Statistik BPS RI</p>
                        </dl>
                    </div>
            </a>
        </div>
    </div> 

    <div className="mt-3 grid grid-cols-1 gap-4">
        <div className="font-bold">    
            <a href="#" className="block w-full p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
              <div className="mb-3 flex items-center align-middle">  
                <ClockIcon className="flex-shrink-0 h-6 w-6 text-gray-400 dark:text-gray-200 mr-1" aria-hidden="true"/><h1 className="font-semibold text-md text-gray-400 dark:text-gray-200">10.45 - 12.00 WITA </h1>
              </div><hr className="h-px my-4 bg-gray-200 border-0 dark:bg-gray-700" />
              <h5 className="mb-3 text-lg font-bold tracking-tight text-gray-900 dark:text-white">
                    Pemaparan Materi</h5>
            </a>
        </div>
    </div>   

    <div className="mt-3 grid grid-cols-1 gap-4">
        <div className="font-bold">    
            <a href="#" className="block w-full p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
              <div className="mb-3 flex items-center align-middle">  
                <ClockIcon className="flex-shrink-0 h-6 w-6 text-gray-400 dark:text-gray-200 mr-1" aria-hidden="true"/><h1 className="font-semibold text-md text-gray-400 dark:text-gray-200">12.00 - 13.00 WITA </h1>
              </div><hr className="h-px my-4 bg-gray-200 border-0 dark:bg-gray-700" />
                <h5 className="mb-2 text-lg font-bold tracking-tight text-gray-900 dark:text-white">🔄 ISHOMA (Istirahat, Sholat, Makan)</h5>
            </a>
        </div>
    </div>

    <div className="mt-3 grid grid-cols-1 gap-4">
        <div className="font-bold">    
            <a href="#" className="block w-full p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
              <div className="mb-3 flex items-center align-middle">  
                <ClockIcon className="flex-shrink-0 h-6 w-6 text-gray-400 dark:text-gray-200 mr-1" aria-hidden="true"/><h1 className="font-semibold text-md text-gray-400 dark:text-gray-200">13.00 - 13.45 WITA </h1>
              </div><hr className="h-px my-4 bg-gray-200 border-0 dark:bg-gray-700" />
                <h5 className="mb-2 text-lg font-bold tracking-tight text-gray-900 dark:text-white">Pemaparan Hasil Perumusan Kesepakatan</h5>
            </a>
        </div>
    </div>

    <div className="mt-3 grid grid-cols-1 gap-4">
        <div className="font-bold">    
            <a href="#" className="block w-full p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
              <div className="mb-3 flex items-center align-middle">  
                <ClockIcon className="flex-shrink-0 h-6 w-6 text-gray-400 dark:text-gray-200 mr-1" aria-hidden="true"/><h1 className="font-semibold text-md text-gray-400 dark:text-gray-200">13.45 - 14.00 WITA </h1>
              </div><hr className="h-px my-4 bg-gray-200 border-0 dark:bg-gray-700" />
                <h5 className="mb-2 text-lg font-bold tracking-tight text-gray-900 dark:text-white">Penandatanganan Hasil Kesepakatan Konreg PDRB Kasulampua Tahun 2023</h5>
            </a>
        </div>
    </div>

    <div className="mt-3 grid grid-cols-1 gap-4">
        <div className="font-bold">    
            <a href="#" className="block w-full p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
              <div className="mb-3 flex items-center align-middle">  
                <ClockIcon className="flex-shrink-0 h-6 w-6 text-gray-400 dark:text-gray-200 mr-1" aria-hidden="true"/><h1 className="font-semibold text-md text-gray-400 dark:text-gray-200">14.00 - 14.30 WITA </h1>
              </div><hr className="h-px my-4 bg-gray-200 border-0 dark:bg-gray-700" />
              <h5 className="mb-3 text-lg font-bold tracking-tight text-gray-900 dark:text-white">
                 Pidato Penutupan oleh Wakil Gubernur Sulawesi Tenggara</h5>
                    <div className="mt-3 flex items-center space-x-4">
                      <div className="flex-shrink-0">
                       <Image className="rounded-full" width="64" height="64" src="/people/lukman.png" alt="Lukman" />
                      </div>
                        <dl className="ml-3 text-sm font-medium leading-4 text-left whitespace-no-wrap">
                          <dd className="mb-1 text-md font-bold text-gray-400 dark:text-gray-300">Narasumber:</dd>
                          <dd className="text-lg text-gray-900 dark:text-white">Dr. H. Lukman Abunawas, S.H., M.Si.</dd>
                          <p className="text-sm text-gray-400 dark:text-gray-300"> Wakil Gubernur Sulawesi Tenggara</p>
                        </dl>
                    </div>
            </a>
        </div>
    </div> 

    <div className="mt-3 grid grid-cols-1 gap-4">
        <div className="font-bold">    
            <Link href="/wisata/objekwisata" className="block w-full p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
              <div className="mb-3 flex items-center align-middle">  
                <ClockIcon className="flex-shrink-0 h-6 w-6 text-gray-400 dark:text-gray-200 mr-1" aria-hidden="true"/><h1 className="font-semibold text-md text-gray-400 dark:text-gray-200">14.30 - 18.00 WITA </h1>
              </div><hr className="h-px my-4 bg-gray-200 border-0 dark:bg-gray-700" />
                <h5 className="mb-2 text-lg font-bold tracking-tight text-gray-900 dark:text-white">City Tour di Pulau Bokori</h5>
                <div className="mt-3 flex items-center space-x-4">
                      <Image className="mb-3 items-center" width="400" height= "150" src="/pariwisata/bokori.jpeg" alt="Bokori" />
                </div>
                <div className="mb-1 flex items-center align-middle"> 
                    <MapPinIcon className="flex-shrink-0 h-6 w-6 text-red-500 mr-1" aria-hidden="true"/><span className="inline-block text-sm font-medium text-blue-500"> Lihat juga wisata di Sulawesi Tenggara →</span> 
                </div>
            </Link>
        </div>
    </div>

    <div className="mt-3 grid grid-cols-1 gap-4">
        <div className="font-bold">    
            <Link href="/wisata/objekwisata" className="block w-full p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
              <div className="mb-3 flex items-center align-middle">  
                <ClockIcon className="flex-shrink-0 h-6 w-6 text-gray-400 dark:text-gray-200 mr-1" aria-hidden="true"/><h1 className="font-semibold text-md text-gray-400 dark:text-gray-200">18.00 - 18.30 WITA </h1>
              </div><hr className="h-px my-4 bg-gray-200 border-0 dark:bg-gray-700" />
                <h5 className="mb-2 text-lg font-bold tracking-tight text-gray-900 dark:text-white">Sholat Maghrib di Masjid Terapung Al-Alam Kendari</h5>
                <div className="mt-3 flex items-center space-x-4">
                      <Image className="mb-3 items-center" width="400" height= "150" src="/pariwisata/masjid.jpeg" alt="Masjid" />
                </div>
                <div className="flex items-center align-middle"> 
                    <MapPinIcon className="flex-shrink-0 h-6 w-6 text-red-500 mr-1" aria-hidden="true"/><span className="inline-block text-sm font-medium text-blue-500"> Lihat juga wisata di Sulawesi Tenggara →</span> 
                </div>
            </Link>
        </div>
    </div>

    <div className="mt-3 grid grid-cols-1 gap-4">
        <div className="font-bold">    
            <Link href="/akomodasi/rumahmakan" className="block w-full p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
              <div className="mb-3 flex items-center align-middle">  
                <ClockIcon className="flex-shrink-0 h-6 w-6 text-gray-400 dark:text-gray-200 mr-1" aria-hidden="true"/><h1 className="font-semibold text-md text-gray-400 dark:text-gray-200">18.30 WITA - selesai </h1>
              </div><hr className="h-px my-4 bg-gray-200 border-0 dark:bg-gray-700" />
                <h5 className="mb-2 text-lg font-bold tracking-tight text-gray-900 dark:text-white">🔄 Makan Malam dan Istirahat</h5>
                <div className="flex items-center align-middle"> 
                    <MapPinIcon className="flex-shrink-0 h-6 w-6 text-red-500 mr-1" aria-hidden="true"/><span className="inline-block text-sm font-medium text-blue-500"> Lihat tempat makan di Kendari →</span> 
                </div>
            </Link>
        </div>
    </div>

</div>
    )
}