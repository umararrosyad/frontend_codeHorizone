import React, { useState, useEffect } from "react";
import LoginForm from "@/components/LoginForm";
import Image from "next/image";
import logo from "../../public/images/logo.svg";

export default function Login() {
  return (
    <main className="bg-white p-5 flex justify-center items-center h-screen">
      <div className="w-full h-full rounded-xl bg-primary flex justify-center items-center">
        <div className="w-full flex flex-col gap-5 justify-center ">
          <Image className="w-md mx-auto item h-auto" src={logo} alt="/" />
          <LoginForm />
        </div>
      </div>
    </main>
  );
}
