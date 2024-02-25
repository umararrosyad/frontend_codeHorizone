import Link from 'next/link'
import React from 'react'
import Image from 'next/image'
import {
  Menu,
  MenuHandler,
  Button,
  MenuList,
  MenuItem,
  Checkbox,
} from '@material-tailwind/react'

export default function CheckoutForm() {
  return (
    <section>
      <div className="bg-gray-100 h-screen py-8">
        <div className="container mx-auto px-4">
          <h1 className="text-2xl font-semibold mb-4">Check Out</h1>
          <div className="flex flex-col md:flex-row gap-4">
            <div className="md:w-3/4">
              <div className="bg-white rounded-lg shadow-md p-6 mb-4">
                <h1 className="text-lg font-bold">Alamat Pengiriman</h1>
                <table className="w-full">
                  <tbody>
                    <tr>
                      <td>
                        <h1 className="text-lg font-bold">
                          Vendi (+62) 81215207595
                        </h1>
                      </td>
                      <td>
                        <span>
                          Lapangan Bulu Tangkis, Jalan Cihideung, Rt.23/Rw.4,
                          Desa Mulyamekar, Babakancikao, KAB. PURWAKARTA -
                          BABAKANCIKAO, JAWA BARAT, ID 41151
                        </span>
                      </td>
                      <td>
                        <div className="bg-red-500 px-5 py-1 text-white font-semibold">
                          Utama
                        </div>
                      </td>
                    </tr>
                  </tbody>
                </table>
                <div className="flex mt-7 justify-center space-x-4">
                  <Link href="/paymentpage">
                    <button className="bg-button text-white font-bold py-2 px-16 rounded-lg">
                      Pilih Alamat Lain
                    </button>
                  </Link>
                  <Link href="/paymentpage">
                    <button className="bg-button text-white font-bold py-2 px-16 rounded-lg">
                      + Tambah Alamat Baru
                    </button>
                  </Link>
                </div>
              </div>
              <div className="bg-white rounded-lg shadow-md p-6 mb-4">
                <table className="w-full">
                  <thead>
                    <tr>
                      <th className="text-left font-semibold">
                        Produk Dipesan
                      </th>
                      <th className="text-center font-semibold">
                        Harga Satuan
                      </th>
                      <th className="text-center font-semibold">Quantity</th>
                      <th className="text-center font-semibold">Subtotal</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="py-4">
                        <div className="flex items-center">
                          <Image
                            className="h-[150px] w-[150px] mr-4"
                            src="/images/product_2.png"
                            alt="Product image"
                            height={150}
                            width={150}
                          />
                          <div className="flex flex-col">
                            <span className="font-bold">Glassby</span>
                            <span className="font-semibold">Gelas Imut</span>
                          </div>
                        </div>
                      </td>
                      <td className="py-4 text-center">Rp.250.000</td>
                      <td className="py-4 text-center">1</td>
                      <td className="py-4 text-center">Rp 250.000</td>
                    </tr>
                  </tbody>
                </table>
                <div>
                  <div className="flex items-center justify-end py-4 px-4 space-x-4">
                    <h1 className="text-lg">Pesan:</h1>
                    <input
                      type="text"
                      className="w-5/6 h-12 rounded-lg shadow-lg"
                      placeholder="Tulis Pesan Untuk Penjual"
                    />
                  </div>
                  <div>
                    <div className="flex items-center justify-end py-4 px-4 space-x-4">
                      <Menu
                        dismiss={{
                          itemPress: false,
                        }}
                      >
                        <MenuHandler>
                          <Button className="w-5/6 shadow-lg text-black text-left bg-peach">
                            Opsi Pengiriman
                          </Button>
                        </MenuHandler>
                        <MenuList>
                          <MenuItem className="p-10">
                            <label
                              htmlFor="item-1"
                              className="flex cursor-pointer items-center gap-2 p-2"
                            >
                              <Checkbox
                                ripple={false}
                                id="item-1"
                                containerProps={{ className: 'p-0' }}
                                className="hover:before:content-none"
                              />
                              Anteraja
                            </label>
                          </MenuItem>
                          <MenuItem className="p-0">
                            <label
                              htmlFor="item-2"
                              className="flex cursor-pointer items-center gap-2 p-2"
                            >
                              <Checkbox
                                ripple={false}
                                id="item-2"
                                containerProps={{ className: 'p-0' }}
                                className="hover:before:content-none"
                              />
                              JNE
                            </label>
                          </MenuItem>
                          <MenuItem className="p-0">
                            <label
                              htmlFor="item-3"
                              className="flex cursor-pointer items-center gap-2 p-2"
                            >
                              <Checkbox
                                ripple={false}
                                id="item-3"
                                containerProps={{ className: 'p-0' }}
                                className="hover:before:content-none"
                              />
                              Sicepat
                            </label>
                          </MenuItem>
                        </MenuList>
                      </Menu>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="md:w-1/4">
              <div className="bg-peach rounded-lg shadow-md p-6">
                <h2 className="text-lg font-semibold text-center mb-4">
                  Ringkasan Pembayaran
                </h2>
                <div className="flex justify-between mb-2">
                  <span>Subtotal</span>
                  <span>Rp. 250.000</span>
                </div>
                <div className="flex justify-between mb-2">
                  <span>Ongkos Kirim</span>
                  <span>Rp 12.000</span>
                </div>
                <hr className="my-2" />
                <div className="flex justify-between mb-2">
                  <span className="font-semibold">Total</span>
                  <span className="font-semibold">Rp. 262.000</span>
                </div>
                <Link href="/payment">
                  <button className="bg-primary text-white font-bold py-2 px-4 rounded-lg mt-4 w-full">
                    Pilih Metode Pembayaran
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
