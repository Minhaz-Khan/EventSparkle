import Footer from '@/Components/shared/Footer'
import Navbar from '@/Components/shared/Navbar'
import React from 'react'

export default function DashboardLayout({children}) {
  return (
    <>
    <Navbar></Navbar>
        {children}
    <Footer></Footer>
    </>
  )
}
