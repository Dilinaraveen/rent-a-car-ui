
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
          <div className="absolute right-0 p-2 mt-2 w-48 bg-white border rounded-md shadow-lg">
            
            <Link
              to="/settings"
              className="block px-4 py-2 text-gray-800 hover:bg-gray-200"
              onClick={() => setIsDropdownOpen(false)}
            >
              Settings
            </Link>
            <button
              className="block w-full border border-red-500 rounded-lg text-left px-4 py-2 text-gray-800 hover:bg-red-500 hover:text-white"
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
