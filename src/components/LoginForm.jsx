import { useRouter } from "next/navigation";
import { login } from "@/modules/fetch/user";
import React, { useEffect, useState } from "react";
import Cookies from "js-cookie";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Image from 'next/image'
import Link from 'next/link'

const LoginForm = () => {
  const [showPassword, setShowPassword] = useState(false)

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword)
  }

    useEffect(() => {
    // Mengambil data cookie
    const myCookieValue = Cookies.get("access_token");
    console.log(myCookieValue);
  }, []);
  const { push } = useRouter();
  async function handleSubmit(event) {
    event.preventDefault();

    const email = event.target.elements.email.value;
    const pass = event.target.elements.password.value;

    try {
      console.log(email);
      const response = await login(email, pass);
      console.log(response.data.status);
      if (response.data.status == "error") {
        toast.error("username or passoword wrong", {
          position: "bottom-right",
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light"
        });
      } else {
        localStorage.setItem("token", response.data.data);
      }
      event.target.reset();

      toast.success("success Login", {
        position: "bottom-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light"
      });

      setTimeout(() => {
        push("/");
      }, 2000);
    } catch (error) {
      toast.error("username or passoword wrong", {
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

  return (
    <div className="flex w-full h-90% items-center justify-end px-24 pt-10 z-20 space-x-0">
      <div className="relative flex right-[90px] bottom-0">
        <Image
          src="/images/Mom&babyImage.png"
          alt="/"
          width={403}
          height={629}
          className="left-[300px]"
        />
      </div>

      <form className="relative flex flex-col text-gray-700 bg-white shadow-md w-96 top- rounded-xl bg-clip-border right-[90px]" onSubmit={handleSubmit}>
        <div className="relative grid mx-4 mb-4 -mt-6 overflow-hidden h-28 place-items-center">
          <h3 className="block font-sans text-3xl antialiased font-semibold leading-snug tracking-normal text-black mt-16">
            Login
          </h3>
        </div>
        <div class="flex flex-col gap-4 p-6">
          <h4>Nomor Telepon Atau Email</h4>
          <div class="relative h-11 w-full min-w-[200px]">
            <input
              class="w-full items-center h-full px-3 py-3 font-sans text-sm font-normal transition-all bg-transparent border rounded-md peer border-blue-gray-200 border-t-transparent text-blue-gray-700 outline outline-0 placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-gray-900 focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
              placeholder=" " type="email" id="email" name="email"
            />
            <label class="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none !overflow-visible truncate text-[11px] font-normal leading-tight text-gray-500 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.1] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-gray-900 peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:!border-gray-900 peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:!border-gray-900 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500" >
              Email
            </label>
          </div>
          <h5>Password</h5>
          <div class="relative h-11 w-full min-w-[200px]">
            <input
              type={showPassword ? 'text' : 'password'}
              className="w-full h-full px-3 py-3 font-sans text-sm font-normal transition-all bg-transparent border rounded-md peer border-blue-gray-200 border-t-transparent text-blue-gray-700 outline outline-0 placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-gray-900 focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
              placeholder=" "  id="password" name="password"
            />
            <label className="pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none !overflow-visible truncate text-[11px] font-normal leading-tight text-gray-500 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.1] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-gray-900 peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:!border-gray-900 peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:!border-gray-900 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500" htmlFor="password">
              Password
            </label>
            <button
              className="absolute right-3 top-3 text-gray-500"
              onClick={togglePasswordVisibility}
              type="button"
            >
              {showPassword ? 'Hide' : 'Show'}
            </button>
          </div>
        </div>
        <div class="p-6 pt-16">
          <button
            class="block w-full bg-peach select-none rounded-lg bg-gradient-to-tr from-gray-900 to-gray-800 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-black shadow-md shadow-gray-900/10 transition-all hover:shadow-lg hover:shadow-gray-900/20 active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
            type="submit"
          >
            LOGIN
          </button>
          <p class="flex justify-center mt-6 font-sans text-sm antialiased font-light leading-normal text-inherit">
            Belum punya akun?
            <Link
              href="/register"
              class="block ml-1 font-sans text-sm antialiased font-bold leading-normal text-blue-gray-900"
            >
              Daftar
            </Link>
          </p>
        </div>
      </form>
      <ToastContainer position="bottom-right" autoClose={5000} hideProgressBar={false} newestOnTop={false} closeOnClick rtl={false} pauseOnFocusLoss draggable pauseOnHover theme="light" />
    </div>
  )
}

export default LoginForm
