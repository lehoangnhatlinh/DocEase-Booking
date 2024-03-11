
import ForgottenPassword from "../pages/ForgottenPassword";
import Login from "../pages/Login";
import OTPEmail from "../pages/OTPEmail";
import Profile from "../pages/Profile";
import ResetPassword from "../pages/ResetPassword";
import Signup from "../pages/Signup";

import { Route, Routes } from "react-router-dom";

const Routers = () => {
  return (
    <Routes>
      <Route path="/" />
      <Route path="/login" element={<Login />} />
      <Route path="/forgotpass" element={<ForgottenPassword />} />
      <Route path="/register" element={<Signup />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/reset" element={<ResetPassword/>} />
      <Route path="/otp" element={<OTPEmail/>}/>
    </Routes>
  );
};

export default Routers;
