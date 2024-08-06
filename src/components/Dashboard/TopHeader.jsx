
import React, { useState } from "react";
import { TiThMenu } from "react-icons/ti";
import { Link } from "react-router-dom";

function TopHeader({ setToggleBar }) {

  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleLogout = () => {
    console.log("User logged out");
    // Add logout functionality here
  };

  return (
    <div
      className="flex p-5 border-b 
    items-center justify-between
    md:justify-end"
    >
      <TiThMenu className="w-6 h-6 md:hidden" onClick={() => setToggleBar(true)} />
      <div className="relative">
        <img
          src="/images/noUser.webp"
          alt="profile"
          className="w-10 h-10 rounded-full cursor-pointer"
          onClick={toggleDropdown}
        />
        {isDropdownOpen && (
          <div className="absolute p-2 right-0 mt-2 w-48 bg-white border rounded-md shadow-lg">
            <Link
              to="/dashboard/settings"
              className="block px-4 text-center hover:rounded-lg border-b  py-2 text-gray-800 text-sm hover:bg-gray-200"
              onClick={() => setIsDropdownOpen(false)}
            >
              Settings
            </Link>
            <button
              className="block w-full rounded-lg text-center text-sm font-bold px-4 py-2 text-gray-800 hover:bg-red-200"
              onClick={() => {
                setIsDropdownOpen(false);
                handleLogout();
              }}
            >
              Log Out
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default TopHeader;
