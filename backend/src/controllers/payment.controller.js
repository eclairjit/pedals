import { instance } from "../index.js";
import crypto from "crypto";
import { asyncHandler } from "../utils/asyncHandler.js";
import { UserPayment } from "../models/userPayment.model.js";
import axios from "axios";
import Razorpay from "razorpay";
const checkout = asyncHandler(async (req, res) => {
  try{
  const { rent_amount } = req.body;
  const options = {
    amount: rent_amount * 100, //in rupees
    currency: "INR",
  };
  const order = await instance.orders.create(options);
  if(order){
  res.status(200).send(order);}
  
else{
  res.status(402).json({
    success:false,
    message:"BAD ALLOC"
  })
}}
  catch{
    res.status(400).json({
      success:false,
    })
  }
});

const paymentVerification = asyncHandler(async (req, res) => {
  //to verify order
  try{
  console.log(req.body);
  const { razorpay_order_id, razorpay_payment_id, razorpay_signature } = req.body;
  console.log("order_id",razorpay_order_id);
  console.log("signature",razorpay_signature);
  const body = razorpay_order_id + "|" + razorpay_payment_id;
  console.log("HEYY");
  console.log(typeof(process.env.RAZORPAY_ID_SECRET))
  const expected_signature = crypto
    .createHmac("sha256", process.env.RAZORPAY_ID_SECRET)
    .update(body.toString())
    .digest("hex");
  console.log("SIG received", razorpay_signature);
  console.log("SIG received", expected_signature);
  const success = expected_signature == razorpay_signature;
  if (success) {
    await UserPayment.create({
      razorpay_order_id,
       razorpay_payment_id,
      razorpay_signature,
    });
    console.log("PASSED");
    // await transferToUPI();
    // res.status(200).send(razorpay_payment_id);
    const response = await fetch('http://localhost:5400/api/v1/payment/transferSuccess', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ payment_id: razorpay_payment_id }),
    });
    console.log("PASSED1");
    const data = await response.json();
    if(response){
      res.redirect(`http://localhost:5173/paymentSuccess`)
    }
  } else {
    res.status(400).json({
      passed: false,
      
    });
  }}
  catch(err){
    console.error(err);
    res.status(500).json({
      success: false,
      message: "Not working.",
    });
  }
});

const transferToUPI = asyncHandler(async (req, res) => {
  try {
    var instance = new Razorpay({ key_id: process.env.RAZORPAY_ID_KEY, key_secret: RAZORPAY_ID_SECRET })
    const{payment_id}=req.body;
    console.log("payment",payment_id);
const response=instance.payments.refund(payment_id,{
  "amount": "100",
  "speed": "optimum",
  "notes": {
    "notes_key_1": "Beam me up Scotty.",
    "notes_key_2": "Engage"
  },
  "receipt": "Receipt No. 31"
})
    console.log("response",response);
    if(response){
    res.status(200).json({
      success: true,
      message: "Payment refunded successfully.",
    });}
    else{
      res.status(400).json({
        success:false,
        message:"Payment ID not found!",
      })
    }
  } catch (err) {
    
    res.status(500).json({
      success: false,
      message:"Transfer to UPI Failed.",
    });
  }
});




export { checkout, paymentVerification,transferToUPI };
