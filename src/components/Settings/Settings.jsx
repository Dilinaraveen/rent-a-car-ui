import React, { useState } from "react";
import { MdEdit } from "react-icons/md";
import { FaSave } from "react-icons/fa";

function Settings() {
  const [editMode, setEditMode] = useState(false);

  const handleEdit = () => {
    setEditMode(true);
  };

  const handleSave = () => {
    setEditMode(false);
  }

  return (
    <div className="p-5">
      <div className="w-full flex justify-between items-start p-5">
        <img
          src="/images/noUser.webp"
          alt="profile"
          className="w-[150px] h-[150px] rounded-full cursor-pointer"
        />

        {!editMode ? (
          <div
            onClick={handleEdit}
            className="flex items-center gap-1 text-gray-500 border px-2 p-1 rounded-lg cursor-pointer hover:bg-blue-500 hover:text-white"
          >
            <MdEdit />
            Edit
          </div>
        ) : (
          <div
          onClick={handleSave}
          className="flex items-center gap-2 border px-2 p-1 rounded-lg cursor-pointer bg-blue-500 text-white">
            <FaSave />
            Save
          </div>
        )}
      </div>
      <div className="mt-6 divide-y">
        <div className="flex flex-col w-full mb-5">
          <label className="text-gray-400 mb-2">Username</label>
          <input
            type="text"
            placeholder="Type here"
            name="name"
            className="input input-bordered w-full max-w-lg"
            disabled={!editMode}
          />
        </div>
      </div>
      <div className="flex flex-col w-full mb-5">
        <label className="text-gray-400 mb-2">Email</label>
        <input
          type="email"
          placeholder="Type here"
          name="name"
          className="input input-bordered w-full max-w-lg"
          disabled={!editMode}
        />
      </div>
      <div className="flex flex-col w-full mb-5">
        <label className="text-gray-400 mb-2">Password</label>
        <input
          type="password"
          placeholder="Type here"
          name="name"
          className="input input-bordered w-full max-w-lg"
          disabled={!editMode}
        />
      </div>
    </div>
  );
}

export default Settings;
