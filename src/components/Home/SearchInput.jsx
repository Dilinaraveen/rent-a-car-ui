import React from "react";
import { FaLocationDot } from "react-icons/fa6";

function SearchInput() {
  return (
    <div>
      <h2
        className="text-center text-[20px]
        text-gray-400 mb-3"
      >
        Let's Search what you need
      </h2>
      <div className="flex justify-center">
        <div className="flex bg-gray-100 p-1 px-5 gap-2 rounded-full divide-x">
          <div className="flex items-center">
            <FaLocationDot />

            <input
              type="text"
              placeholder="Location"
              className="p-2 outline-none bg-transparent"
            />
          </div>
          <div className="flex items-center">
            <input
              type="date"
              className="p-2 outline-none bg-transparent text-gray-400"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default SearchInput;
