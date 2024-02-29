"use client";
import Navbar from "@/components/Navbar";
import ProfileForm from "@/components/ProfileForm";
import Sidebar from "@/components/Sidebar";
import SidebarMini from "@/components/SidebarMobile";
import Footer from "@/components/Footer";
import { getUser } from "@/modules/fetch/user";
import React, { useEffect, useState } from "react";

export default function accountpage() {
  
  if (typeof window !== "undefined") {
    var getToken = window.localStorage.getItem("token");
    var getID = window.localStorage.getItem("user_id");
  }

  const [users, setUsers] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const dataUsers = await getUser(getID);
        //console.log("response", dataUsers);
        setUsers(dataUsers.data);
      } catch (error) {
        //console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);
  //console.log(users.data);

  return (
    <>
      <main className="bg-bgSecondary">
        <div>
          <div className="container">
            <Navbar></Navbar>
          </div>
        </div>
        <div>
          <div className="flex  gap-6  mx-5 md:mx-10 pt-28 mb-10">
            <div className="hidden md:block">
              <Sidebar sideLocation={"profil"} />
            </div>
            {/* SidebarMini */}
            <div className="md:hidden">
              <SidebarMini />
            </div>
            {users && <ProfileForm sideLocation={"profil"} users={users}/>}

          </div>
        </div>
        <section>
          <Footer />
        </section>
      </main>
    </>
  );
}
