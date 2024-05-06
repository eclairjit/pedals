import { useState } from "react";
import { Outlet } from "react-router-dom";
import { useDispatch } from "react-redux";

function App() {
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();

  return (
    <>
      <Outlet />
    </>
  );
}

export default App;
