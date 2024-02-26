import React from 'react'
import Image from 'next/image'

export default function ImageCategory({ categories }) {
  // console.log(categories.photo_url);
  // console.log(categories);
  return (
    <div className="space-x-4">
      <div>
        <img
          src={categories.photo_url}
          alt={categories.category_name}
          width={200}
          height={200}
        />
        <p className="text-center text-lg font-bold pt-2 ">
          {categories.category_name}
        </p>
      </div>
    </div>
  )
}
