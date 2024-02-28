import React from "react";
import Image from "next/image";

export default function ImageCategory({ categories }) {
  // console.log(categories.photo_url);
  // console.log(categories);
  return (
    <div class="max-w-full flex flex-col justify-center bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
        <img class="rounded-t-lg" src={categories.photo_url} alt="" />
      <div class=" text-sm py-2 font-bold mx-auto tracking-tight text-gray-900 dark:text-white">{categories.category_name}</div>
    </div>

    // <div className="space-x-4">
    //   <div>
    //     <img
    //       src={categories.photo_url}
    //       alt={categories.category_name}
    //       width={200}
    //       height={200}
    //     />
    //     <p className="text-center text-lg font-bold pt-2 ">
    //       {categories.category_name}
    //     </p>
    //   </div>
    // </div>
  );
}
