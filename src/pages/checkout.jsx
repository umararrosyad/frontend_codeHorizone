import React from 'react'
import Navbar from '@/components/Navbar'
import CheckoutForm from '@/components/CheckoutForm'
import Footer from '@/components/Footer'
export default function checkout() {
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
            <CheckoutForm />
          </div>
        </section>
        <section>
          <Footer />
        </section>
      </main>
    </>
  )
}
