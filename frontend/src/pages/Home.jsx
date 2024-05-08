import React from "react";
import { useForm } from "react-hook-form";

const Home = () => {
  const { register, handleSubmit } = useForm();

  const timeDiffrence = (startTime, endTime) => {
    const startHour = Number(startTime[0]) * 10 + Number(startTime[1]);
    const startMinute = Number(startTime[3]) * 10 + Number(startTime[4]);
    const endHour = Number(endTime[0]) * 10 + Number(endTime[1]);
    const endMinute = Number(endTime[3]) * 10 + Number(endTime[4]);

    const start = startHour * 60 + startMinute;
    const end = endHour * 60 + endMinute;

    if (start > end) {
      console.log("Invalid time instances entered.");
      return -1;
    }
  };

  const findCycles = (data) => {
    console.log(data.startTime[0]);
  };

  return (
    <div
      className="w-screen h-screen bg-cover bg-center"
      style={{
        backgroundImage: `url(
          "https://images.pexels.com/photos/5930767/pexels-photo-5930767.jpeg"
        )`,
      }}
    >
      <div className="w-full h-full flex justify-center items-center">
        <div className="w-[60vw] h-[60vh] min-w-80 max-w-md min-h-96 bg-gray-200 rounded-md backdrop-filter backdrop-blur bg-opacity-10 ">
          <h1 className="text-white text-5xl w-full text-center p-2 font-semibold mt-5">
            Pedals
          </h1>
          <form
            onSubmit={handleSubmit(findCycles)}
            className="w-full flex flex-col items-center"
          >
            <div className="flex space-x-4 mt-8">
              <div className="mt-2 flex flex-col space-y-1">
                <label htmlFor="startTime" className="text-white">
                  Start Time
                </label>
                <input
                  type="time"
                  id="startTime"
                  className="rounded-md py-1 px-2"
                  min="00:00"
                  max="23:59"
                  step="00:15"
                  {...register("startTime", { required: true })}
                />
              </div>
              <div className="mt-2 flex flex-col space-y-1">
                <label htmlFor="endTime" className="text-white">
                  End Time
                </label>
                <input
                  type="time"
                  id="endTime"
                  className="rounded-md py-1 px-2"
                  min="00:00"
                  max="23:59"
                  {...register("endTime", { required: true })}
                />
              </div>
            </div>
            <div className="mt-6 flex flex-col space-y-1">
              <label htmlFor="landmark" className="text-white">
                Landmark
              </label>
              <select
                name="Select Location"
                id="landmark"
                className="w-[20vw] min-w-72 h-8 rounded-md px-2 pb-1 flex items-center border-none"
                {...register("landmark", { required: true })}
              >
                <option value="">Choose nearest landmark</option>
                <option value="aquamarine">Aquamarine</option>
                <option value="jasper">jasper</option>
                <option value="sapphire">Sapphire</option>
                <option value="topaz">Topaz</option>
                <option value="diamond">Diamond</option>
                <option value="nlhc">NLHC</option>
                <option value="nac">NAC</option>
                <option value="rosaline">Rosaline</option>
                <option value="ruby">Ruby</option>
                <option value="gjlt">GJLT</option>
                <option value="heritage">Heritage Building</option>
                <option value="penman">Penman Auditorium</option>
                <option value="sac">SAC</option>
              </select>
            </div>

            <div className="mt-6 flex flex-col space-y-1">
              <label htmlFor="cycleType" className="text-white">
                Gear/Non-gear?
              </label>
              <select
                id="cycleType"
                className="w-[20vw] min-w-72 h-8 rounded-md px-2 pb-1 flex items-center border-none"
                {...register("cycleType", { required: true })}
              >
                <option value="">Choose option</option>
                <option value="gear">Geared</option>
                <option value="nonGear">Non-geared</option>
                <option value="both">Both</option>
              </select>
            </div>
            <div className="mt-8 w-full flex justify-center">
              <button className="bg-black text-white px-4 py-2 rounded-md w-[20vw] min-w-72 hover:bg-blue-300 hover:text-gray-900 duration-200">
                Find
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Home;
