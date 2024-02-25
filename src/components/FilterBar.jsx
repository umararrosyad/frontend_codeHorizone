import { Rating } from '@material-tailwind/react'
import Link from 'next/link'
import React, { useState } from 'react'

export default function FilterBar() {
  return (
    <div className="flex w-3/12">
      <div className="flex flex-col bg-peach w-full p-4 shadow-xl rounded-md shadow-blue-gray-900/5 mb-7">
        <h1 className="px-5 py-4 text-lg font-bold">Filter</h1>
        <hr className="bg-grape opacity-25" />
        <div>
          <h1 className="px-5 py-4 text-lg font-bold">Category</h1>
          <span className="px-5 py-4 text-lg reguler text-primary">
            For Baby and Kids
          </span>
          <ul className="py-4 px-5">
            <li class="mb-4">
              <label for="" class="flex items-center dark:text-gray-400 ">
                <input type="checkbox" class="w-4 h-4 mr-2" />
                <span class="text-lg">Feeding</span>
              </label>
            </li>
            <li class="mb-4">
              <label for="" class="flex items-center dark:text-gray-400 ">
                <input type="checkbox" class="w-4 h-4 mr-2 " />
                <span class="text-lg">Wear</span>
              </label>
            </li>
            <li class="mb-4">
              <label for="" class="flex items-center dark:text-gray-400">
                <input type="checkbox" class="w-4 h-4 mr-2" />
                <span class="text-lg">Bedding and Bath</span>
              </label>
            </li>
            <li class="mb-4">
              <label for="" class="flex items-center dark:text-gray-400">
                <input type="checkbox" class="w-4 h-4 mr-2" />
                <span class="text-lg">Baby Cologne</span>
              </label>
            </li>
            <li class="mb-4">
              <label for="" class="flex items-center dark:text-gray-400">
                <input type="checkbox" class="w-4 h-4 mr-2" />
                <span class="text-lg">Hair Care</span>
              </label>
            </li>
          </ul>
        </div>
        <div>
          <div>
            <span className="px-5 py-4 text-lg reguler text-primary">
              For Mom
            </span>
            <ul className="py-4 px-5">
              <li class="mb-4">
                <label for="" class="flex items-center dark:text-gray-400 ">
                  <input type="checkbox" class="w-4 h-4 mr-2" />
                  <span class="text-lg">Apparel</span>
                </label>
              </li>
              <li class="mb-4">
                <label for="" class="flex items-center dark:text-gray-400 ">
                  <input type="checkbox" class="w-4 h-4 mr-2 " />
                  <span class="text-lg">Fragrance</span>
                </label>
              </li>
              <li class="mb-4">
                <label for="" class="flex items-center dark:text-gray-400">
                  <input type="checkbox" class="w-4 h-4 mr-2" />
                  <span class="text-lg">Hair Care</span>
                </label>
              </li>
              <li class="mb-4">
                <label for="" class="flex items-center dark:text-gray-400">
                  <input type="checkbox" class="w-4 h-4 mr-2" />
                  <span class="text-lg">Skin Care</span>
                </label>
              </li>
              <li class="mb-4">
                <label for="" class="flex items-center dark:text-gray-400">
                  <input type="checkbox" class="w-4 h-4 mr-2" />
                  <span class="text-lg">Bath And Body</span>
                </label>
              </li>
            </ul>
          </div>
          <div className="mb-7">
            <h1 className="px-5 py-4 text-lg font-bold">Price</h1>
            <div className="flex flex-col space-y-4">
              <Link href="/checkout">
                <button className="flex bg-grape text-black items-center border font-bold rounded-lg">
                  <Rating value={5} />
                </button>
              </Link>
              <Link href="/checkout">
                <button className="flex bg-grape text-black items-center border font-bold rounded-lg">
                  <Rating value={4} />
                </button>
              </Link>
              <Link href="/checkout">
                <button className="flex bg-grape text-black items-center border font-bold rounded-lg">
                  <Rating value={3} />
                </button>
              </Link>
              <Link href="/checkout">
                <button className="flex bg-grape text-black items-center border font-bold rounded-lg">
                  <Rating value={2} />
                </button>
              </Link>
              <Link href="/checkout">
                <button className="flex bg-grape text-black items-center border font-bold rounded-lg">
                  <Rating value={1} />
                </button>
              </Link>
            </div>
          </div>
          <div>
            <h1 className="px-5 py-4 text-lg font-bold">Price</h1>
            <div>
              <label
                for="minmax-range"
                class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              ></label>
              <input
                id="minmax-range"
                type="range"
                min="0"
                max="1000000"
                value="250000"
                class="w-full h-2 bg-purple rounded-lg appearance-none cursor-pointer dark:bg-gray-700"
              />

              <div class="flex justify-between ">
                <span class="inline-block text-lg font-bold text-blue-400 ">
                  Rp.0
                </span>
                <span class="inline-block text-lg font-bold text-blue-400 ">
                  Rp.1000.000
                </span>
              </div>
            </div>
          </div>
          <Link href="/paymentpage">
            <button className="bg-primary text-white font-bold py-2 px-4 rounded-full mt-4 w-full">
              Terapkan Filter
            </button>
          </Link>
        </div>
      </div>
    </div>
  )
}
