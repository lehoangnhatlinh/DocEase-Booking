<<<<<<< Updated upstream
import React from "react";
=======
import React from 'react';
import PropTypes from 'prop-types';
import { BASE_URL, token } from "../../../config";
import { toast } from "react-toastify";
import convertTime from '../../utils/convertTime'
const SidePanel = ({ doctorId, ticketPrice , timeSlots}) => {
  
  const bookingHandler = async () => {
    try {
      const res = await fetch(
        `${BASE_URL}/bookings/checkout-session/${doctorId}`,
        {
          method: "post",
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      const data = await res.json();
      if (!res.ok) {
        throw new Error(data.message + "Please try again");
      }

      if (data.session.url) {
        window.location.href = data.session.url;
      }
    } catch (err) {
      toast.error(err.message);
    }
  };
>>>>>>> Stashed changes

const SidePanel = () => {
  return (
    <div className="shadow-panelShadow p-3 lg:p-5">
      <div className="flex items-center justify-between">
        <p className="text__para mt-0 font-semibold">Ticket Price</p>
        <span className="text-[16px] leading-7 lg:text-[22px] lg:leading-8 text-headingColor font-bold">
          {ticketPrice} BDT
        </span>
      </div>

      <div className="mt-[30px]">
        <p className="text__para mt-0 font-semibold">Available Time slots:</p>
        {console.log(timeSlots)}
        <ul className="mt-3">
<<<<<<< Updated upstream
          <li className="flex items-center justify-between" mb-2>
            <p className="text-[15px] leading-6 text-textColor font-semibold">
              Sunday
            </p>
            <p className="text-[15px] leading-6 text-textColor font-semibold">
              4:00 PM - 9:30 PM
            </p>
          </li>

          <li className="flex items-center justify-between" mb-2>
            <p className="text-[15px] leading-6 text-textColor font-semibold">
              Sunday
            </p>
            <p className="text-[15px] leading-6 text-textColor font-semibold">
              4:00 PM - 9:30 PM
            </p>
          </li>

          <li className="flex items-center justify-between" mb-2>
            <p className="text-[15px] leading-6 text-textColor font-semibold">
              Sunday
            </p>
            <p className="text-[15px] leading-6 text-textColor font-semibold">
              4:00 PM - 9:30 PM
            </p>
          </li>

          <li className="flex items-center justify-between" mb-2>
            <p className="text-[15px] leading-6 text-textColor font-semibold">
              Sunday
            </p>
            <p className="text-[15px] leading-6 text-textColor font-semibold">
              4:00 PM - 9:30 PM
            </p>
          </li>
        </ul>
      </div>

      <button className="btn px-2 w-full rounded-md">Book AppointMent</button>
=======
          {timeSlots && timeSlots.map((item, index) => (
           
            <li key={index} className="flex items-center justify-between mb-2">
              <p className="text-[15px] leading-6 text-textColor font-semibold">
                {item.day}
              </p>
              <p className="text-[15px] leading-6 text-textColor font-semibold">
                {convertTime(item.startingTime)} - {convertTime(item.endingTime)}
              </p>
            </li>
          ))}
        </ul>
      </div>

      <button onClick={bookingHandler} className="btn px-2 w-full rounded-md">
        Book Appointment
      </button>
>>>>>>> Stashed changes
    </div>
  );
};

SidePanel.propTypes = {
  doctorId: PropTypes.string.isRequired,
  ticketPrice: PropTypes.number.isRequired,
  timeSlots: PropTypes.arrayOf(
    PropTypes.shape({
      day: PropTypes.string.isRequired,
      startingTime: PropTypes.string.isRequired,
      endingTime: PropTypes.string.isRequired
    })
  ).isRequired
};

export default SidePanel;
