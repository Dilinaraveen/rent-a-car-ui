import React from "react";
import UpdateForm from "./UpdateForm";
import { FaCloudUploadAlt } from "react-icons/fa";

function UpdateModal({ selectedCar }) {
  return (
    <div className="modal-box w-11/12 max-w-5xl">
      <form method="dialog">
        <div className="border-b-[1px] pb-2">
          <h3 className="text-[30px] font-light text-gray-400">
            Update Car
          </h3>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2">
          <div className="flex flex-col justify-center items-center p-3 rounded-xl">
            <img
              src={selectedCar?.image}
              alt={selectedCar?.name}
              width={220}
              height={200}
              className="w-[250px] h-[150px] md:w-[500px] md:h-[300px]
              mb-3 object-cover rounded-lg "
            />
            <label
              htmlFor="image"
              className="w-10 h-10 flex justify-center items-center cursor-pointer p-2 border border-gray-300 rounded-full bg-blue-500 hover:bg-blue-800 "
            >
              <FaCloudUploadAlt className="text-xl text-white " />
            </label>
            <input type="file" id="image" accept="image/*" className="hidden" />
          </div>
          <div>
            <UpdateForm selectedCar={selectedCar} />
          </div>
        </div>
      </form>
    </div>
  );
}

export default UpdateModal;
