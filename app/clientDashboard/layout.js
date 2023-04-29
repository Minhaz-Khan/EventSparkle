import SideBar from '@/Components/DashboardComponents/SideBar'
import React from 'react'

export default function DashboardLayout({children}) {
  return (
    <>
    <div className='mt-28 grid grid-cols-4'>
        <div className="left-side col-span-1 border-r">
            <SideBar></SideBar>
        </div>
        <div className="right-side">
            {children}
        </div>
    </div>
    </>
  )
}
