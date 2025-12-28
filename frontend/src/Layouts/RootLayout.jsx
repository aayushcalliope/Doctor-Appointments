import React from 'react'
import Navbar from '../components/Navbar';
import { Outlet } from 'react-router-dom';

const RootLayout = () => {
  return (
    <div className='h-screen w-full'>
      <Navbar />
      <Outlet/>     
    </div>
  )
}

export default RootLayout
