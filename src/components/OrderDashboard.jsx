import React from "react";

import { Radio } from "@material-tailwind/react";
import { Input } from "@material-tailwind/react";
import Link from "next/link";
import Image from "next/image";

export default function OrderDashboard() {
  return (
    <div className="w-full ">
      <div className="bg-white border-2 border-primary rounded-lg shadow-md py-4 px-8">
        <h1 className="text-2xl mb-2 font-bold">Pesanan Saya</h1>
        <hr class="h-px bg-primary border-0 mb-5 dark:bg-gray-700" />
        <div>
          <div className="grid grid-cols-3 md:grid-cols-6 gap-6">
            <div class="w-full md:px-6 py-3 bg-white flex flex-col item-center gap-1 border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
              <svg class="w-8 h-8 text-gray-800 mx-auto  dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M17 8H5m12 0c.6 0 1 .4 1 1v2.6M17 8l-4-4M5 8a1 1 0 0 0-1 1v10c0 .6.4 1 1 1h12c.6 0 1-.4 1-1v-2.6M5 8l4-4 4 4m6 4h-4a2 2 0 1 0 0 4h4c.6 0 1-.4 1-1v-2c0-.6-.4-1-1-1Z"
                />
              </svg>
              <p className="text-sm mx-auto">Belum Bayar</p>
            </div>
            <div class="w-full md:px-6 py-3 bg-white flex flex-col item-center gap-1 border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
              <svg class="w-8 h-8 text-gray-800 mx-auto  dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-width="2"
                  d="M8 7V6c0-.6.4-1 1-1h11c.6 0 1 .4 1 1v7c0 .6-.4 1-1 1h-1M3 18v-7c0-.6.4-1 1-1h11c.6 0 1 .4 1 1v7c0 .6-.4 1-1 1H4a1 1 0 0 1-1-1Zm8-3.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Z"
                />
              </svg>
              <p className="text-sm mx-auto">Sudah Bayar</p>
            </div>
            <div class="w-full md:px-6 py-3 bg-white flex flex-col item-center gap-1 border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
              <svg class="w-8 h-8 text-gray-800 mx-auto  dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M10 21v-9m3-4H7.5a2.5 2.5 0 1 1 0-5c1.5 0 2.9 1.3 3.9 2.5M14 21v-9m-9 0h14v8a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1v-8ZM4 8h16a1 1 0 0 1 1 1v3H3V9a1 1 0 0 1 1-1Zm12.2-5c-3 0-5.5 5-5.5 5h5.5a2.5 2.5 0 0 0 0-5Z"
                />
              </svg>
              <p className="text-sm mx-auto">Dikemas</p>
            </div>
            <div class="w-full md:px-6 py-3 bg-white flex flex-col item-center gap-1 border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
              <svg class="w-8 h-8 text-gray-800 mx-auto  dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M13 7h6l2 4m-8-4v8m0-8V6a1 1 0 0 0-1-1H4a1 1 0 0 0-1 1v9h2m8 0H9m4 0h2m4 0h2v-4m0 0h-5m3.5 5.5a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0Zm-10 0a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0Z"
                />
              </svg>
              <p className="text-sm mx-auto">Dikirim</p>
            </div>
            <div class="w-full md:px-6 py-3 bg-white flex flex-col item-center gap-1 border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
              <svg class="w-8 h-8 text-gray-800 mx-auto dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <path
                  stroke="currentColor"
                  stroke-width="2"
                  d="M11 5.1a1 1 0 0 1 2 0l1.7 4c.1.4.4.6.8.6l4.5.4a1 1 0 0 1 .5 1.7l-3.3 2.8a1 1 0 0 0-.3 1l1 4a1 1 0 0 1-1.5 1.2l-3.9-2.3a1 1 0 0 0-1 0l-4 2.3a1 1 0 0 1-1.4-1.1l1-4.1c.1-.4 0-.8-.3-1l-3.3-2.8a1 1 0 0 1 .5-1.7l4.5-.4c.4 0 .7-.2.8-.6l1.8-4Z"
                />
              </svg>
              <p className="text-sm mx-auto">Penilaian</p>
            </div>
            <div class="w-full px-3 md:px-6 py-3 bg-white flex flex-col item-center gap-1 border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
              <svg class="w-8 h-8 mx-auto text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M9 6H8a1 1 0 0 0-1 1v10c0 .6.4 1 1 1h1c.6 0 1-.4 1-1V7c0-.6-.4-1-1-1Zm7 0h-1a1 1 0 0 0-1 1v10c0 .6.4 1 1 1h1c.6 0 1-.4 1-1V7c0-.6-.4-1-1-1Z"
                />
              </svg>
              <p className="text-sm mx-auto">Dibatalkan</p>
            </div>
          </div>
        </div>
        {/* <div className="flex flex-col mt-5 border rounded-xl">
          <div className="flex justify-end space-x-5 px-5 py-5">
            <span className="my-auto">Pesanan telah diterima oleh yang bersangkutan</span>
            <h1 className="bg-red-300 py-1 px-1">SELESAI</h1>
          </div>
          <div>
            <table className="w-full">
              <tbody>
                <tr>
                  <td className="py-4 px-4">
                    <div className="flex items-center">
                      <Image className="mr-4" src="/images/product_2.png" alt="Product image" height={150} width={150} />
                      <div className="flex flex-col">
                        <span className="font-bold ">Glassby</span>
                        <span className="font-regular text-lg">Gelas Imut</span>
                        <span className="font-regular text-lg">Size: M</span>
                        <span className="font-regular text-lg">Warna: Peach, Jumlah: 1x</span>
                      </div>
                    </div>
                  </td>
                  <td className="py-4 px-4">
                    <div className="mt-20 text-right">
                      <span className="text-lg font-bold text-right">Rp.250.000</span>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
            <div className="py-4 px-4">
              <div className="flex justify-end">
                <span className="text-lg font-regular">
                  Total Pesanan: <span className="font-bold text-lg">Rp.274.000</span>
                </span>
              </div>
              <div>
                <div className="flex justify-end space-x-4">
                  <Link href="/reviewinputpage">
                    <button className="bg-primary text-white font-bold py-2 w-[120px] rounded-lg ">Nilai</button>
                  </Link>
                  <Link href="/paymentpage">
                    <button className="bg-primary text-white font-bold py-2 w-[120px] rounded-lg ">Beli Lagi</button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div> */}
      </div>
    </div>
  );
}
