import React from "react";
import { useParams } from "react-router-dom";

const Profile = () => {
  const { userId } = useParams();

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

          <h1 className="text-3xl font-bold pt-8 lg:pt-0">Your Name</h1>
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

          <div className="pt-12 pb-8">
            <label className="mt-4 inline-flex items-center cursor-pointer">
              <input type="checkbox" className="sr-only peer" />
              <div className="relative w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
            </label>
          </div>
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
