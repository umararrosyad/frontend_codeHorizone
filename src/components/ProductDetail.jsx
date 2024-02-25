import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Rating } from '@material-tailwind/react'

export default function ProductDetail() {
  return (
    <section className="w-full overflow-hidden bg-white py-11 font-poppins dark:bg-gray-800">
      <div className="max-wl px-4 py-4 mx-auto lg:py-8 md:px-6">
        <div className="flex flex-wrap -mx-4">
          <div className="w-full px-4 md:w-1/2 ">
            <div className="sticky top-0 overflow-hidden ">
              <div className="relative mb-6 lg:mb-10 lg:h-2/4 ">
                <Image
                  src="/images/product_1.png"
                  alt="Main Photo"
                  className="object-cover w-[600px] h-[600px] lg:h-full "
                  width={350}
                  height={350}
                />
              </div>
              <div className="flex-wrap hidden md:flex ">
                <div className="w-1/4 p-4">
                  <Link
                    href="#"
                    className="block border border-blue-300 dark:border-transparent dark:hover:border-blue-300 hover:border-blue-300"
                  >
                    <Image
                      src="/images/productdetail_1.png"
                      alt="Detail 1"
                      className="object-cover w-[100px] h-[100px] lg:h-20"
                      width={150}
                      height={150}
                    />
                  </Link>
                </div>
                <div className="w-1/2 p-2 sm:w-1/4">
                  <Link
                    href="#"
                    className="block border border-transparent dark:border-transparent dark:hover:border-blue-300 hover:border-blue-300"
                  >
                    <Image
                      src="/images/product_1.png"
                      alt=""
                      className="object-cover w-[100px] h[100px] lg:h-20"
                      width={150}
                      height={150}
                    />
                  </Link>
                </div>
                <div className="w-1/2 p-2 sm:w-1/4">
                  <Link
                    href="#"
                    className="block border border-transparent dark:border-transparent dark:hover:border-blue-300 hover:border-blue-300"
                  >
                    <Image
                      src="/images/productdetail_1.png"
                      alt=""
                      className="object-cover w-[100px] h[100px] lg:h-20"
                      width={150}
                      height={150}
                    />
                  </Link>
                </div>
                <div className="w-1/2 p-2 sm:w-1/4">
                  <Link
                    href="#"
                    className="block border border-transparent dark:border-transparent dark:hover:border-blue-300 hover:border-blue-300"
                  >
                    <Image
                      src="/images/productdetail_1.png"
                      alt=""
                      className="object-cover w-[100px] h[100px] lg:h-20"
                      width={150}
                      height={150}
                    />
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full px-4 md:w-1/2 ">
            <div className="lg:pl-20">
              <div className="mb-8 flex  flex-col space-y-2 ">
                <h1 className="text-2xl font-bold text-button">Cotton Seed</h1>
                <h1 className="mt-2 mb-6 text-2xl font-regular">Baju Bayi</h1>
                <p className="inline-block mb-8 text-2xl font-bold text-gray-700 dark:text-gray-400 ">
                  <span>Rp.175.000</span>
                </p>
                <Rating value={4} />
              </div>
              <div className="flex flex-col mb-8">
                <h2 className="w-16 mr-6 text-xl font-bold dark:text-gray-400">
                  Colors:
                </h2>
                <div className="flex flex-wrap -mx-2 -mb-2">
                  <button className="p-1 mb-2 mr-2 border border-transparent hover:border-blue-400 dark:border-gray-800 dark:hover:border-gray-400 ">
                    <div className="w-10 h-10 bg-cyan-300"></div>
                  </button>
                  <button className="p-1 mb-2 mr-2 border border-transparent hover:border-blue-400 dark:border-gray-800 dark:hover:border-gray-400">
                    <div className="w-10 h-10 bg-green-300 "></div>
                  </button>
                  <button className="p-1 mb-2 border border-transparent hover:border-blue-400 dark:border-gray-800 dark:hover:border-gray-400">
                    <div className="w-10 h-10 bg-red-200 "></div>
                  </button>
                </div>
              </div>
              <div className="flex flex-col mb-8">
                <h2 className="w-16 text-xl font-bold dark:text-gray-400">
                  Size:
                </h2>
                <div className="flex flex-wrap -mx-2 -mb-2">
                  <button className="py-2 mb-2 mr-2 border w-11 hover:border-blue-400 dark:border-gray-400 hover:text-blue-600 dark:hover:border-gray-300 dark:text-gray-400">
                    XL
                  </button>
                  <button className="py-2 mb-2 mr-2 border w-11 hover:border-blue-400 hover:text-blue-600 dark:border-gray-400 dark:hover:border-gray-300 dark:text-gray-400">
                    S
                  </button>
                  <button className="py-2 mb-2 mr-2 border w-11 hover:border-blue-400 hover:text-blue-600 dark:border-gray-400 dark:hover:border-gray-300 dark:text-gray-400">
                    M
                  </button>
                  <button className="py-2 mb-2 mr-2 border w-11 hover:border-blue-400 hover:text-blue-600 dark:border-gray-400 dark:hover:border-gray-300 dark:text-gray-400">
                    XS
                  </button>
                </div>
              </div>
              <div className="w-32 mb-8 ">
                <h2 className="w-16 text-xl font-semibold dark:text-gray-400">
                  Quantity
                </h2>
                <div className="relative flex flex-row w-full h-10 bg-button border rounded-full">
                  <button className="w-20 h-full text-gray-600 bg-gray-300 rounded-l outline-none cursor-pointer dark:hover:bg-gray-700 dark:text-gray-400 hover:text-gray-700 dark:bg-gray-900 hover:bg-gray-400">
                    <span className="m-auto text-2xl font-thin">-</span>
                  </button>
                  <input
                    type="number"
                    className="flex items-center w-full border font-semibold text-center text-gray-700 placeholder-gray-700 bg-gray-300 outline-none dark:text-gray-400 dark:placeholder-gray-400 dark:bg-gray-900 focus:outline-none text-md hover:text-black"
                    placeholder="1"
                  />
                  <button className="w-20 h-full text-gray-600 bg-gray-300 rounded-r outline-none cursor-pointer dark:hover:bg-gray-700 dark:text-gray-400 dark:bg-gray-900 hover:text-gray-700 hover:bg-gray-400">
                    <span className="m-auto text-2xl font-thin">+</span>
                  </button>
                </div>
              </div>
              <div className="">
                <h2 className="text-xl font-bold dark:text-gray-400 mb-8">
                  Subtotal: Rp.175.000
                </h2>
              </div>
              <div className="flex items-center space-x-4">
                <div className="w-1/2 mb-4">
                  <Link href="/cart">
                    <button className="bg-transparent text-primary w-full font-bold py-2 px-4 border border-primary rounded-full ">
                      Masukan Keranjang
                    </button>
                  </Link>
                </div>
                <div className="mb-4 w-1/2">
                  <Link href="/checkout">
                    <button className="bg-primary text-white w-full font-bold py-2 rounded-full ">
                      Beli Sekarang
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="h-[120px] w-full mt-9">
        <div className="bg-peach py-2">
          <h className="text-xl font-bold">Deskripsi Produk</h>
        </div>
        <span>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium
          ea tempore, cum accusantium ex quas temporibus voluptatum obcaecati ab
          maiores dolorem natus possimus fugiat corporis debitis neque deleniti
          dolores? A.
        </span>
      </div>
    </section>
  )
}
