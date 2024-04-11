import React from 'react'

const Home = () => {

    const loactions = ["aquamarine", "jasper", "rosaline", "diamond", "nlhc"]

  return (
    
    <div className='w-screen my-5 flex justify-center colums'>

        <div className='w-[60vw] h-[18vh] p-5 bg-black text-white rounded-lg'>
            <form type="submit" className='flex flex-col items-center'>

                <div className='flex justify-center space-x-8 items-center'>

                    <div className='space-x-2'>
                        <label htmlFor="location">Choose the nearest location</label>
                        <select id="location" className='text-gray-800 w-[110px] bg-white border-none rounded-sm py-1 px-2'>
                            <option value="">--select--</option>
                            {loactions.map((location, index) => (
                                <option key={index} value={location}>{location}</option>
                            ))}

                        </select>
                    </div>
                    
                    <div className='space-x-2'>
                        <label htmlFor="pickup">Pickup Time</label>
                        <input id="pickup" type="time" className='text-gray-800 border-none rounded-sm bg-white py-1 px-2'/>
                    </div>

                    <div className='space-x-2'>
                        <label htmlFor="dropoff">Dropping Off Time</label>
                        <input id="dropoff" type="time" className='text-gray-800 border-none rounded-sm bg-white py-1 px-2' />
                    </div>

                </div>

                <button type='submit' className='bg-white text-black px-8 py-2 rounded-md my-6 hover:bg-blue-500 hover:text-white'>
                    Find
                </button>
                
            </form>
        </div>

    </div>

  )
}

export default Home