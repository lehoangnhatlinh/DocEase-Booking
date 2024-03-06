import React from "react";
import { useContext, useState } from "react";
import { authContext } from "./../context/AuthContext";
import "bootstrap/dist/css/bootstrap.min.css";
import userImg from "../assets/images/hero-img02.png";
import MyBookings from "./MyBookings";
import Profile from "./Profile";
import useGetProfile from "../hooks/useFetchData";
import { BASE_URL } from "../../config";
import Loading from "../components/Loader/Loading";
import Error from "../components/Error/Error";

const MyAccount = () => {
  const { dispatch } = useContext(authContext);
  const [tab, setTab] = useState("bookings");

  const {
    data: userData,
    loading,
    error,
  } = useGetProfile(`${BASE_URL}/users/profile/me`);

  console.log(userData, "userdata");

  const handleLogout = () => {
    dispatch({ type: "LOGOUT" });
  };

  return (
    <div className="max-w-[1170px] px-5 mx-auto">
      {loading && !error && <Loading />}

      {error && !loading && <Error errMessage={error} />}

      {!loading && !error && (
        <div className="row">
          {/* <div className="pd-[50px] px-[30px] rounded-md"> */}
          <div className="col-md-3 p-3 col-12">
            <div className="flex items-center justify-center">
              <figure className="w-[100px] h-[100px] rounded-full border-2 border-solid border-primaryColor">
                <img
                  src={userImg}
                // src={userData.photo}
                  alt=""
                  className="w-full h-full rounded-full m;-1"
                />
              </figure>
            </div>

            <div className="text-center mt-4">
              <h3 className="text-[18px] leading-[30px] text-headingColor font-bold ">
                Bich Lien
                {/* {userData.name} */}
              </h3>
              <p className="text-textColor text-[15px] leading-6 font-medium">
                example@gmail.com
                {/* {userData.email} */}
              </p>
              <p className="text-textColor text-[15px] leading-6 font-medium">
                Blood Type:
                <span className="ml-2 text-headingColor text-[22px] leading-8">
                  o-
                  {/* {userData.bloodType} */}
                </span>
              </p>
            </div>

            {/* <div className="mt-[50px] md:mt-[100px]"> */}
            <div className="">
              <button
                onClick={handleLogout}
                className="w-full bg-[#181A1E] p-3 text-[16px] leading-7 text-white rounded-md mb-2 mt-2"
              >
                Logout
              </button>
              <button className="w-full bg-red-600 p-3 text-[16px] leading-7 rounded-md text-white">
                Delete Account
              </button>
            </div>
          </div>

          <div className="col-md-9 p-3 col-12 ">
            <div className="">
              <button
                onClick={() => setTab("bookings")}
                className={` ${
                  tab === "bookings" && "bg-primaryColor text-white font-normal"
                }
                p-2 px-5 rounded-md text-headingColor font-semibold text-[16px] leading-7 border border-solid border-primaryColor w-[240px]
                  `}
              >
                My Bookings
              </button>
              <button
                onClick={() => setTab("settings")}
                className={`${
                  tab === "settings" && "bg-primaryColor text-white font-normal"
                }
                 py-2 mr-5 px-5 rounded-md text-headingColor font-semibold text-[16px] leading-7 border border-solid border-primaryColor w-[240px]`}
              >
                Profile Settings
              </button>
            </div>
            {tab === "bookings" && <MyBookings />}
            {tab === "settings" && <Profile user={userData} />}
          </div>
        </div>
      )}
    </div>
  );
};

export default MyAccount;
