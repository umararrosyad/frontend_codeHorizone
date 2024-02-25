import React from 'react'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import SearchProduct from '@/components/SearchProduct'
import FilterBar from '@/components/FilterBar'
import ProductCard from '@/components/ProductCard'

export default function productdetail() {
  return (
    <>
      <main className="bg-white">
        <section>
          <div className="container">
            <Navbar></Navbar>
          </div>
        </section>
        <section>
          <div className="container flex space-x-3 mx-auto pt-48 mb-64">
            <FilterBar />
            <SearchProduct />
          </div>
        </section>
        <section>
          <div className="container flex space-x-3 mx-auto pt-48 mb-64">
            <ProductCard />
          </div>
        </section>
        <section>
          <Footer />
        </section>
      </main>
    </>
  )
}
