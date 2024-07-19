import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaBookmark } from "react-icons/fa";
import { FaCar } from "react-icons/fa";
import { FaSearch } from "react-icons/fa";
import { MdKeyboardArrowLeft } from "react-icons/md";


function SideNav({ closeSideBar }) {
  const navigation = useNavigate();

  const menuList = [
    {
      id: 1,
      name: "Cars",
      icon: FaCar,
      path: "/cars",
    },
    {
      id: 2,
      name: "Bookings",
      icon: FaBookmark,  
      path: "/bookings",
    },
    {
      id: 3,
      name: "Search",
      icon: FaSearch,
      path: "/search",
    },
  ];

  const [activeIndex, setActiveIndex] = useState();

  return (
    <div className="shadow-sm border-r h-full ">
      <div className="p-10 border-b flex justify-between items-center">

        <img src="/images/Logo.png" alt="logo" className="w-20 h-15" />
        
        <MdKeyboardArrowLeft className="w-10 h-10" onClick={() => closeSideBar()} />

      </div>
      <div className="flex flex-col float-left w-full">
        {menuList.map((item, index) => (
          <button
            className={`flex items-center gap-2 p-4 px-6
                     hover:bg-gray-100 w-full
                     text-gray-500 ${
                       activeIndex == index ? "bg-blue-50 text-primary" : null
                     }`}
            onClick={() => {
              setActiveIndex(index);
              navigation(item.path);
              closeSideBar();
            }}
            key={index}
          >
            <item.icon />
            <h2>{item.name}</h2>
          </button>
        ))}
      </div>
    </div>
  );
}

export default SideNav;
