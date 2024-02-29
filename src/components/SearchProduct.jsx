import Image from "next/image";
import Link from "next/link";
import { Typography } from "@material-tailwind/react";

import React, { useEffect, useState } from "react";
import { getAllProducts, createProducts, getOneProducts, updateProducts, deleteProducts } from "@/modules/fetch/products";
import { getAllCategories } from "@/modules/fetch/categories";
import ProductList from "@/components/ProductList";

const renderStars = (rating) => {
  const stars = [];
  for (let i = 0; i < 5; i++) {
    stars.push(
      <span key={i} className={`text-yellow-400 ${i < Math.floor(rating) ? "fill-current" : "stroke-current"}`}>
        ★
      </span>
    );
  }
  return stars;
};

export default function SearchProduct() {
  const [products, setProducts] = useState();
  const [categories, setCategories] = useState();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const dataProducts = await getAllProducts();
        const dataCategories = await getAllCategories();
        console.log("response", dataProducts);
        console.log("response", dataCategories);
        setProducts(dataProducts.data);
        setCategories(dataCategories.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="w-full ">
      <div className="w-full mb-3">
        <div className="flex flex-row justify-between mb-3 border border-gray-50 item-center w-full rounded-lg bg-primary h-auto py-2">
          <h1 className="ps-5 text-gray-50 text-2xl font-bold">Hasil Pencarian</h1>
          <form class="pe-2 flex flex-row">
            <select
              id="show"
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            >
              <option selected>show</option>
              <option value="US">10</option>
              <option value="CA">15</option>
              <option value="FR">20</option>
              <option value="DE">25</option>
            </select>
          </form>
        </div>
      </div>
      <div>
        <div className="w-full ">
          <div className=" grid grid-cols-2 md:grid-cols-4 gap-5">
            {products?.map((products) => (
              <ProductList key={products.id} products={products} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
