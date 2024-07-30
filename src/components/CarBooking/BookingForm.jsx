import React, { useState } from "react";
import { useSelector } from "react-redux";
import { BookACar } from "../../services/booking.service";
import { message } from "antd";

function BookingForm({carId }) {
  const { userId } = useSelector((state) => state.auth);

  const [formData, setFormData] = useState({

    userId: userId,
    carId: carId | "",
    pickupLocation: "",
    fromDate: "",
    toDate: "",
    pickupTime: "",
    dropTime: "",
    contactNumber: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(formData)
    try {
      await BookACar(formData);
      setFormData({
        userId: "",
        carId: "",
        pickupLocation: "",
        fromDate: "",
        toDate: "",
        pickupTime: "",
        dropTime: "",
        contactNumber: "",
      });
      message.success("Booking successful!");
      document.getElementById("my_modal_2").close();
    } catch (error) {
      console.error("Error booking car:", error);
      message.error("Error booking car")
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="flex flex-col w-full mb-5">
        <label className="text-gray-400">PickUp Location</label>
        <input
          type="text"
          placeholder="Type here"
          name="pickupLocation"
          className="input input-bordered w-full max-w-lg"
          value={formData.pickupLocation}
          onChange={handleChange}
        />
      </div>
      <div className="flex flex-col gap-5 mb-5">
        <div className="flex flex-col w-full">
          <label className="text-gray-400">Pick Up Date</label>
          <input
            type="date"
            name="fromDate"
            className="input input-bordered w-full max-w-lg"
            value={formData.fromDate}
            onChange={handleChange}
          />
        </div>
        <div className="flex flex-col w-full">
          <label className="text-gray-400">Drop Off Date</label>
          <input
            type="date"
            name="toDate"
            className="input input-bordered w-full max-w-lg"
            value={formData.toDate}
            onChange={handleChange}
          />
        </div>
      </div>
      <div className="flex gap-5">
        <div className="flex flex-col w-full mb-5">
          <label className="text-gray-400">Pick Up Time</label>
          <input
            type="time"
            name="pickupTime"
            placeholder="Type here"
            className="input input-bordered w-full max-w-lg"
            value={formData.pickupTime}
            onChange={handleChange}
          />
        </div>
        <div className="flex flex-col w-full mb-5">
          <label className="text-gray-400">Drop Off Time</label>
          <input
            type="time"
            name="dropTime"
            placeholder="Type here"
            className="input input-bordered w-full max-w-lg"
            value={formData.dropTime}
            onChange={handleChange}
          />
        </div>
      </div>
      <div className="flex flex-col w-full mb-5">
        <label className="text-gray-400">Contact Number</label>
        <input
          type="text"
          placeholder="Type here"
          name="contactNumber"
          className="input input-bordered w-full max-w-lg"
          value={formData.contactNumber}
          onChange={handleChange}
        />
      </div>
      <div className="modal-action">
        <button onClick={() => document.getElementById("my_modal_2").close()} type="button" className="btn">Close</button>
        <button
          type="submit"
          className="btn bg-blue-500 text-white hover:bg-blue-800"
        >
          Save
        </button>
      </div>
    </form>
  );
}

export default BookingForm;
