/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import { AiOutlineDelete } from "react-icons/ai";
import uploadImageToCloudinary from "../../utils/uploadCloudinary";
import { BASE_URL, token } from "../../../config";
import { toast } from "react-toastify";
const Profile = ({ doctorData }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    phone: "",
    bio: "",
    gender: "",
    specialization: "",
    ticketPrice: 0,
    qualifications: [],
    experiences: [],
    timeSlots: [],
    about: "",
    photo: null,
  });

  useEffect(()=>{
    setFormData({
      name: doctorData?.name,
      email: doctorData?.email,
      phone: doctorData?.phone,
      bio: doctorData?.bio,
      gender: doctorData?.gender,
      specialization: doctorData?.specialization,
      ticketPrice: doctorData?.ticketPrice,
      qualifications: doctorData?.qualifications,
      experiences: doctorData?.experiences,
      timeSlots: doctorData?.timeSlots,
      about: doctorData?.about,
      photo: doctorData?.photo,
    })
  }, [doctorData])
  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleFileInputChange = async (event) => {
    const file = event.target.files[0];
    const data = await uploadImageToCloudinary(file);
    console.log(data);
    setFormData({...formData, photo:data?.url})
  };

  const updateProfileHandler = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch(`${BASE_URL}/doctors/${doctorData._id}`, {
        method: "PUT",
        headers: {
          "content-type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(formData),
      });
      const result = await res.json();

      if (!res.ok) {
        throw Error(result.message);
      }
      toast.success(result.message);
    } catch (err) {
      toast.error(err.message);
    }
  };

  //reusable function for adding item
  const addItem = (key, item) => {
    setFormData((prevFormData) => ({
      ...prevFormData,
      [key]: [...prevFormData[key], item],
    }));
  };

  //reusable input change function
  const handleReusableInputChangeFunc = (key, index, event) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => {
      const updateItems = [...prevFormData[key]];
      updateItems[index][name] = value;
      return {
        ...prevFormData,
        [key]: updateItems,
      };
    });
  };

  //reusable function for delete item
  const deleteItem = (key, index) => {
    setFormData((prevFormData) => ({
      ...prevFormData,
      [key]: prevFormData[key].filter((_, i) => i != index),
    }));
  };

  const addQualification = (e) => {
    e.preventDefault();
    addItem("qualifications", {
      startingDate: "",
      endingDate: "",
      degree: "",
      university: "",
    });
  };

  const handleQualificationChange = (event, index) => {
    handleReusableInputChangeFunc("qualifications", index, event);
  };

  const deleteQualification = (e, index) => {
    e.preventDefault();
    deleteItem("qualifications", index);
  };

  const addExperience = (e) => {
    e.preventDefault();
    addItem("experiences", {
      startingDate: "",
      endingDate: "",
      position: "",
      hospital: "",
    });
  };

  const handleExperienceChange = (event, index) => {
    handleReusableInputChangeFunc("experiences", index, event);
  };

  const deleteExperience = (e, index) => {
    e.preventDefault();
    deleteItem("experiences", index);
  };
  const addTimeSlot = (e) => {
    e.preventDefault();
    addItem("timeSlots", {
      day: "Sunday",
      startingDate: "10:00",
      endingDate: "4:30",
    });
  };

  const handleTimeSlotChange = (event, index) => {
    handleReusableInputChangeFunc("timeSlots", index, event);
  };

  const deleteTimeSlot = (e, index) => {
    e.preventDefault();
    deleteItem("timeSlots", index);
  };

  return (
    <div>
      <h2 className="text-headingColor font-bold text-[24px] leading-9 mb-10">
        Profile Infomation
      </h2>

      <form>
        <div className="mb-5">
          <label className="uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
            Name*
          </label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            placeholder="Name"
            className=" form__input w-full border rounded py-3 px-4 mb-3 leading-tight focus:outline-none placeholder-black"
          ></input>
        </div>
        <div className="mb-5">
          <label className="uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
            Email*
          </label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            placeholder="Email"
            readOnly
            aria-readonly
            disabled="true"
            className=" form__input w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white placeholder-black"
          ></input>
        </div>
        <div className="mb-5">
          <label className="uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
            Phone*
          </label>
          <input
            type="number"
            name="phone"
            value={formData.phone}
            onChange={handleInputChange}
            placeholder="Phone number"
            className=" form__input w-full border rounded py-3 px-4 mb-3 leading-tight focus:outline-none placeholder-black"
          ></input>
        </div>
        <div className="mb-5">
          <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
            Bio*
          </label>
          <input
            type="text"
            name="bio"
            value={formData.bio}
            onChange={handleInputChange}
            className=" form__input w-full border rounded py-3 px-4 mb-3 leading-tight focus:outline-none placeholder-black"
            placeholder="Bio"
          ></input>
        </div>
        <div className="mb-5">
          <div className="grid grid-cols-3 gap-5 mb-[30px]">
            <div>
              <label className="uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                Gender*
              </label>
              <select
                name="gender"
                value={formData.gender}
                onChange={handleInputChange}
                className=" form__input w-full border rounded py-3.5 "
              >
                <option value="">Select</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="other">Other</option>
              </select>
            </div>
            <div>
              <label className="uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                Specialization
              </label>
              <select
                name="specialization"
                value={formData.specialization}
                onChange={handleInputChange}
                className=" form__input w-full border rounded py-3.5"
              >
                <option value="">Select</option>
                <option value="surgeon">Surgeon</option>
                <option value="neurologist">Neurologist</option>
                <option value="dermatologist">Dermatologist</option>
              </select>
            </div>
            <div>
              <label className="uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                Ticket Price*
              </label>
              <input
                type="number"
                name="ticketPrice"
                value={formData.ticketPrice}
                onChange={handleInputChange}
                className=" form__input w-full border rounded py-3.5"
                placeholder="100"
              ></input>
            </div>
          </div>
        </div>
        <div className="mb-5">
          <label className="uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
            Qualifications*
          </label>
          {formData.qualifications?.map((item, index) => (
            <div key={index}>
              <div>
                <div className="grid grid-cols-2 gap-5">
                  <div>
                    <label className="uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                      Starting Date*
                    </label>
                    <input
                      type="date"
                      name="startingDate"
                      value={item.startingDate}
                      onChange={(e) => handleQualificationChange(e, index)}
                      className=" form__input w-full border rounded py-3.5"
                    ></input>
                  </div>
                  <div>
                    <label className="uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                      Ending Date*
                    </label>
                    <input
                      type="date"
                      name="endingDate"
                      value={item.endingDate}
                      onChange={(e) => handleQualificationChange(e, index)}
                      className=" form__input w-full border rounded py-3.5"
                    ></input>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-5 mt-5">
                  <div>
                    <label className="uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                      Degree*
                    </label>
                    <input
                      type="text"
                      name="degree"
                      value={item.degree}
                      onChange={(e) => handleQualificationChange(e, index)}
                      className=" form__input w-full border rounded py-3 px-4 mb-3 leading-tight focus:outline-none placeholder-black"
                    ></input>
                  </div>
                  <div>
                    <label className="uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                      University*
                    </label>
                    <input
                      type="text"
                      name="university"
                      value={item.university}
                      onChange={(e) => handleQualificationChange(e, index)}
                      className=" form__input w-full border rounded py-3 px-4 mb-3 leading-tight focus:outline-none placeholder-black"
                    ></input>
                  </div>
                </div>
                <button
                  onClick={(e) => deleteQualification(e, index)}
                  className="bg-red-600 p-2 rounded-full text-white text-[18px] mt-2 mb-[30px]
                cursor-pointer"
                >
                  <AiOutlineDelete></AiOutlineDelete>
                </button>
              </div>
            </div>
          ))}
          <br></br>
          <button
            onClick={addQualification}
            className="bg-[#000] py-2 px-5 rounded text-white h-fit cursor-pointer"
          >
            Add Qualification
          </button>
        </div>
        <div className="mb-5">
          <label className="uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
            Experiences*
          </label>
          {formData.experiences?.map((item, index) => (
            <div key={index}>
              <div>
                <div className="grid grid-cols-2 gap-5">
                  <div>
                    <label className="uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                      Starting Date*
                    </label>
                    <input
                      type="date"
                      name="startingDate"
                      value={item.startingDate}
                      onChange={(e) => handleExperienceChange(e, index)}
                      className=" form__input w-full border rounded py-3.5"
                    ></input>
                  </div>
                  <div>
                    <label className="uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                      Ending Date*
                    </label>
                    <input
                      type="date"
                      name="endingDate"
                      value={item.endingDate}
                      onChange={(e) => handleExperienceChange(e, index)}
                      className=" form__input w-full border rounded py-3.5"
                    ></input>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-5 mt-5">
                  <div>
                    <label className="uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                      Position*
                    </label>
                    <input
                      type="text"
                      name="position"
                      value={item.position}
                      onChange={(e) => handleExperienceChange(e, index)}
                      className=" form__input w-full border rounded py-3 px-4 mb-3 leading-tight focus:outline-none placeholder-black"
                    ></input>
                  </div>
                  <div>
                    <label className="uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                      Hospital*
                    </label>
                    <input
                      type="text"
                      name="hospital"
                      value={item.hospital}
                      onChange={(e) => handleExperienceChange(e, index)}
                      className=" form__input w-full border rounded py-3 px-4 mb-3 leading-tight focus:outline-none placeholder-black"
                    ></input>
                  </div>
                </div>
                <button
                  onClick={(e) => deleteExperience(e, index)}
                  className="bg-red-600 p-2 rounded-full text-white text-[18px] mt-2 mb-[30px]
                cursor-pointer"
                >
                  <AiOutlineDelete></AiOutlineDelete>
                </button>
              </div>
            </div>
          ))}
          <br></br>
          <button
            onClick={addExperience}
            className="bg-[#000] py-2 px-5 rounded text-white h-fit cursor-pointer"
          >
            Add Experience
          </button>
        </div>
        <div className="mb-5">
          <label className="uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
            Time Slots*
          </label>
          {formData.timeSlots?.map((item, index) => (
            <div key={index}>
              <div>
                <div className="grid grid-cols-2 md:grid-cols-4 mb-[30px] gap-5">
                  <div>
                    <label className="uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                      Day*
                    </label>
                    <select
                      name="day"
                      value={item.day}
                      onChange={(e) => handleTimeSlotChange(e, index)}
                      className="form__input w-full border rounded py-3.5"
                    >
                      <option value="">Select</option>
                      <option value="saturday">Saturday</option>
                      <option value="sunday">Sunday</option>
                      <option value="monday">Monday</option>
                      <option value="tuesday">Tuesday</option>
                      <option value="wednesday">Wednesday</option>
                      <option value="thursday">Thursday</option>
                      <option value="friday">Friday</option>
                    </select>
                  </div>
                  <div>
                    <label className="uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                      Starting Time*
                    </label>
                    <input
                      type="time"
                      name="startingTime"
                      value={item.startingTime}
                      onChange={(e) => handleTimeSlotChange(e, index)}
                      className=" form__input w-full border rounded py-3.5"
                    ></input>
                  </div>
                  <div>
                    <label className="uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                      Ending Time*
                    </label>
                    <input
                      type="time"
                      name="endingTime"
                      value={item.endingTime}
                      onChange={(e) => handleTimeSlotChange(e, index)}
                      className=" form__input w-full border rounded py-3.5"
                    ></input>
                  </div>
                  <div className="flex items-center">
                    <button
                      onClick={(e) => deleteTimeSlot(e, index)}
                      className="bg-red-600 p-2 rounded-full text-white text-[18px] mt-6 
                cursor-pointer"
                    >
                      <AiOutlineDelete></AiOutlineDelete>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
          <br></br>
          <button
            onClick={addTimeSlot}
            className="bg-[#000] py-2 px-5 rounded text-white h-fit cursor-pointer"
          >
            Add TimeSlot
          </button>
        </div>
        <div className="mb-5">
          <label className="uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
            About*
          </label>
          <textarea
            name="about"
            id=""
            cols="30"
            rows="5"
            value={formData.about}
            placeholder="Write about you"
            onChange={handleInputChange}
            className=" form__input w-full border rounded py-3 px-4 mb-3 leading-tight focus:outline-none placeholder-black"
          ></textarea>
        </div>
        <div className="mb-5 flex items-center gap-3">
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
                Upload photo
                {/* {selectedFile ? selectedFile.name :"Upload Photo"} */}
              </label>
            </div>
        </div>
        <div className="mt-7">
          <button
            type="submit"
            onClick={updateProfileHandler}
            className="bg-primaryColor text-white text-[18px] leading-[30px] w-full py-3 px-4
          rounded-lg"
          >
            Update Profile
          </button>
        </div>
      </form>
    </div>
  );
};

export default Profile;
