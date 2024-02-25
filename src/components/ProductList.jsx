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
export default function ProductList({ products }) {
  console.log(products)
  return (
    <div class="rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
      <a href="#">
        <img
          className="rounded w-[300px] h-[300px]"
          src={products.product_galleries[0].photo_url}
          alt={products.image}
        />
      </a>
      <div class="flex flex-col">
        <div className="mb-4">
          <Link href="#">
            <h1 className="text-lg font-bold text-black">{products.name}</h1>
          </Link>
        </div>
        <div class="flex items-center justify-between">
          <span class="text-sm font-bold text-gray-900 dark:text-white">
            {products.price}
          </span>
        </div>
        <div className="flex items-center">
          <div className="mr-1">{renderStars(products.rating)}</div>
          <Typography color="blue-gray" className="font-medium">
            {products.rating}
          </Typography>
        </div>
      </div>
    </div>
  )
}
