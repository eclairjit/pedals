import React from 'react'

const Footer = () => {
  return (
    <footer className='fixed bottom-0 w-screen flex justify-around h-[6vh] bg-black text-white shadow-xl items-center'>
        
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