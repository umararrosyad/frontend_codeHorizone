import React, { useEffect, useState } from 'react'
import Navbar from '@/components/Navbar'
import CarouselTransition from '@/components/CarouselTransition'
import ProductCard from '@/components/ProductCard'
import {
  getAllProducts,
  createProducts,
  getOneProducts,
  updateProducts,
  deleteProducts,
} from '@/modules/fetch/products'
import { getAllCategories } from '@/modules/fetch/categories'
import ImageCategory from '@/components/ImageCategory'
import Head from 'next/head'
import Footer from '@/components/Footer'
import axios from 'axios'
import ProductList from '@/components/ProductList'

export default function Home() {
  const [products, setProducts] = useState([])
  const [categories, setCategories] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      try {
        const dataProducts = await getAllProducts()
        const dataCategories = await getAllCategories()
        console.log('response', dataProducts)
        console.log('response', dataCategories)
        setProducts(dataProducts.data)
        setCategories(dataCategories.data)
      } catch (error) {
        console.error('Error fetching data:', error)
      }
    }

    fetchData()
  }, [])
  console.log(products)
  console.log(categories)
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
          <div className="container mx-auto pt-48 mb-10">
            <CarouselTransition></CarouselTransition>
          </div>
        </section>
        <section className="container bg-grape mx-auto rounded-md">
          <div className="grid grid-cols-6 p-5">
            {categories.map((categories) => (
              <ImageCategory key={categories.id} categories={categories} />
            ))}
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
