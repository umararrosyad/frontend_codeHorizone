import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { FaRegTrashCan } from 'react-icons/fa6'

export default function CartPage() {
  return (
    <div className="bg-gray-100 h-screen py-8">
      <div className="container mx-auto px-4">
        <h1 className="text-2xl font-semibold mb-4">Keranjang Belanja</h1>
        <div className="flex flex-col md:flex-row gap-4">
          <div className="md:w-3/4">
            <div className="bg-white rounded-lg shadow-md p-6 mb-4">
              <table className="w-full">
                <thead>
                  <tr>
                    <th className="text-center">
                      <input
                        id="checkbox1"
                        type="checkbox"
                        className="w-5 h-5 focus:ring-1 focus:ring-offset-slate-200 focus:ring-offset-4 focus:ring-[#007bff]"
                      />
                      <label
                        for="checkbox1"
                        className="text-black text-sm"
                      ></label>
                    </th>
                    <th className="text-center font-semibold">Product</th>
                    <th className="text-center font-semibold">Price</th>
                    <th className="text-center font-semibold">Quantity</th>
                    <th className="text-center font-semibold">Total</th>
                    <th className="text-center font-semibold">Aksi</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="text-center">
                      <input
                        id="checkbox1"
                        type="checkbox"
                        className="w-5 h-5 focus:ring-1 focus:ring-offset-slate-200 focus:ring-offset-4 focus:ring-[#007bff]"
                      />
                      <label for="checkbox1" class="text-black text-sm"></label>
                    </td>
                    <td className="py-4">
                      <div className="flex items-center justify-center">
                        <Image
                          className="h-[150px] w-[150px] mr-4"
                          src="/images/product_2.png"
                          alt="Product image"
                          height={150}
                          width={150}
                        />
                        <span className="font-semibold">Gelas Imut</span>
                      </div>
                    </td>
                    <td className="py-4 text-center">Rp.250.000</td>
                    <td className="py-4">
                      <div className="flex justify-center">
                        <div className="bg-gray border rounded-md">
                          <button className="border py-2 px-4 mr-2 text-xl bg-grape">
                            -
                          </button>
                          <span className="text-center px-2 py-2 text-xl items-center">
                            1
                          </span>
                          <button className="border py-2 px-4 ml-2 text-xl bg-grape">
                            +
                          </button>
                        </div>
                      </div>
                    </td>
                    <td className="py-4 text-center">Rp.250.000</td>
                    <td>
                      <div className="flex justify-center">
                        <FaRegTrashCan color="grape" size={25} />
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <div className="md:w-1/4">
            <div className="bg-peach rounded-lg shadow-md p-6">
              <h2 className="text-lg font-semibold text-center mb-4">
                Detail Pembayaran
              </h2>
              <div className="flex justify-between mb-2">
                <h1>
                  Glassby Gelas Imut<span>(Q1)</span>
                </h1>
                <span>Rp. 250.000</span>
              </div>
              <div className="flex justify-between mt-5 mb-2">
                <span>Belum termasuk ongkir</span>
              </div>
              <hr className="my-2" />
              <div className="flex justify-between mb-2">
                <span className="font-semibold">Total</span>
                <span className="font-semibold">Rp. 262.000</span>
              </div>
              <Link href="/checkout">
                <button className="bg-primary text-white font-bold py-2 px-4 rounded-lg mt-4 w-full">
                  Checkout
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
