import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axio from "axios";
import { useForm } from "react-hook-form";

const Profile = () => {
  const { userId } = useParams();
  const { register, handleSubmit } = useForm();

  let userDetails;

  const getUserDetails = async () => {
    userDetails = await axio.get(userId);

    if (!userDetails) {
      console.log("User not found.");
      exit(1);
    }

    console.log(userDetails);
  };

  const toggleCycleStatus = (data) => {
    await;
  };

  const [toggle, setToggle] = useState(false);

  const landmarkDisplay = (toggle) => {
    if (toggle === true) {
      return (
        <form
          className="w-full flex flex-col items-center"
          onSubmit={handleSubmit(toggleCycleStatus)}
        >
          <div className="mt-4 flex flex-col space-y-1">
            <label htmlFor="endTime" className="text-black text-sm">
              Available Till
            </label>
            <input
              type="time"
              id="availableTime"
              className="rounded-md py-1 px-2 bg-gray-200 w-20"
              min="00:00"
              max="23:59"
              {...register("availableTime", { required: true })}
            />
          </div>
          <div className="mt-4">
            <label htmlFor="rentRate" className="text-black text-sm">
              Rent Rate
            </label>
            <input
              type="text"
              id="rentRate"
              className=" w-32 min-w-72 h-8 rounded-md px-2 pb-1 flex items-center border-none bg-gray-200"
              {...register("rentRate", { required: true })}
            />
          </div>
          <div className="mt-4 flex flex-col space-y-1">
            <select
              name="Select Location"
              id="landmark"
              className="w-32 min-w-72 h-8 rounded-md px-2 pb-1 flex items-center border-none bg-gray-200"
              {...register("landmark", { required: true })}
            >
              <option value="">Choose nearest landmark</option>
              <option value="aquamarine">Aquamarine</option>
              <option value="jasper">Jasper</option>
              <option value="nac">NAC</option>
              <option value="rosaline">Rosaline</option>
              <option value="heritage">Heritage Building</option>
              <option value="penman">Penman Auditorium</option>
              <option value="sac">SAC</option>
              <option value="library">Central Library</option>
            </select>
          </div>
          <div className="mt-6">
            <button className="bg-black hover:bg-gray-700 text-white px-3 py-2 rounded">
              Lend
            </button>
          </div>
        </form>
      );
    } else {
      return null;
    }
  };

  useEffect(() => {
    landmarkDisplay(toggle);
  }, [toggle]);

  useEffect(() => {
    getUserDetails();
  }, []);

  return (
    <div className="max-w-4xl flex items-center h-auto lg:h-screen flex-wrap mx-auto my-32 lg:my-0">
      <div
        id="profile"
        className="w-full lg:w-3/5 rounded-lg lg:rounded-l-lg lg:rounded-r-none shadow-2xl bg-white opacity-75 mx-6 lg:mx-0"
      >
        <div className="p-4 md:p-12 text-center lg:text-left">
          <div
            className="block lg:hidden rounded-full shadow-xl mx-auto -mt-16 h-48 w-48 bg-cover bg-center"
            style={{
              backgroundImage: `URL(https://source.unsplash.com/MP0IUfwrn0A)`,
            }}
          ></div>
          <h1 className="text-3xl font-bold pt-8 lg:pt-0">{userId}</h1>
          <div className="mx-auto lg:mx-0 w-4/5 pt-3 border-b-2 border-black opacity-25"></div>
          <p class="pt-4 text-base font-bold flex items-center justify-center lg:justify-start">
            Email: asdasd@gmail.com
          </p>
          <p class="pt-4 text-base font-bold flex items-center justify-center lg:justify-start">
            Phone Number: q2412412412412
          </p>
          <p class="pt-4 text-base font-bold flex items-center justify-center lg:justify-start">
            UPI ID: asdasd@ybl
          </p>
          <div className="pt-2">
            <label className="mt-4 inline-flex items-center cursor-pointer">
              <input
                type="checkbox"
                className="sr-only peer"
                onChange={() => {
                  setToggle((prev) => !prev);
                }}
              />
              <div className="relative w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
            </label>
          </div>
          {landmarkDisplay(toggle)}
        </div>
      </div>

      <div class="w-full lg:w-2/5">
        <img
          src="https://source.unsplash.com/MP0IUfwrn0A"
          className="rounded-none lg:rounded-lg shadow-2xl hidden lg:block"
        />
      </div>
    </div>
  );
};

export default Profile;
