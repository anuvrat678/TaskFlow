import React from 'react'
import img from '../../assets/images/authpage.png'

const Authlayout = ({ children }) => {
  return (
    <div className="relative flex flex-col lg:flex-row min-h-screen bg-[#17191b] text-white">

      {/* Background image for small screens */}
      <img 
        src={img} 
        alt="Task Flow" 
        className="object-cover absolute inset-0 h-full w-full blur-sm lg:hidden" 
      />

      {/* Left Content */}
      <div className="flex flex-col justify-center items-center w-full lg:w-1/2 px-6 lg:px-12 relative z-10">
        <h1 className="text-4xl lg:text-5xl font-bold text-center lg:text-left text-blue-500 mb-8">
          Task Flow
        </h1>
        <div className="w-full flex justify-center lg:justify-start">
          {children}
        </div>
      </div>

      {/* Right side image for large screens */}
      <div className="hidden lg:block w-1/2 h-screen overflow-hidden">
        <img 
          src={img} 
          alt="Task Flow" 
          className="object-cover object-top-left h-full w-full" 
        />
      </div>
    </div>
  )
}

export default Authlayout
