import React from "react";
import { FaCalendarAlt } from "react-icons/fa";
import { FaClock } from "react-icons/fa";

function BookingCard() {
  return (
    <div
      className="flex gap- md:gap-10 group bg-gray-50 p-3 sm:p-5 rounded-3xl m-1 sm:m-5
    hover:bg-white 
    hover:border-[1px] cursor-pointer duration-50
    border-blue-500 divide-x"
    >
      <div className="flex flex-col w-full md:w-1/3 ml-2">
        <div className="md:flex justify-between">
          <h2 className="text-[15px] font-medium mb-1">BMW X5</h2>
          <h2 className="text-[15px] font-bold mb-1">
            <span className="text-[10px] font-light">$ </span>
            50
            <span className="text-[10px] font-light"> /day</span>
          </h2>
        </div>

        <img
          src={"/images/bmw_520d_m_sport_20.jpg"}
          alt={""}
          width={220}
          height={200}
          className="w-[150px] h-[100px] 
        mb-3 object-contain rounded-lg"
        />
      </div>
      <div className="flex flex-col pl-4 justify-between w-full md:w-2/3">
        <div>
          <div className="flex flex-col md:flex-row md:gap-4 md:mb-4">
            <div className="flex gap-1 items-center mb-2">
              <FaCalendarAlt className="text-[13px]" />
              <h2 className="text-[13px] font-medium">Pickup Date: </h2>
              <span className="text-[13px] font-light">2024-08-01</span>
            </div>
            <div className="flex gap-1 items-center mb-2">
              <FaCalendarAlt className="text-[13px]" />
              <h2 className="text-[13px] font-medium">Drop Date: </h2>
              <span className="text-[13px] font-light">2024-08-10</span>
            </div>
          </div>

          <div className="flex flex-col md:flex-row md:gap-4 md:mb-4">
            <div className="flex gap-1 items-center mb-2">
              <FaClock className="text-[13px]" />
              <h2 className="text-[13px] font-medium">Pickup Time: </h2>
              <span className="text-[13px] font-light">08:00</span>
            </div>
            <div className="flex gap-1 items-center mb-2">
              <FaClock className="text-[13px]" />
              <h2 className="text-[13px] font-medium">Drop Time: </h2>
              <span className="text-[13px] font-light">12:00</span>
            </div>
          </div>
        </div>

        <div className="flex flex-col md:items-center md:flex-row md:gap-4 md:mb-2 md:justify-between">
          <div className="flex gap-1">
            <h2 className="text-[13px] font-medium">Price: </h2>
            <span className="text-[13px] font-light">200$</span>
          </div>
          <div className="w-fit p-2 rounded-lg text-[14px] font-bold bg-orange-300 text-orange-700">
            PENDING
          </div>
        </div>
      </div>
    </div>
  );
}

export default BookingCard;
