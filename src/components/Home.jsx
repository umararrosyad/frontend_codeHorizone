import React, { useEffect, useState } from 'react'
import Navbar from '@/components/Navbar'
import CarouselTransition from '@/components/CarouselTransition'
import ProductCard from '@/components/ProductCard'
import ImageCategory from '@/components/ImageCategory'
import Head from 'next/head'
import Footer from '@/components/Footer'
import axios from 'axios'
import ProductList from '@/components/ProductList'

export default function Home() {
  const [products, setProducts] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          'http://localhost:4000/api/v1/products'
        )
        console.log('response', response)
        setProducts(response.data.data)
      } catch (error) {
        console.error('Error fetching data:', error)
      }
    }

    fetchData()
  }, [])
  console.log(products)
  return (
    <>
      <Head>
        <title>Aleesha</title>
      </Head>

      <main>
        <section>
          <div className="container">
            <Navbar />
          </div>
        </section>
        <section>
          <div className="container mx-auto pt-48">
            <CarouselTransition></CarouselTransition>
          </div>
        </section>
        <section className="container mx-auto pt-20">
          <div>
            <ImageCategory></ImageCategory>
          </div>
        </section>
        <h1 className="mx-24 pt-24 text-2xl font-bold">Produk Rekomendasi</h1>
        <section className="container grid grid-cols-6 gap-5 mx-auto pt-20">
          {products.map((products) => (
            <ProductList key={products.id} products={products} />
          ))}
        </section>
        <section>
          <Footer />
        </section>
      </main>
    </>
  )
}
