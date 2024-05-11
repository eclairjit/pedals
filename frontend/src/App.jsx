import { Outlet } from "react-router-dom";
import SearchContextProvider from "./context/SearchContextProvider";
import ToggleContextProvider from "./context/ToggleContextProvider";

function App() {
  return (
    <>
      <Outlet />
    </>
  );
}

export default App;
