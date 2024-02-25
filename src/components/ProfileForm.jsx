import React from 'react'

import { Radio } from '@material-tailwind/react'
import { Input } from '@material-tailwind/react'
import Link from 'next/link'

export default function Account() {
  return (
    <div className="md:w-4/5 ">
      <div className="bg-white rounded-lg shadow-md p-8">
        <h1 className="text-lg font-bold">Profil Saya</h1>
        <span>
          Kelola informasi profil Anda untuk mengontrol, melindungi dan
          mengamankan akun
        </span>
        <hr className="w-full mb-8" />
        <h1 className="text-sm font-bold">Nama</h1>
        <div className="w-3/5 mb-8">
          <Input label="Nama Lengkap" />
        </div>
        <h1 className="text-sm font-bold">Username</h1>
        <div className="w-3/5 mb-8">
          <Input label="Username" />
        </div>
        <h1 className="text-sm font-bold">Email</h1>
        <div className="w-3/5 mb-8">
          <Input label="email" />
        </div>
        <h1 className="text-sm font-bold">Tanggal Lahir</h1>
        <div className="w-3/5 mb-8">
          <Input label="Tanggal Lahir" />
        </div>
        <h1 className="text-sm font-bold">Nomor Telepon</h1>
        <div className="w-3/5 mb-8">
          <Input label="Nomor Telepon" />
        </div>
        <div className="flex gap-10">
          <Radio name="type" label="Laki-laki" />
          <Radio name="type" label="Perempuan" defaultChecked />
        </div>
        <Link href="/paymentpage">
          <button className="bg-button text-white font-bold py-1 px-20 rounded-lg mt-4 w-3/5">
            Simpan
          </button>
        </Link>
      </div>
    </div>
  )
}
