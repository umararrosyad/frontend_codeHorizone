import React from 'react'
import Navbar from '@/components/Navbar'
import ProfileForm from '@/components/ProfileForm'
import Sidebar from '@/components/Sidebar'
import Footer from '@/components/Footer'

export default function accountpage() {
  return (
    <>
      <main className="bg-bgSecondary">
        <section>
          <div className="container">
            <Navbar></Navbar>
          </div>
        </section>
        <section>
          <div className="container flex space-x-3 mx-auto pt-48 mb-64">
            <Sidebar />
            <ProfileForm />
          </div>
        </section>
        <section>
          <Footer />
        </section>
      </main>
    </>
  )
}
