import React from 'react'
import bg from "../../assets/bg2.avif"


const HeroPage = () => {
  return (
   <div
      className='flex flex-col items-center justify-center w-full h-[70vh] text-white'
      style={{
        backgroundImage: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url(${bg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <h1 className='text-6xl font-bold mb-4'>Welcome to Our Tower</h1>
      <p className='text-lg mb-8'>This is the landing page of our application.</p>
      <div className='flex space-x-4'>
        <button className='px-4 py-2 bg-blue-500 text-white w-2xs h-[50px] rounded hover:bg-blue-600'>Explore</button>
      </div> 
    </div>
  )
}

export default HeroPage
