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
import MyAccount from "../pages/MyAccount";
import Contact from "../pages/Contact";

import Dashboard from "../Dashboard/doctor-account/Dashboard";
import { Route, Routes } from "react-router-dom";
import ProtectedRoute from "./ProtectedRoute";
import CheckoutSuccess from "../pages/CheckoutSuccess";

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
      <Route path="/contact" element={<Contact />} />
      <Route path="/reset" element={<ResetPassword />} />
      <Route path="/otp" element={<OTPEmail />} />

      <Route
        path="/users/profile/me"
        element={
          // <ProtectedRoute allowedRoles={["patient"]}>
            <MyAccount />
          //  </ProtectedRoute> 
        }
      />
      <Route
        path="/doctors/profile/me"
        element={
          // <ProtectedRoute allowedRoles={["doctor"]}>
            <Dashboard />
          //  </ProtectedRoute> 
        }
      />
      <Route path="/checkout-success" element={<CheckoutSuccess />} />
    </Routes>
  );
};

export default Routers;
