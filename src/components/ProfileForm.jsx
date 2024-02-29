import { Radio } from "@material-tailwind/react";
import { Input } from "@material-tailwind/react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { getUser, updateUser } from "@/modules/fetch/user";
import { ToastContainer, toast } from "react-toastify";
import React, { useEffect, useState } from "react";

export default function Account({users}) {
  //console.log(users.data);
  const [user, setuser] = useState();

  if (typeof window !== "undefined") {
    var getID = window.localStorage.getItem("user_id");
  }

  const { push } = useRouter();
  async function handleSubmit(event) {
    event.preventDefault();

    const email = event.target.elements.email.value;
    const name = event.target.elements.name.value;
    const telp = event.target.elements.telp.value;
    const username = event.target.elements.username.value;
 
    try {
      const response = await updateUser(id, name, email, username, telp);
      console.log(response);
      toast.success("success created products", {
        position: "bottom-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light"
      });
    } catch (error) {
      toast.error("error create data", {
        position: "bottom-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light"
      });
    }
  }

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        if (typeof window !== "undefined") {
          const storedUserId = localStorage.getItem("user_id");
          if (storedUserId) {
            const response = await getUser(storedUserId);
            //console.log(response.status);
            if (response.status == "error") {
              setuser(null);
            } else {
              //console.log(response.data);
              setuser(response.data);
            }
          }
        }
      } catch (e) {
        console.log(e);
      }
    };
    fetchProducts();
  }, []);
  return (
    <div className="w-full">
      <div className="bg-white border-2 border-primary rounded-lg shadow-md px-8 py-4">
        <h1 className="text-2xl mb-2 font-bold">Profil Saya</h1>
        <hr class="h-px bg-primary border-0 mb-5 dark:bg-gray-700" />
        <form>
          <div className="flex flex-col md:flex-row gap-8">
            <div className="w-full">
              <div className="">
                <label for="small-input" class="block mb-2 text-md font-semibold text-gray-900 dark:text-white">
                  Nama
                </label>
                <input
                  name="name"
                  type="text"
                  id="small-input"
                  placeholder={users.data?.name}
                  class="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-xs focus:ring-blue-500 focus:border-primary dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                />
              </div>
              <div className="mt-2">
                <label for="small-input" class="block mb-2 text-md font-semibold text-gray-900 dark:text-white">
                  Username
                </label>
                <input
                  name="username"
                  type="text"
                  id="small-input"
                  placeholder={users.data?.username}
                  class="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-xs focus:ring-blue-500 focus:border-primary dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                />
              </div>
              <div className="mt-2">
                <label for="small-input" class="block mb-2 text-md font-semibold text-gray-900 dark:text-white">
                  Email
                </label>
                <input
                  name="email"
                  type="text"
                  id="small-input"
                  value={users.data?.email}
                  disabled
                  readonly
                  class="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-xs focus:ring-blue-500 focus:border-primary dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                />
              </div>
              <div className="mt-2">
                <label for="small-input" class="block mb-2 text-md font-semibold text-gray-900 dark:text-white">
                  Phone Number
                </label>
                <input
                  name="telp"
                  type="text"
                  id="small-input"
                  placeholder={users.data?.phone_number}
                  class="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-xs focus:ring-blue-500 focus:border-primary dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                />
              </div>
            </div>
            <div class="border-l border-primary h-auto"></div>
            <div className=" flex flex-col item-center mx-10 ">
              <img class="w-40 h-40 mx-auto rounded-full" src="https://static-00.iconduck.com/assets.00/user-icon-1024x1024-dtzturco.png" alt="Rounded avatar" />
              <input
                class="block w-full my-5 text-xs text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
                id="small_size"
                type="file"
              />
            </div>
          </div>
          <button type="submit" onSubmit={handleSubmit} class="w-full my-8 text-white bg-primary hover:bg-pink-700  font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2">
            UPDATE
          </button>
        </form>
      </div>
      <ToastContainer position="bottom-right" autoClose={5000} hideProgressBar={false} newestOnTop={false} closeOnClick rtl={false} pauseOnFocusLoss draggable pauseOnHover theme="light" />

    </div>
  );
}
