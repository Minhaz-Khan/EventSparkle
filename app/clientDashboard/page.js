"use client"
import { usePathname } from 'next/navigation';
import React from 'react'

export default function ClientDashboard() {   
  const pathname = usePathname();
  console.log(pathname)
  return (
    <div>ClientDashboard</div>
  )
}
