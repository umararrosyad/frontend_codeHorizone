import { Rating } from "@material-tailwind/react";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import { getAllProducts, createProducts, getOneProducts, updateProducts, deleteProducts } from "@/modules/fetch/products";
import { getAllCategories } from "@/modules/fetch/categories";

export default function FilterBar() {
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
    <div className="flex w-1/4 max-w-sm">
      <div className="flex flex-col bg-peach w-full p-4 shadow-xl rounded-md border-2 border-primary shadow-blue-gray-900/5 mb-7">
        <h1 className=" text-lg font-bold">Filter</h1>
        <hr class="h-px bg-primary border-0 mb-3 dark:bg-gray-700" />
        <div className="mb-3">
          <h1 className="text-lg mb-3 font-bold">Category</h1>
          <ul class="flex-column w-full space-y ps-3 space-y-4 text-sm font-medium text-gray-500 dark:text-gray-400 md:me-4 mb-4 md:mb-0">
            {categories?.map((item) => (
              <li>
                <a href="#" class="inline-flex border border-primary items-center px-4 py-3 rounded-lg hover:text-gray-900 bg-gray-50 hover:bg-gray-100 w-full dark:bg-gray-800 dark:hover:bg-gray-700 dark:hover:text-white">
                  {item?.category_name}
                </a>
              </li>
            ))}
            {/* <li>
              <a href="#" class="inline-flex items-center px-4  py-3 text-white bg-primary rounded-lg active w-full dark:bg-blue-600" aria-current="page">
                Kebutuhan Lainnya
              </a>
            </li>
            <li>
              <a href="#" class="inline-flex border border-primary items-center px-4 py-3 rounded-lg hover:text-gray-900 bg-gray-50 hover:bg-gray-100 w-full dark:bg-gray-800 dark:hover:bg-gray-700 dark:hover:text-white">
                Dashboard
              </a>
            </li>
            <li>
              <a href="#" class="inline-flex border border-primary items-center px-4 py-3 rounded-lg hover:text-gray-900 bg-gray-50 hover:bg-gray-100 w-full dark:bg-gray-800 dark:hover:bg-gray-700 dark:hover:text-white">
                Settings
              </a>
            </li>
            <li>
              <a href="#" class="inline-flex border border-primary items-center px-4 py-3 rounded-lg hover:text-gray-900 bg-gray-50 hover:bg-gray-100 w-full dark:bg-gray-800 dark:hover:bg-gray-700 dark:hover:text-white">
                Contact
              </a>
            </li> */}
          </ul>
        </div>
        <div className="mb-3">
          <h1 className="text-lg mb-3 font-bold">Short By</h1>
          <ul class="flex-column space-y w-full ps-3 space-y-4 text-sm font-medium text-gray-500 dark:text-gray-400 md:me-4 mb-4 md:mb-0">
            <li>
              <a href="#" class="inline-flex items-center ps-4 pe-20 py-3 text-white bg-primary rounded-lg active w-full dark:bg-blue-600" aria-current="page">
                Price
              </a>
            </li>
            <li>
              <a href="#" class="inline-flex border border-primary items-center px-4 py-3 rounded-lg hover:text-gray-900 bg-gray-50 hover:bg-gray-100 w-full dark:bg-gray-800 dark:hover:bg-gray-700 dark:hover:text-white">
                Rating
              </a>
            </li>
            <li>
              <a href="#" class="inline-flex border border-primary items-center px-4 py-3 rounded-lg hover:text-gray-900 bg-gray-50 hover:bg-gray-100 w-full dark:bg-gray-800 dark:hover:bg-gray-700 dark:hover:text-white">
                Best Seller
              </a>
            </li>
          </ul>
        </div>
        <div>
          <button className="bg-primary text-white font-bold py-2 px-4 rounded-full mt-4 w-full">Terapkan Filter</button>
        </div>
      </div>
    </div>
  );
}
