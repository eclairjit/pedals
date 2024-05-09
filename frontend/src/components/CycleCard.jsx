import React from "react";

const CycleCard = ({ model, rentRate, landmark, owner }) => {
  return (
    <section className="w-screen flex justify-center my-2">
      <div className="flex md:flex-row w-96 shadow-lg rounded-md bg-white">
        <div>
          <img
            src="https://images.unsplash.com/photo-1559348349-86f1f65817fe?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="cycle-image"
            className="w-40 h-full rounded-r-sm rounded-l-md object-cover"
          />
        </div>
        <div className="my-2 mx-auto">
          <h1>{model}</h1>
          <h2>Rate: {rentRate}</h2>
          <h2>Landmark: {landmark}</h2>
          <h2>Owner: {owner}</h2>
          <div className="mt-2">
            <button className="bg-black text-white py-1 w-full rounded hover:bg-blue-600 duration-200">
              Book
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CycleCard;
