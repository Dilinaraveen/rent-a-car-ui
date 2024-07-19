import React from "react";

function UpdateForm() {
  return (
    <div>
      <div className="flex gap-5 mb-5">
        <div className="flex flex-col w-full">
          <label className="text-gray-400">Name</label>
          <input
            type="text"
            placeholder="Type here"
            name="name"
            className="input input-bordered w-full max-w-lg"
          />
        </div>
        <div className="flex flex-col w-full">
          <label className="text-gray-400">Brand</label>
          <input
            type="text"
            placeholder="Type here"
            name="brand"
            className="input input-bordered w-full max-w-lg"
          />
        </div>
      </div>
      <div className="flex gap-5 mb-5">
        <div className="flex flex-col w-full">
          <label className="text-gray-400">Color</label>
          <input
            type="text"
            placeholder="Type here"
            name="color"
            className="input input-bordered w-full max-w-lg"
          />
        </div>
        <div className="flex flex-col w-full">
          <label className="text-gray-400">Type</label>
          <select
            className="select select-bordered w-full max-w-lg"
            name="type"
          >
            <option disabled selected>
              Select Type
            </option>
            <option>Sedan</option>
            <option>SUV</option>
            <option>Hatchback</option>
            <option>Coupe</option>
          </select>
        </div>
      </div>
      <div className="flex gap-5 mb-5">
        <div className="flex flex-col w-full">
          <label className="text-gray-400">Year</label>
          <input
            type="text"
            placeholder="Type here"
            name="type"
            className="input input-bordered w-full max-w-lg"
          />
        </div>
        <div className="flex flex-col w-full">
          <label className="text-gray-400">Transmission</label>
          <select
            className="select select-bordered w-full max-w-lg"
            name="type"
          >
            <option disabled selected>
              Select Transmission
            </option>
            <option>Auto</option>
            <option>Manual</option>
          </select>
        </div>
      </div>
      <div className="flex gap-5 mb-5">
        <div className="flex flex-col w-full">
          <label className="text-gray-400">Seating</label>
          <input
            type="text"
            placeholder="Type here"
            name="seating"
            className="input input-bordered w-full max-w-lg"
          />
        </div>
        <div className="flex flex-col w-full">
          <label className="text-gray-400">Average Fuel Consumption</label>
          <input
            type="number"
            placeholder="Type here"
            name="avgFuel"
            className="input input-bordered w-full max-w-lg"
          />
        </div>
      </div>
      <div className="flex flex-col w-full">
          <label className="text-gray-400">Price</label>
          <input
            type="number"
            placeholder="Type here"
            name="number"
            className="input input-bordered w-full max-w-lg"
          />
        </div>
      <div className="modal-action">
        <button className="btn">Close</button>
        <button
          className="btn bg-blue-500 text-white
hover:bg-blue-800"
        >
          Save
        </button>
      </div>
    </div>
  );
}

export default UpdateForm;
