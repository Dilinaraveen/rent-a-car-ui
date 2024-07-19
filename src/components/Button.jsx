import React from "react";

function Button({placeholder}) {
  return (
    <button className="p-2 bg-blue-500 text-white px-4 rounded-full hover:scale-105 transition-all">
     {placeholder}
    </button>
  );
}

export default Button;
