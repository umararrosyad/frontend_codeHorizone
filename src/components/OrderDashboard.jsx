import React from 'react'

import { Radio } from '@material-tailwind/react'
import { Input } from '@material-tailwind/react'
import Link from 'next/link'
import Image from 'next/image'

export default function OrderDashboard() {
  return (
    <div className="md:w-4/5 ">
      <div className="bg-white rounded-lg shadow-md p-8">
        <h1 className="text-lg font-bold">Pesanan Saya</h1>
        <span>
          Jika mengalami kendala dengan orderan kamu, hubungi Help Center kami
        </span>
        <hr className="w-full mb-8" />
        <div>
          <nav className="">
            <ul className="flex hover-grape">
              <li
                className="text-black rounded-md px-8 py-4 font-bold hover:bg-grape mr-5
              "
              >
                <Link href="/">Semua</Link>
              </li>
              <li
                className="text-black rounded-md px-8 py-4 font-bold hover:bg-grape mr-5
              "
              >
                <Link href="/">Belum Bayar</Link>
              </li>
              <li
                className="text-black rounded-md px-8 py-4 font-bold hover:bg-grape mr-5
              "
              >
                <Link href="/">Dikemas</Link>
              </li>
              <li
                className="text-black rounded-md px-8 py-4 font-bold hover:bg-grape mr-5
              "
              >
                <Link href="/">Selesai</Link>
              </li>
              <li
                className="text-black rounded-md px-8 py-4 font-bold hover:bg-grape mr-5
              "
              >
                <Link href="/">Review</Link>
              </li>
              <li
                className="text-black rounded-md px-8 py-4 font-bold hover:bg-grape mr-5
              "
              >
                <Link href="/">Dibatalkan</Link>
              </li>
            </ul>
          </nav>
        </div>
        <div className="flex flex-col border rounded-xl">
          <div className="flex justify-end space-x-5 px-5 py-5">
            <span className="my-auto">
              Pesanan telah diterima oleh yang bersangkutan
            </span>
            <h1 className="bg-red-300 py-1 px-1">SELESAI</h1>
          </div>
          <div>
            <table className="w-full">
              <tbody>
                <tr>
                  <td className="py-4 px-4">
                    <div className="flex items-center">
                      <Image
                        className="mr-4"
                        src="/images/product_2.png"
                        alt="Product image"
                        height={150}
                        width={150}
                      />
                      <div className="flex flex-col">
                        <span className="font-bold ">Glassby</span>
                        <span className="font-regular text-lg">Gelas Imut</span>
                        <span className="font-regular text-lg">Size: M</span>
                        <span className="font-regular text-lg">
                          Warna: Peach, Jumlah: 1x
                        </span>
                      </div>
                    </div>
                  </td>
                  <td className="py-4 px-4">
                    <div className="mt-20 text-right">
                      <span className="text-lg font-bold text-right">
                        Rp.250.000
                      </span>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
            <div className="py-4 px-4">
              <div className="flex justify-end">
                <span className="text-lg font-regular">
                  Total Pesanan:{' '}
                  <span className="font-bold text-lg">Rp.274.000</span>
                </span>
              </div>
              <div>
                <div className="flex justify-end space-x-4">
                  <Link href="/reviewinputpage">
                    <button className="bg-primary text-white font-bold py-2 w-[120px] rounded-lg ">
                      Nilai
                    </button>
                  </Link>
                  <Link href="/paymentpage">
                    <button className="bg-primary text-white font-bold py-2 w-[120px] rounded-lg ">
                      Beli Lagi
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
