import React from 'react'
import { Navbar } from "../../components"

const Home = () => {

    const loactions = ["aquamarine", "jasper", "rosaline", "diamond", "nlhc"]

  return (

    <div>

        <Navbar />
        
        <div className='w-screen h-screen flex justify-center bg-gradient-to-r from-cyan-300 to-blue-400 pt-[7vh]'>

            <div className='w-[70vw] h-[55vh] max-w-xl min-h-80 p-5 bg-black text-white rounded-lg mt-[20vh]'>

                <h1 className='text-2xl font-bold text-center'>Find the nearest bicycle</h1>

                <form type="submit" className='flex flex-col mt-8 w-full text-gray-300'>

                    <div className='flex flex-col space-y-3'>

                        <div className='flex flex-col space-y-2 mx-5'>
                            <label htmlFor="location">Choose the nearest location</label>
                            <select id="location" className='text-gray-800 bg-white border-none rounded-md py-1 px-2 w-full'>
                                <option value="">--select--</option>
                                {loactions.map((location, index) => (
                                    <option key={index} value={location}>{location}</option>
                                ))}

                            </select>
                        </div>
                        
                        <div className='flex flex-col space-y-2 mx-5'>
                            <label htmlFor="pickup">Pickup Time</label>
                            <input id="pickup" type="time" className='text-gray-800 border-none rounded-md bg-white py-1 px-2'/>
                        </div>

                        <div className='flex flex-col space-y-2 mx-5'>
                            <label htmlFor="dropoff">Dropping Off Time</label>
                            <input id="dropoff" type="time" className='text-gray-800 border-none rounded-md bg-white py-1 px-2' />
                        </div>

                    </div>

                    <button type='submit' className='bg-white text-black px-8 py-2 font-medium rounded-md mt-10 mx-5 hover:bg-blue-600 hover:text-white'>
                        Find
                    </button>
                    
                </form>
            </div>

        </div>

    </div>

  )
}

export default Home