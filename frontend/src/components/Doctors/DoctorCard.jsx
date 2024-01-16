import React from "react";
import startIcon from "../../assets/images/Star.png";
import { BsArrowRight } from "react-icons/bs";
import { Link } from "react-router-dom";

const DoctorCard = ({ doctor }) => {
  const {
    name,
    photo,
    avgRating,
    specialty,
    totalRating,
    totalPatients,
    hospital,
  } = doctor;
  return (
    <div className="p-3 lg:p-5">
      <div className="w-full lg:w-[90%]">
        <img className="w-full" src={photo} alt="" />
        <h2 className="text-[18px] lg:text-[26px] leading-[30px] lg:leading-9 font-[700] text-headingColor mt-3 lg:mt-5">
          {name}
        </h2>
        <div className="mt-2 lg:mt-4 flex items-center justify-between">
          <span
            className="bg-[#CCF0F3] text-irisBlueColor py-2 px-3 lg:px-6 lg:py-2 text-[12px] 
                leading-4 lg:text-[16px] lg:leading-7 font-semibold rounded"
          >
            {specialty}
          </span>
          <div className="flex items-center gap-2">
            <span className="flex items-center gap-1 text-[14px] lg:text-[16px] leading-6 lg:leading-7 font-semibold text-headingColor">
              <img className="w-[18px]" src={startIcon} />
              {avgRating}
            </span>
            <p className="text-[14px] lg:text-[16px] leading-6 lg:leading-7 font-semibold text-headingColor">
              ({totalRating})
            </p>
          </div>
        </div>

        <div className="flex justify-between items-center mt-4 lg:mt-5">
          <div>
            <h3 className="text-[16px] leading-7 lg:text-[18px] lg:leading-[30px] font-semibold text-headingColor">
              +{totalPatients}
            </h3>
            <p className="text-[14px] leading-6 font-[400] text-textColor">
              {hospital}
            </p>
          </div>

          <Link
            to="/doctors"
            className="w-[44px] h-[44px] rounded-full border border-solid border-[#181A1E]  
                flex justify-center items-center group hover:bg-primaryColor hover:border-none"
          >
            <BsArrowRight className="group-hover:text-white" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default DoctorCard;
