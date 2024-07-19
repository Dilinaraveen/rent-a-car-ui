import React from "react";
import Button from "../Button";

function Hero() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2">
      <div>
        <h2 className="text-[40px] md:text-[45px]  lg:text-[60px] font-bold">
          Premium Car Rental in Your Area
        </h2>
        <h2 className="text-[20px]  text-gray-500 pr-20 mt-5 mb-5">
          Book the selected car effortlessly, Pay for driving only, Book the Car
          Now
        </h2>
        <Button placeholder=" Book the Car Now" />
      </div>
      <div>
      <img
        src="/images/Hero.png"
        alt="hero"
        width={400}
        height={500}
        className="w-full object-cover align-middle"
      />
      </div>
    </div>
  );
}

export default Hero;
