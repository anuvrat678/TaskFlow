import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { Link } from 'react-router-dom'
import { FaEye, FaEyeSlash } from 'react-icons/fa'
import Authlayout from '../../components/layout/Authlayout'

const Login = () => {
  const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm()
  const [showPassword, setShowPassword] = useState(false)

  const onSubmit = async (data) => {
    console.log("Form Data:", data)
    await new Promise(resolve => setTimeout(resolve, 2500))
  }

  return (
    <Authlayout>
      <div className="bg-gray-900/60 backdrop-blur-lg p-8 rounded-xl shadow-lg w-full max-w-lg mx-auto">
        
        <h2 className="text-3xl font-bold mb-6 text-center">Welcome Back!</h2>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">

          {/* Email */}
          <div>
            <label className="block text-lg font-medium mb-2">Email</label>
            <input
              type="text" 
              placeholder="Enter Your Email"
              className="input w-full"
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                  message: "Enter a valid email address"
                }
              })}
            />
            {errors.email && (
              <p className="text-red-400 text-sm mt-1">{errors.email.message}</p>
            )}
          </div>

          {/* Password */}
          <div>
            <label className="block text-lg font-medium mb-2">Password</label>
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Enter Your Password"
                className="input w-full pr-10"
                {...register("password", {
                  required: "Password is required"
                })}
              />
              <button
                type="button"
                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-white transition"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? (
                  <FaEyeSlash className="text-xl transition-transform duration-300 transform hover:scale-110" />
                ) : (
                  <FaEye className="text-xl transition-transform duration-300 transform hover:scale-110" />
                )}
              </button>
            </div>
            {errors.password && (
              <p className="text-red-400 text-sm mt-1">{errors.password.message}</p>
            )}
          </div>

          {/* Submit */}
          <button 
            type="submit" 
            className="btn-primary w-full flex items-center justify-center"
            disabled={isSubmitting}
          >
            {isSubmitting ? (
              <div className="flex items-center">
                <span className="dot"></span>
                <span className="dot"></span>
                <span className="dot"></span>
              </div>
            ) : (
              "Log In"
            )}
          </button>

        </form>

        {/* Extra Links */}
        <div className="flex justify-between mt-4 text-sm text-gray-400">
          <Link to="#" className="hover:text-white">Forgot Password?</Link>
          <Link to="/signup" className="hover:text-white">Create Account</Link>
        </div>
      </div>
    </Authlayout>
  )
}

export default Login
