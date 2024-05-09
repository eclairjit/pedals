import { Outlet } from "react-router-dom";
import SearchContextProvider from "./context/SearchContextProvider";

function App() {
  return (
    <SearchContextProvider>
      <Outlet />
    </SearchContextProvider>
  );
}

export default App;
