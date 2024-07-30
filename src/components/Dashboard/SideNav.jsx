import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { FaBookmark, FaCar, FaUser } from "react-icons/fa";
import { MdKeyboardArrowLeft } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../redux/feature/authSlice";

function SideNav({ closeSideBar }) {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const location = useLocation();

  const { userRole } = useSelector((state) => state.auth);

  const handleLogout = () => {
    dispatch(logout());
    navigate("/");
  };

  const menuList = [
    {
      id: 1,
      name: "Cars",
      icon: FaCar,
      path: "cars",
    },
    {
      id: 2,
      name: "Bookings",
      icon: FaBookmark,
      path: "bookings",
    },
    // {
    //   id: 3,
    //   name: "Search",
    //   icon: FaSearch,
    //   path: "search",
    // },
    ...(userRole === "ADMIN" ? [{
      id: 4,
      name: "Users",
      icon: FaUser,
      path: "users",
    }] : []),
  ];

  const [activeIndex, setActiveIndex] = useState();

  useEffect(() => {
    const currentPath = location.pathname.split("/")[2]; // Assuming the path is like /dashboard/cars, /dashboard/bookings, etc.
    const activeItemIndex = menuList.findIndex(item => item.path === currentPath);
    setActiveIndex(activeItemIndex);
  }, [location.pathname, menuList]);

  return (
    <div className="shadow-sm border-r h-full flex flex-col">
      <div className="p-10 border-b flex justify-between items-center">
        <img src="/images/Logo.png" alt="logo" className="w-20 h-15" />
        <MdKeyboardArrowLeft
          className="w-10 h-10 md:hidden"
          onClick={() => closeSideBar()}
        />
      </div>
      <div className="flex flex-col flex-1 p-2">
        {menuList.map((item, index) => (
          <button
            className={`flex items-center gap-2 p-4 px-6 mt-1
                     hover:bg-blue-500 hover:rounded-3xl hover:text-white w-full
                     text-gray-500 transition-all ${
                       activeIndex === index
                         ? "bg-blue-500 text-white rounded-3xl"
                         : null
                     }`}
            onClick={() => {
              setActiveIndex(index);
              navigate(`/dashboard/${item.path}`);
              closeSideBar();
            }}
            key={index}
          >
            <item.icon />
            <h2>{item.name}</h2>
          </button>
        ))}
      </div>
      <div className="p-4 border-t">
        <button
          onClick={handleLogout}
          className="w-full border border-red-500 rounded-xl flex items-center justify-center gap-2 p-4 hover:bg-red-500 hover:rounded-xl hover:text-white text-red-500 transition-all"
        >
          <span>Log out</span>
        </button>
      </div>
    </div>
  );
}

export default SideNav;
