import React, { useState } from "react";
import ToggleContext from "./ToggleContext.js";

const ToggleContextProvider = ({ children }) => {
  const [toggled, setToggled] = useState(false);
  return (
    <ToggleContext.Provider value={{ toggled, setToggled }}>
      {children}
    </ToggleContext.Provider>
  );
};

export default ToggleContextProvider;
