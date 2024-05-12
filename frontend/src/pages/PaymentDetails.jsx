import React,{useState} from 'react';
import axios from "axios";
import Razorpay from "razorpay";
import "./Payment.css"

  
const PayApp = () => {
    

  const [orderId, setOrderId] = useState('');
  const [amount, setAmount] = useState(500);
  const handlePayment = async () => {
    try {
      const response = await axios.post('http://localhost:5400/api/v1/payment/checkout',{rent_amount:amount});
      const key=await axios.get("http://localhost:5400/api/v1/gettoken");
      console.log(typeof(key.data));
      console.log("HEYY!");
      const { data } = response;
      setOrderId(data.id);
      const options = {
        key:key.data ,
        amount: 50000, // amount in the smallest currency unit
        currency: 'INR',
        name: 'Your Company Name',
        description: 'Test Transaction',
        order_id: data.id,
        callback_url: "http://localhost:5400/api/v1/payment/paymentverification",
        prefill: {
          name: 'Gaurav Kumar',
          email: 'gaurav.kumar@example.com',
          contact: '9999999999',
        },
        notes: {
          address: 'Razorpay Corporate Office',
        },
        theme: {
          color: '#3399cc',
        },
      };
      
      const rzp1 = new window.Razorpay(options);
      rzp1.open();
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div
      className="w-screen h-screen bg-cover"
      style={{
        backgroundImage: `url(
          "https://images.pexels.com/photos/5930767/pexels-photo-5930767.jpeg"
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
            Your OTP has been verified !
           </h1>
          <div className="w-[30vw] h-[70vh] min-w-80 max-w-l min-h-96 bg-gray-200 rounded-3xl backdrop-filter backdrop-blur bg-opacity-10 ">
          
            
            
            
              <div className="mt-2 flex flex-col space-y-1">
                <label htmlFor="endTime" className="text-white">
                <h2 className="text-white text-5xl w-full text-center p-2 font-semibold mt-5">Order Details </h2>
                </label>
                
              </div>
           
            

            <div className="mt-6 flex flex-col space-y-1">
              <label htmlFor="cycleType" className="text-white">
                <h2 className="text-white text-xl w-full text-center p-2 font-semibold mt-5">Order-ID: ABCDEFGHIJ</h2>
                <h2 className="text-white text-xl w-full text-center p-2 font-semibold mt-5">User_ID: ABCDEFGHIJ</h2>
                <h2 className="text-white text-xl w-full text-center p-2 font-semibold mt-5">Lender_ID: ABCDEFGHIJ</h2>
                <h2 className="text-white text-xl w-full text-center p-2 font-semibold mt-5">Total Amount: ABCDEFGHIJ</h2>
              </label>
              
            </div>
            <div className="mt-8 w-full flex justify-center">
              <button onClick={handlePayment} className="bg-black text-white px-4 py-2 rounded-md w-[20vw] min-w-72 hover:bg-blue-800 duration-150 text-lg">
                Pay Now
              </button>
            </div>
          
        </div>
      </div>
    </div>
  );
  


};

export default PayApp;