import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Typography } from '@material-tailwind/react'

const renderStars = (rating) => {
  const stars = []
  for (let i = 0; i < 5; i++) {
    stars.push(
      <span
        key={i}
        className={`text-yellow-400 ${
          i < Math.floor(rating) ? 'fill-current' : 'stroke-current'
        }`}
      >
        ★
      </span>
    )
  }
  return stars
}

export default function SearchProduct() {
  return (
    <div className="w-full">
      <div className="flex justify-between w-full items-start py-4 px-4 mb-9">
        <h1>Hasil pencarian untuk (keyword)</h1>
        <div className="flex items-center space-x-4">
          <select
            name=""
            id=""
            class="block text-base bg-gray-100 cursor-pointer border dark:text-gray-400 dark:bg-gray-900"
          >
            <option value="">Sort by latest</option>
            <option value="">Sort by Popularity</option>
            <option value="">Sort by Price</option>
          </select>
          <div className="flex items-center">
            <p class="text-xs text-gray-400">Show</p>
            <div class="px-2 py-2 text-xs text-gray-500 ">
              <select
                name=""
                id=""
                class="block text-base bg-gray-100 cursor-pointer w-11 dark:text-gray-400 dark:bg-gray-900"
              >
                <option value="">10</option>
                <option value="">11</option>
                <option value="">12</option>
              </select>
            </div>
          </div>
        </div>
        <hr />
      </div>
      <div>
        <div className="w-full ">
          <div class="w-2/12 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <a href="#">
              <Image
                className="rounded"
                src="/images/product_1.png"
                alt="product image"
                width={300}
                height={300}
              />
            </a>
            <div class="flex flex-col">
              <div className="mb-4">
                <Link href="#">
                  <h5 class="text-sm font-semibold tracking-tight text-gray-900 dark:text-white">
                    Cotton Seed
                  </h5>
                  <h1 className="text-lg font-bold text-black">Baju Bayi</h1>
                </Link>
              </div>
              <div class="flex items-center justify-between">
                <span class="text-sm font-bold text-gray-900 dark:text-white">
                  Rp.275.000
                </span>
              </div>
              <div className="flex items-center">
                <div className="mr-1">{renderStars(5)}</div>
                <Typography color="blue-gray" className="font-medium">
                  {5}
                </Typography>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
