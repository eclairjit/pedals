import React, { useEffect, useState } from "react";

import axios from "axios";
import { useForm } from "react-hook-form";
import { useParams,useNavigate, Link } from "react-router-dom";
import { toast, Toaster } from "sonner";

const OtpVerified = () => {
    const navigate = useNavigate();
    const {
      register,
      handleSubmit,
      formState: { errors },
    } = useForm();
  
    const loginUser = async (data) => {
      try {
        const res = await axios.post("/api/v1/verify/Lender/${id}", data);
  
        console.log(res);
  
        if (!res) {
          console.log("Error in verifying OTP ", errors.message);
          toast.error("Couldn't verify OTP", {
            duration: 3000,
            position: "bottom-right",
          });
        }
  
        console.log("OTP Verified Successfully !");
        navigate("/payment");
      } catch (error) {
        console.log("Error in verifying OTP. ", error.message);
        toast.error("Couldn't verify OTP", {
          duration: 3000,
          position: "bottom-right",
        });
      }
    };
return (
    <section className="h-screen w-screen flex justify-center items-center">
      <Toaster richColors position="bottom-right" />
      
        <div className="flex items-center justify-center px-4 py-10 sm:px-6 sm:py-16 lg:px-8 lg:py-24">
          <div className="xl:mx-auto xl:w-full xl:max-w-sm 2xl:max-w-md">
            <h2 className="text-3xl font-bold leading-tight text-black sm:text-4xl">
              Verify Your OTP !
            </h2>
            
            <form className="mt-8" onSubmit={handleSubmit(OtpVerified)}>
              <div className="space-y-5 min-w-80 md:min-w-96">
                <div>
                 
                  <div className="mt-2">
                    <input
                      className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                      type="number"
                      placeholder="Enter Your OTP"
                      id="Otp"
                      {...register("email", {
                        required: true,
                        validate: {
                          matchPattern: (value) =>
                            /^\d{6}$/||
                            "Please enter a Valid OTP.",
                        },
                      })}
                    ></input>
                    {errors.username && (
                      <p className="text-red-700 mt-1 text-sm">
                        Please enter a Valid OTP.
                      </p>
                    )}
                  </div>
                </div>
                
                <div>
                  <button
                    type="submit"
                    className="inline-flex w-full items-center justify-center rounded-md bg-black px-3.5 py-2.5 font-semibold leading-7 text-white hover:bg-black/80"
                  >
                    Get started
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
        
      {/* </div>  */}
    </section>
  );
  };

export default OtpVerified