import React from 'react'
import Navbar from '@/components/Navbar'
import Sidebar from '@/components/Sidebar'
import Footer from '@/components/Footer'
import OrderDashboard from '@/components/OrderDashboard'

export default function orderpage() {
  return (
    <>
      <main className="bg-bgSecondary">
        <section>
          <div className="container">
            <Navbar></Navbar>
          </div>
        </section>
        <section>
          <div className="container flex space-x-3 mx-auto pt-48 mb-64">
            <Sidebar />
            <OrderDashboard />
          </div>
        </section>
        <section>
          <Footer />
        </section>
      </main>
    </>
  )
}
