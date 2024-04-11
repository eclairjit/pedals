import React from 'react'

const Navbar = () => {
  return (
    
    <nav className='w-screen flex justify-around h-[6vh] bg-white drop-shadow-lg text-black items-center'>

        <div>Logo</div>

        <div className='space-x-2'>

            <button className='text-white bg-black px-2 py-1 rounded-md hover:bg-zinc-200 hover:text-black ho duration-200'>Register</button>

            <button className='text-white bg-black px-2 py-1 rounded-md hover:bg-zinc-200 hover:text-black ho duration-200'>Login</button>

        </div>

    </nav>

  )
}

export default Navbar