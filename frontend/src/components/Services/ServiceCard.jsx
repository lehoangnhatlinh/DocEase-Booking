import React from 'react'
import { Link } from 'react-router-dom'
import {BsArrowRight} from 'react-icons/bs'

const ServiceCard = ({index, item}) => {
    const {name, desc, bgColor, textColor} = item
  return (
    <div className="py-[30px] px-3 lg:px-5">
      <h2 className="text-[26px] leading-9 font-[700] text-headingColor">
        {name}
      </h2>
      <p className="text-[16px] leading-7 font-[400] text-textColor">{desc}</p>

      <div className="flex items-center justify-between mt-[30px]">
        <Link
          to="/doctors"
          className="w-[44px] h-[44px] rounded-full border border-solid border-[#181A1E]  
                flex justify-center items-center group hover:bg-primaryColor hover:border-none"
        >
          <BsArrowRight className="group-hover:text-white" />
        </Link>

        <span
          className="w-[44px] h-[44px] flex justify-center items-center text-[18px] leading-[30px] font-[400]"
          style={{
            background: `${bgColor}`,
            color: `${textColor}`,
            borderRadius: "6px 0 0 6px",
          }}
        >
          {index + 1}
        </span>
      </div>
    </div>
  );
}

export default ServiceCard