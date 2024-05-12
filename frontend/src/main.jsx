import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import {
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import {
  Register,
  Login,
  Home,
  Cycles,
  Profile,
  CycleLenderDetails,
  PayApp,
  PaymentSuccess,
  OtpVerified,
} from "./pages";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route path="" element={<Register />} />
      <Route path="login" element={<Login />} />
      <Route path="home" element={<Home />} />
      <Route path="cycles" element={<Cycles />} />
      <Route path="cycle/:cycleId" element={<CycleLenderDetails />} />
      <Route path="user/:userId" element={<Profile />} />
      <Route path="payment" element={<PayApp />} />
      <Route path="paymentSuccess" element={<PaymentSuccess />} />
      <Route path="verification" element={<OtpVerified />} />

    </Route>
  )
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
