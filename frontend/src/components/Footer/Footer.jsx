import React from 'react'

const Footer = () => {
  return (
    <footer className='w-screen flex justify-around h-[7vh] min-h-14 bg-black text-white shadow-xl items-center'>
        
        <div>Logo</div>

        <div>
            <ul className='flex gap-4'>
                <li>Home</li>
                <li>About</li>
                <li>Contact</li>
            </ul>
        </div>

    </footer>
  )
}

export default Footer