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
    <Link href={`/product/detail/${products.id}`}>
      <div className="rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
          <img
            className="rounded w-[200] h-[200]"
            src={
              products.product_galleries &&
              products.product_galleries[0] &&
              products.product_galleries[0].photo_url
            }
            alt={products.image}
          />
        <div className="flex flex-col">
          <div className="mb-4">
              <h1 className="text-lg font-bold text-black">{products.name}</h1>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-sm font-bold text-gray-900 dark:text-white">
              {' '}
              Rp.
              {products.product_variants && products.product_variants.length > 0
                ? products.product_variants[0].price
                : 'N/A'}
            </span>
          </div>
          <div className="flex items-center">
            <div className="mr-1">
              {renderStars(
                products.product_variants &&
                  products.product_variants.length > 0
                  ? products.product_variants[0].feedbacks &&
                    products.product_variants[0].feedbacks.length > 0
                    ? products.product_variants[0].feedbacks[0].rating
                    : 0
                  : 0
              )}
            </div>
            <Typography color="blue-gray" className="font-medium">
              {products.product_variants && products.product_variants.length > 0
                ? products.product_variants[0].feedbacks &&
                  products.product_variants[0].feedbacks.length > 0
                  ? products.product_variants[0].feedbacks[0].rating
                  : 'N/A'
                : 'N/A'}
            </Typography>
          </div>
        </div>
      </div>
    </Link>
    // <p>asdasdsad</p>
  )
}
