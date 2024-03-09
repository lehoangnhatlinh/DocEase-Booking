import AboutUs from "../pages/Aboutus";
import DoctorDetails from "../pages/Doctors/DoctorDetails";
import Doctors from "../pages/Doctors/Doctors";
import ForgottenPassword from "../pages/ForgottenPassword";
import Home from "../pages/Home";
import Login from "../pages/Login";
import OTPEmail from "../pages/OTPEmail";
import Profile from "../pages/Profile";
import ResetPassword from "../pages/ResetPassword";
import Services from "../pages/Services";
import Signup from "../pages/Signup";
import MyAccount from "../pages/MyAccount"
import Contact from "../pages/Contact"

import { Route, Routes } from "react-router-dom";

const Routers = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/home" element={<Home />} />
      <Route path="/doctors" element={<Doctors />} />
      <Route path="/doctors/:id" element={<DoctorDetails />} />
      <Route path="/login" element={<Login />} />
      <Route path="/forgotpass" element={<ForgottenPassword />} />
      <Route path="/register" element={<Signup />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/aboutus" element={<AboutUs />} />
      <Route path="/services" element={<Services />} />
      <Route path="/contact" element={<Contact/>}/>
      <Route path="/reset" element={<ResetPassword/>} />
      <Route path="/otp" element={<OTPEmail/>}/>
      <Route path="/users/profile/me" element={<MyAccount />} />
    </Routes>
  );
};

export default Routers;
