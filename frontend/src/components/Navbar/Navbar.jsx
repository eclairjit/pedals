import React from 'react'

const Navbar = () => {
  return (
    <nav className='w-screen flex justify-around min-h-12 h-[7vh] bg-white drop-shadow-lg text-black items-center fixed top-0'>

        <div>
          PEDALS
        </div>

        <div className='space-x-4'>

            <button className='text-white bg-black px-4 py-2 rounded-md hover:bg-blue-600 duration-200'>Register</button>

            <button className='text-white bg-black px-4 py-2 rounded-md hover:bg-blue-600 duration-200'>Login</button>

        </div>

    </nav>
  )
}

export default Navbar