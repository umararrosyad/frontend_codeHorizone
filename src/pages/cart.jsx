import React from 'react'
import Navbar from '@/components/Navbar'
import CartPage from '@/components/CartPage'
import Footer from '@/components/Footer'

export default function cart() {
  return (
    <>
      <main className="bg-bgSecondary">
        <section>
          <div className="container">
            <Navbar></Navbar>
          </div>
        </section>
        <section>
          <div className="container mx-auto pt-48">
            <CartPage />
          </div>
        </section>
        <section>
          <Footer />
        </section>
      </main>
    </>
  )
}
