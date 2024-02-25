import React from 'react'
import { FaMapMarkerAlt } from 'react-icons/fa'
import Link from 'next/link'

export default function AddressCard() {
  return (
    <div className="md:w-4/5 ">
      <div className="bg-white rounded-lg shadow-md p-8">
        <div className="flex justify-between w-full items-center mb-7">
          <h1 className="text-lg font-bold">Alamat Saya</h1>
          <Link href="/paymentpage">
            <button className="bg-button text-white font-bold py-2 px-16 rounded-lg">
              + Tambah Alamat Baru
            </button>
          </Link>
        </div>
        <hr />
        <div className="bg-gray mt-9 rounded-md">
          <div className="flex items-center space-x-5 py-4 px-9">
            <FaMapMarkerAlt className="h-5" />
            <h1 className="text-lg font-bold">Alamat Pengiriman </h1>
            <div className="bg-red-500 py-1 px-2">
              <span className="text-white px-5 py2">Utama</span>
            </div>
          </div>
          <div className="px-9">
            <table>
              <tbody>
                <tr>
                  <td>
                    <h1 className="text-lg font-bold">
                      Vendi (+62) 81215207595
                    </h1>
                  </td>
                  <td>
                    <span>
                      Lapangan Bulu Tangkis, Jalan Cihideung, Rt.23/Rw.4, Desa
                      Mulyamekar, Babakancikao, KAB. PURWAKARTA - BABAKANCIKAO,
                      JAWA BARAT, ID 41151
                    </span>
                  </td>
                  <td>
                    <Link href="/paymentpage">
                      <button className="bg-button text-white font-bold py-1 px-10 rounded-lg">
                        Edit
                      </button>
                    </Link>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  )
}
