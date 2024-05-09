import React, { useContext } from "react";
import CycleCard from "../components/CycleCard";

const Cycles = () => {
  return (
    <div className="w-screen flex flex-col items-center">
      <CycleCard
        model={"Hero Sprint"}
        rentRate={"20 per hour"}
        landmark={"Aquamarine"}
        owner={"Jit Mitra"}
      />
    </div>
  );
};

export default Cycles;
