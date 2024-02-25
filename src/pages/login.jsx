import React, { useState, useEffect } from 'react'
import LoginForm from '@/components/LoginForm'
import Image from 'next/image'
import logo from '../../public/images/logo.svg'

export default function Login() {
  return (
    <main>
      <section className="fixed w-full z-10 bg-primary">
        <div className="flex justify-between items-center mx-20">
          <Image src={logo} width={250} height={100} alt="/" />
        </div>
      </section>
      <section className="bg-purple pt-20">
        <div className="container mx-auto">
          <LoginForm />
        </div>
      </section>
    </main>
  )
}
