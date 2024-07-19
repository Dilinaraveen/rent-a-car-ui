
import React from "react";
import { TiThMenu } from "react-icons/ti";

function TopHeader({ setToggleBar }) {
  return (
    <div
      className="flex p-5 border-b 
    items-center justify-between
    md:justify-end"
    >
      <TiThMenu className="w-6 h-6 md:hidden" onClick={() => setToggleBar(true)} />
      <img
          src="/images/noUser.webp"
          alt="logo"
          className="w-10 h-15 rounded-full"
        />
    </div>
  );
}

export default TopHeader;
