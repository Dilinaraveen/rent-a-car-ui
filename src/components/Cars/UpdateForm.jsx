import React from "react";

function UpdateForm({ formData, handleInputChange }) {
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
            value={formData.name}
            onChange={handleInputChange}
          />
        </div>
        <div className="flex flex-col w-full">
          <label className="text-gray-400">Brand</label>
          <input
            type="text"
            placeholder="Type here"
            name="brand"
            className="input input-bordered w-full max-w-lg"
            value={formData.brand}
            onChange={handleInputChange}
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
            value={formData.color}
            onChange={handleInputChange}
          />
        </div>
        <div className="flex flex-col w-full">
          <label className="text-gray-400">Type</label>
          <select
            className="select select-bordered w-full max-w-lg"
            name="type"
            value={formData.type}
            onChange={handleInputChange}
          >
            <option value="" disabled>
              Select Type
            </option>
            <option>Sedan</option>
            <option>SUV</option>
            <option>Electric</option>
            <option>Hatchback</option>
          </select>
        </div>
      </div>
      <div className="flex gap-5 mb-5">
        <div className="flex flex-col w-full">
          <label className="text-gray-400">Year</label>
          <input
            type="text"
            placeholder="Type here"
            name="year"
            className="input input-bordered w-full max-w-lg"
            value={formData.year}
            onChange={handleInputChange}
          />
        </div>
        <div className="flex flex-col w-full">
          <label className="text-gray-400">Transmission</label>
          <select
            className="select select-bordered w-full max-w-lg"
            name="transmission"
            value={formData.transmission}
            onChange={handleInputChange}
          >
            <option value="" disabled>
              Select Transmission
            </option>
            <option>Auto</option>
            <option>Manual</option>
          </select>
        </div>
      </div>
      <div className="flex gap-5 mb-5">
        <div className="flex flex-col w-full">
          <label className="text-gray-400">Seats</label>
          <input
            type="text"
            placeholder="Type here"
            name="seats"
            className="input input-bordered w-full max-w-lg"
            value={formData.seats}
            onChange={handleInputChange}
          />
        </div>
        <div className="flex flex-col w-full">
          <label className="text-gray-400">Average Fuel Consumption</label>
          <input
            type="number"
            placeholder="Type here"
            name="carAvg"
            className="input input-bordered w-full max-w-lg"
            value={formData.carAvg}
            onChange={handleInputChange}
          />
        </div>
      </div>
      <div className="flex flex-col w-full">
        <label className="text-gray-400">Price</label>
        <input
          type="number"
          placeholder="Type here"
          name="price"
          className="input input-bordered w-full max-w-lg"
          value={formData.price}
          onChange={handleInputChange}
        />
      </div>
    </div>
  );
}

export default UpdateForm;
