import React from 'react'
import { Outlet } from 'react-router-dom'

const MainLayout = () => {
  return (
    <main className='min-h-screen bg-gray-100 pt-10 pb-20 '>
      <Outlet />
    </main>
  )
}

export default MainLayout
