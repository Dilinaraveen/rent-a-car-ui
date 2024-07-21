import React from "react";
import { FaGasPump } from "react-icons/fa";
import { MdAirlineSeatReclineNormal } from "react-icons/md";
import { PiSteeringWheelFill } from "react-icons/pi";
import { FaArrowRight } from "react-icons/fa";

function CarCard({ car, onUpdate, imageUrl }) {
  return (
    <>
      <div
        className="group bg-gray-50 p-3 sm:p-5 rounded-3xl m-1 sm:m-5
hover:bg-white 
hover:border-[1px] cursor-pointer duration-50
border-blue-500 "
      >
        <h2 className="text-[20px] font-medium mb-2">{car?.name}</h2>
        <h2 className="text-[28px] font-bold mb-2">
          <span className="text-[12px] font-light">$ </span>
          {car?.price}
          <span className="text-[12px] font-light"> /day</span>
        </h2>
        <div className="flex justify-center">
          <img
            src={imageUrl}
            alt={car?.name}
            width={220}
            height={200}
            className="w-[250px] h-[150px] 
        mb-3 object-contain"
          />
        </div>
        <div className="flex justify-around group-hover:hidden">
          <div className="text-center text-gray-500">
            <PiSteeringWheelFill className="w-full text-[22px] mb-2" />
            <h2 className="line-clamp-5 text-[14px] font-light">
              {car?.type}
            </h2>
          </div>
          <div className="text-center text-gray-500">
            <MdAirlineSeatReclineNormal className="w-full text-[22px] mb-2" />
            <h2 className="line-clamp-5 text-[14px] font-light">
              {car?.seats} Seat
            </h2>
          </div>
          <div className=" text-center text-gray-500 ">
            <FaGasPump className="w-full text-[22px] mb-2" />
            <h2 className="line-clamp-5 text-[14px] font-light">
              {car?.carAvg} MPG
            </h2>
          </div>
        </div>
        <button
          className="hidden group-hover:flex bg-gradient-to-r
     from-blue-400 to-blue-700
    p-2 rounded-lg text-white w-full px-5 justify-between items-center"
    onClick={() => onUpdate(car)}
        >
          Rent Now
          <FaArrowRight />
        </button>
      </div>
      
    </>
  );
}

export default CarCard;
