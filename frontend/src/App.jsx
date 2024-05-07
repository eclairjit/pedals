import { useState } from "react";
import { Outlet } from "react-router-dom";

function App() {
  const [loading, setLoading] = useState(true);

  return (
    <>
      <Outlet />
    </>
  );
}

export default App;
