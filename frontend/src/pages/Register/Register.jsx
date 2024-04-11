import React from 'react'

const Register = () => {
  return (
    <div className='h-screen w-screen flex justify-center items-center'>

      <div className='h-[40vh] w-[80vw] max-w-96 min-h-80 bg-white rounded-md'>

        <h1 className='px-4 py-5 text-3xl font-bold'>Register</h1>

        <form className='flex flex-col'>

          <input type="text" placeholder='email address' className='p-2 border border-zinc-500 mx-3 rounded-md my-4'/>
          
          <input type="text" placeholder='password' className='p-2 border border-zinc-500 mx-3 rounded-md'/>

          <button type='submit' className='bg-black text-white my-4 p-3 mx-5 rounded-lg hover:bg-blue-700 duration-200'>
            Register
          </button>

        </form>

        <div className='w-full flex justify-center space-x-2'>
          <p className='text-gray-600'>Already have an account?</p>
          <button className='text-black font-medium hover:text-blue-700'>
            Login
          </button>

        </div>

      </div>

    </div>
  )
}

export default Register