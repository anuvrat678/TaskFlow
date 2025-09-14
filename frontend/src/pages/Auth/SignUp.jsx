import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { Link } from 'react-router-dom'
import { FaEye, FaEyeSlash } from 'react-icons/fa'
import Authlayout from '../../components/layout/Authlayout'

const Signup = () => {
  const { register, handleSubmit, watch, formState: { errors, isSubmitting } } = useForm()
  const [showPassword, setShowPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)

  const onSubmit = async (data) => {
    console.log("Signup Data:", data)
    await new Promise(resolve => setTimeout(resolve, 2500))
  }

  return (
    <Authlayout>
      <div className="bg-gray-900/60 backdrop-blur-lg p-8 rounded-xl shadow-lg w-full max-w-lg mx-auto">
        
        <h2 className="text-3xl font-bold mb-6 text-center">Create Account</h2>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">

          {/* Name */}
          <div>
            <label className="block text-lg font-medium mb-2">Name</label>
            <input
              type="text"
              placeholder="Enter Your Name"
              className="input w-full"
              {...register("name", { required: "Name is required" })}
            />
            {errors.name && (
              <p className="text-red-400 text-sm mt-1">{errors.name.message}</p>
            )}
          </div>

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
                {...register("password", { required: "Password is required" })}
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

          {/* Confirm Password */}
          <div>
            <label className="block text-lg font-medium mb-2">Confirm Password</label>
            <div className="relative">
              <input
                type={showConfirmPassword ? "text" : "password"}
                placeholder="Confirm Your Password"
                className="input w-full pr-10"
                {...register("confirmPassword", {
                  required: "Confirm Password is required",
                  validate: (value) =>
                    value === watch("password") || "Passwords do not match"
                })}
              />
              <button
                type="button"
                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-white transition"
                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
              >
                {showConfirmPassword ? (
                  <FaEyeSlash className="text-xl transition-transform duration-300 transform hover:scale-110" />
                ) : (
                  <FaEye className="text-xl transition-transform duration-300 transform hover:scale-110" />
                )}
              </button>
            </div>
            {errors.confirmPassword && (
              <p className="text-red-400 text-sm mt-1">{errors.confirmPassword.message}</p>
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
              "Sign Up"
            )}
          </button>

        </form>

        {/* Extra Links */}
        <div className="text-sm text-center text-gray-400 mt-4">
          Already have an account?{" "}
          <Link to="/" className="hover:text-white font-medium">Log In</Link>
        </div>
      </div>
    </Authlayout>
  )
}

export default Signup
