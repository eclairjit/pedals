import React from 'react'
import wheelwayLogo from "../../assets/wheelway-logo.jpeg"

const Navbar = () => {
  return (
    
    <nav className='w-screen flex justify-around min-h-12 h-[6vh] bg-white drop-shadow-lg text-black items-center'>

        <div>
          <img src={wheelwayLogo} alt="WheelWay Logo" className='h-[5vh]'/>
        </div>

        <div className='space-x-2'>

            <button className='text-white bg-black px-2 py-1 rounded-md hover:bg-zinc-200 hover:text-black ho duration-200'>Register</button>

            <button className='text-white bg-black px-2 py-1 rounded-md hover:bg-zinc-200 hover:text-black ho duration-200'>Login</button>

        </div>

    </nav>

  )
}

export default Navbar