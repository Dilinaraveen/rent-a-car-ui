import React from "react";

function Button({placeholder, onClick , secondary}) {
  return (
    <button
    className={`p-2 px-4 rounded-full transition-all ${
      secondary
        ? "bg-white text-blue-500 border border-blue-500 hover:scale-105"
        : "bg-blue-500 text-white hover:scale-105"
    }`}
    onClick={onClick}
  >
     {placeholder}
    </button>
  );
}

export default Button;
