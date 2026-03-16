import { Link, useNavigate } from 'react-router-dom'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { useUser } from '../Hookes/UserHooks'
import { login } from '../AuthSlice/AuthSlice'

const Loginform = () => {
   const {loginUser} = useUser();
    const [formData,setFormData] = useState({
        email:"",
        password:""
    })
    const dispatch=useDispatch();
    const navigate=useNavigate();
    const handleChange=(e)=>{
        setFormData({...formData,[e.target.name]:e.target.value})
    }

      const handleSubmit=async(e)=>{
          e.preventDefault();
         if(!formData.email || !formData.password){
             return alert("Please Enter All Fields")
         }
          const userdata={email:formData.email,password:formData.password}
          const res=await loginUser(userdata);
          if(res){
            const userData=res?.data;
            dispatch(login(userData))
            localStorage.setItem("user",JSON.stringify(userData)) 
            if(userData?.role==="admin"){
              navigate("/admin")
            }
            else{
              navigate("/appointment")
            }
            
          }
      }
  return (
   <div className="min-h-screen flex items-center justify-center bg-gray-100 p-10 mt-10">
      
      <div className="bg-white shadow-2xl rounded-2xl overflow-hidden max-w-4xl w-full grid grid-cols-1 md:grid-cols-2">
    
        <div className="hidden md:block">
          <img
            src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f"
            alt="login"
            className="h-full w-full object-cover"
          />
        </div>

        {/* Form Section */}
        <div className="p-10 flex flex-col justify-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-2">
            Welcome Back
          </h2>

          <p className="text-gray-500 mb-8">
            Login to your account 🔐
          </p>

          <form onSubmit={handleSubmit} className="space-y-5">

            {/* Email */}
            <div>
              <label className="block text-sm font-medium text-gray-600 mb-1">
                Email
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Enter your email"
                className="w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            {/* Password */}
            <div>
              <label className="block text-sm font-medium text-gray-600 mb-1">
                Password
              </label>
              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                placeholder="Enter your password"
                className="w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            {/* Forgot Password */}
            <div className="flex justify-end text-sm">
              <span className="text-blue-600 cursor-pointer hover:underline">
                Forgot password?
              </span>
            </div>

            {/* Button */}
            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-2 rounded-lg font-semibold hover:bg-blue-700 transition"
            >
              Login
            </button>

          </form>

          {/* Register Link */}
          <Link to="/register" className="text-sm text-gray-500 mt-6 text-center">
            Don't have an account?{" "}
            <span className="text-blue-600 cursor-pointer hover:underline">
              Register
            </span>
          </Link>

        </div>

      </div>
    </div>
  )
}

export default Loginform
