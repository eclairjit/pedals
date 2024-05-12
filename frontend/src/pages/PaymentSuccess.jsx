import { Box, Heading, Text, VStack } from '@chakra-ui/react'
import React from 'react'
import { useSearchParams } from "react-router-dom"
import "./Payment.css"
const PaymentSuccess = () => {

    const seachQuery = useSearchParams()[0]

    const referenceNum = seachQuery.get("reference")
    return (
        <div
      className="w-screen h-screen bg-cover"
      style={{
        backgroundImage: `url(
          "https://img.freepik.com/free-photo/abstract-textured-backgound_1258-30465.jpg?t=st=1715484808~exp=1715488408~hmac=4ed8a0787e8bd98e246eeccf5b294ff3d9f61e786ff3310bd21b264ea112b0fd&w=1060"
        )`,
      }}
    >
    <div className="fixed top-0 left-0">
    <img
      src="https://res.cloudinary.com/duw3t9z7l/image/upload/v1715384585/myhxo04d1lpryane9fvn.jpg"
      alt="pedals-logo"
      className="h-20 md:h-16 ml-2 mt-2"
    />
  </div>
  <div className="w-full h-full flex flex-col justify-center items-center">
        
          <h1 className="typing-demo text-white text-5xl w-full text-center p-2 font-semibold mt-5 ">
            Thanks for riding with us!
           </h1>
           <h5 className="text-white text-xl w-full text-center p-2 font-semibold mt-5">Keep Pedalling :)</h5></div></div>
    )
}

export default PaymentSuccess;