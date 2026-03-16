
import './App.css'
import MainLayout from './Layouts/MainLayout'
import Navbar from './Components/Navbar'
import Footer from './Components/Footer'
import { Route, Routes } from 'react-router-dom'
import HomePage from './Pages/HomePage'
import BookingLayout from './Layouts/BookingLayout'
import Calender from './Pages/Calender'
import AdminDashboard from './Components/AdminDashboard'
import Register from './Pages/Register'
import Loginform from './Pages/Loginform'
import { ProtectedRoutes } from './Layouts/ProtectedRoutes'
function App() {
  return (
    <>
     <Navbar/>
    <Routes>
    <Route element={<MainLayout />}/>
    <Route index element={<HomePage />} />
    <Route path="/register" element={<Register />} />
    <Route path="/login" element={<Loginform />} />

    <Route path="/appointment"  element={<BookingLayout />}/>
    <Route path="/calendar" element={<Calender/>} />
    <Route path='/admin' element={<ProtectedRoutes><AdminDashboard /></ProtectedRoutes>}/>

    </Routes>
   <Footer/>
      
    </>
  )
}

export default App
