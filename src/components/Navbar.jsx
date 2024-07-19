import React from "react";
import Button from "./Button";
import { Link } from "react-router-dom";

function Navbar() {
  const user = false;

  return (
    <div className="flex items-center justify-between p-3 px-5 shadow-sm border-b-[1px]">
      <img src="/images/Logo.png" alt="logo" className="w-20 h-15" />
      <div className="hidden md:flex gap-5">
        <h2
          className="
            hover:bg-blue-500
            px-3 cursor-pointer
            p-2 rounded-full hover:text-white
            "
        >
          Home
        </h2>
        <h2
          className="
            hover:bg-blue-500
            px-3 cursor-pointer
            p-2 rounded-full hover:text-white
            "
        >
          History
        </h2>
        <h2
          className="
            hover:bg-blue-500
            px-3 cursor-pointer
            p-2 rounded-full hover:text-white
            "
        >
          Contact
        </h2>
      </div>
      {user ? (
        <img
          src="/images/noUser.webp"
          alt="logo"
          className="w-10 h-15 rounded-full"
        />
      ) : (
        <div className="flex gap-2 md:gap-5 p-2 px-3">
          <Link to="/signup">
            <Button placeholder="Sign Up" />
          </Link>
          <Link to="/login">
            <Button placeholder="Login" />
          </Link>
        </div>
      )}
    </div>
  );
}

export default Navbar;
