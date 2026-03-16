import React, { useState } from 'react'
import { Calendar1, House, ShieldUser, User, LogOut } from 'lucide-react'
import { Link, useNavigate } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { logout } from '../AuthSlice/AuthSlice'


const Navbar = () => {

  const user = useSelector((state) => state.user.user)
  const dispatch = useDispatch()
  const navigate = useNavigate();

  const [open, setOpen] = useState(false)

  const handleLogout = () => {
    dispatch(logout())
    localStorage.removeItem("user")
    navigate("/login")

  }

  return (
    <div className='fixed top-0 left-0 right-0 z-50'>
      <div className='flex items-center justify-between bg-gray-50 py-3 border-b border-gray-200'>

        {/* Logo */}
        <div className='flex items-center space-x-2 px-4'>
          <img
            src="https://cdn.pixabay.com/photo/2023/10/05/07/38/appointment-8295104_1280.png"
            alt="logo"
            className='w-10 h-10 rounded-full'
          />
          <h1 className='font-bold text-xl text-blue-600'>AppointMe</h1>
        </div>

        {/* Navigation */}
        <div className='hidden md:flex items-center space-x-7 pr-30 px-4'>

          <Link to='/' className='flex items-center space-x-2 text-gray-600 hover:text-black hover:bg-gray-100 p-2 rounded'>
            <House />
            <h1 className='text-lg'>Home</h1>
          </Link>

          <Link to='/appointment' className='flex items-center space-x-2 text-gray-600 hover:text-black hover:bg-gray-100 p-2 rounded'>
            <Calendar1 />
            <h1 className='text-lg'>Book Appointment</h1>
          </Link>

          <Link to='/calendar' className='flex items-center space-x-2 text-gray-600 hover:text-black hover:bg-gray-100 p-2 rounded'>
            <Calendar1 />
            <h1 className='text-lg'>Calendar</h1>
          </Link>

          {/* User Dropdown */}
          {user  && user?.role ==="admin" && (
            <div className="relative">

              <button
                onClick={() => setOpen(!open)}
                className="flex items-center space-x-2 text-gray-600 hover:text-black text-lg font-bold bg-gray-100 px-3 py-2 rounded hover:bg-gray-200"
              >
                <User  />
                <Link to="/admin" className='text-lg'>{user.name}</Link>
              </button>

              {open && (
                <div className="absolute right-0 mt-2 w-40 bg-white border rounded-lg shadow-lg">


                  {/* Logout */}
                  <button
                    onClick={handleLogout}
                    className="flex items-center  w-full text-left px-4 py-2 hover:bg-gray-100 text-red-500"
                  >

                    <LogOut size={18} />
                    <span>Logout</span>
                  </button>

                </div>
              )}

            </div>
          )}

        </div>

      </div>
    </div>
  )
}

export default Navbar