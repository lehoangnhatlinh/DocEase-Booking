/* eslint-disable react/prop-types */
import React, { useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import avatar from "../assets/images/avatar-icon.png";
import { useNavigate } from "react-router-dom";
// import signupImg from "../assets/images/signup01.png";
import { useState } from "react";
import uploadImageToCloudinary from "../utils/uploadCloudinary";
import { BASE_URL, token } from "../../config";
import { toast } from "react-toastify";
import HashLoader from "react-spinners/HashLoader";

const Profile = ({ user }) => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [loading, setLoading] = useState(false);

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    photo: null,
    password: "",
    gender: "",
    bloodType: "",
  });
  const navigate = useNavigate();

  useEffect(() => {
    setFormData({
      name: user.name,
      email: user.email,
      photo: user.photo,
      gender: user.gender,
      bloodType: user.bloodType,
    });
  }, [user]);

  const handleInputChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };
  const handleFileInputChange = async (event) => {
    const file = event.target.files[0];

    const data = await uploadImageToCloudinary(file);

    setSelectedFile(data.url);
    setFormData({ ...formData, photo: data.url });
  };
  const submitHandler = async (event) => {
    event.preventDefault(); // Fix the typo here
    setLoading(true);

    try {
        const res = await fetch(`${BASE_URL}/users/${user._id}`, {
            method: "put",
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${token}`,
            },
            body: JSON.stringify(formData),
        });

        const { message } = await res.json();

        if (!res.ok) {
            throw new Error(message);
        }

        setLoading(false);
        toast.success(message);
        navigate("/users/profile/me");

    } catch (err) {
        toast.error(err.message);
        setLoading(false);
    }
};
  return (
    <div className="mt-10">
      <form className="py-4 md:py-8" onSubmit={submitHandler}>
        <div className="mb-4">
          <input
            type="text"
            placeholder="Full Name"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            className="w-full border-b border-solid border-slate-300 px-3 py-3 md:ml-5
                  focus:outline-none focus:border-b-primaryColor text-[18px] leading-7 text-headingColor
                  placeholder:text-textColor rounded-md cursor-pointer"
            required
          />
        </div>

        <div className="mb-4">
          <input
            type="email"
            placeholder="Enter your email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            className="w-full border-b border-solid border-slate-300 px-3 py-3  md:ml-5 
                  focus:outline-none focus:border-b-primaryColor text-[18px] leading-7 text-headingColor
                placeholder:text-textColor rounded-md cursor-pointer"
            // required
            aria-readonly
            readOnly
          />
        </div>

        <div className="mb-4">
          <input
            type="password"
            placeholder="Password"
            name="password"
            value={formData.password}
            onChange={handleInputChange}
            className="w-full border-b border-solid border-slate-300 px-3 py-3 md:ml-5 
                  focus:outline-none focus:border-b-primaryColor text-[18px] leading-7 text-headingColor
                placeholder:text-textColor rounded-md cursor-pointer"
            
          />
        </div>

        <div className="mb-4">
          <input
            type="text"
            placeholder="Blood Type"
            name="bloodType"
            value={formData.bloodType}
            onChange={handleInputChange}
            className="w-full border-b border-solid border-slate-300 px-3 py-3 md:ml-5 
                  focus:outline-none focus:border-b-primaryColor text-[18px] leading-7 text-headingColor
                placeholder:text-textColor rounded-md cursor-pointer"
          />
        </div>

        <div className="flex justify-between items-center">
          <div className="mb-4 flex items-center gap-2">
            {formData.photo && (
              <figure
                className="w-[60px] h-[60px] rounded-full border-2 border-solid border-primaryColor 
                    flex items-center justify-center md:ml-5"
              >
                <img
                  src={formData.photo}
                  alt=""
                  className="w-full rounded-full w-[60px] h-[60px]"
                />
              </figure>
            )}

            <div className="relative w-[130px] h-[50px]">
              <input
                type="file"
                name="photo"
                id="customFile"
                onChange={handleFileInputChange}
                accept=".jpg, .png"
                className="absolute top-0 left-0 w-full h-full opacity-0 cursor-pointer"
              />

              <label
                htmlFor="customFile"
                className="absolute top-0 left-0 w-full h-full flex items-center px-3 py-[0.375rem] text-[16px] leading-6 
                    overflow-hidden bg-[#0066ff46] text-headingColor font-semibold rounded-lg truncate cursor-pointer"
              >
                {/* Upload photo */}
                {selectedFile ? selectedFile.name :"Upload Photo"}
              </label>
            </div>
          </div>

          <div className="mt-[-20px]">
            <label className="text-headingColor font-bold text-[16px] leading-7">
              Gender:
              <select
                name="gender"
                className="text-textColor font-semibold text-[15px] leading-7 px-3 py-3 focus:outline-none"
                value={formData.gender}
                onChange={handleInputChange}
              >
<<<<<<< Updated upstream
=======
                <option value="">Select</option>
>>>>>>> Stashed changes
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="other">Other</option>
              </select>
            </label>
          </div>
        </div>

        <div className="mt-7">
          <button
            type="submit"
            className="py-[10px] px-4 w-full bg-primaryColor text-white leading-[30px] text-[18px] rounded-lg md:ml-5 ms:ml-5"
          >
            {loading ? <HashLoader size={25} color="#ffffff" /> : "Update"}
          </button>
        </div>
      </form>
    </div>
  );
};

export default Profile;
