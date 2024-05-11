import React from "react";
import { Link } from "react-router-dom";

const CycleCard = ({ model, rentRate, landmark, owner }) => {
  return (
    <section className="flex justify-center my-2">
      <div className="flex-col w-64 shadow-xl rounded-md bg-white">
        <div>
          <img
            src="https://images.unsplash.com/photo-1559348349-86f1f65817fe?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="cycle-image"
            className="w-full h-full rounded-t-md object-cover"
          />
        </div>
        <div className="my-2 mx-3">
          <h1 className="w-full flex justify-center my-2 font-bold">{model}</h1>
          <h2 className="w-full flex justify-center">Rate: {rentRate}</h2>
          <h2 className="w-full flex justify-center">Landmark: {landmark}</h2>
          <h2 className="w-full flex justify-center">Owner: {owner}</h2>
          <div className="w-full flex justify-center my-3">
            <Link className="bg-black text-white py-1 px-2 w-14 text-center rounded hover:bg-blue-600 duration-200">
              Book
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CycleCard;
