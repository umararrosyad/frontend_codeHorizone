import React from 'react'
import Image from 'next/image'

export default function ImageCategory() {
  return (
    <div className="flex justify-center items-center h-[300px] rounded-lg bg-grape">
      <div className="flex flex-col items-center space-y-2">
        <div className="flex space-x-4">
          <div className="relative">
            <Image
              src="/images/ImageCategory_1.png"
              alt="Bottles"
              width={200}
              height={200}
            />
            <p className="text-center text-lg font-bold pt-2 ">Bottles</p>
          </div>
          <div className="relative">
            <Image
              src="/images/ImageCategory_2.png"
              alt="Nibbler"
              width={200}
              height={200}
            />
            <p className="text-center text-lg font-bold pt-2">Nibbler</p>
          </div>
          <div className="relative">
            <Image
              src="/images/ImageCategory_3.png"
              alt="Feeding Tools"
              width={200}
              height={200}
            />
            <p className="text-center text-lg font-bold pt-2">Feeding Tools</p>
          </div>
          <div className="relative">
            <Image
              src="/images/ImageCategory_4.png"
              alt="Breast Pump"
              width={200}
              height={200}
            />
            <p className="text-center text-lg font-bold pt-2">Breast Pump</p>
          </div>
          <div className="relative">
            <Image
              src="/images/ImageCategory_5.png"
              alt="Sunscreen"
              width={200}
              height={200}
            />
            <p className="text-center text-lg font-bold pt-2">Sunscreen</p>
          </div>
          <div className="relative">
            <Image
              src="/images/ImageCategory_6.png"
              alt="Telon & Oils"
              width={200}
              height={200}
            />
            <p className="text-center text-lg font-bold pt-2">Telon & Oils</p>
          </div>
        </div>
      </div>
    </div>
  )
}
