import React, { useState } from "react";
import { FaCloudUploadAlt, FaTimes } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { AddNewCar } from "../../services/cars.service";
import toast from "react-hot-toast";
import { fetchAllCars, fetchAllCarsAdmin } from "../../redux/feature/carsSlice";

function AddNewCarModal() {
  const [formData, setFormData] = useState({
    name: "",
    brand: "",
    color: "",
    type: "",
    year: "",
    transmission: "",
    seats: "",
    carAvg: "",
    price: "",
    description: "",
    image: null,
  });
  const [imagePreview, setImagePreview] = useState(null);

  const { jwt, userRole } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleFileChange = (e) => {
    setFormData((prevData) => ({
      ...prevData,
      image: e.target.files[0],
    }));
    setImagePreview(URL.createObjectURL(e.target.files[0]));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const payload = new FormData();
    for (const key in formData) {
      payload.append(key, formData[key]);
    }

    console.log("Form Data before API call:", formData); // Log the formData to debug

    try {
      await AddNewCar(payload, jwt);
      toast.success("Car added successfully!");
      document.getElementById("my_modal_3").close();
      if (userRole === "ADMIN") {
        dispatch(fetchAllCarsAdmin(jwt));
      } else {
        dispatch(fetchAllCars());
      }
      setFormData({
        name: "",
        brand: "",
        color: "",
        type: "",
        year: "",
        transmission: "",
        seats: "",
        carAvg: "",
        price: "",
        description: "",
        image: null,
      });
      setImagePreview(null);
    } catch (error) {
      console.error("Error adding car:", error);
      toast.error("Error adding car");
    }
  };

  const handleClose = () => {
    setImagePreview(null);
    document.getElementById("my_modal_3").close();
  };

  return (
    <div className="modal-box w-11/12 max-w-5xl">
      <form>
        <div className="border-b-[1px] pb-2">
          <h3 className="text-[30px] font-light text-gray-400">Add New Car</h3>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 md:mt-2">
          <div className="flex flex-col justify-center items-center p-3 rounded-xl">
            {imagePreview ? (
              <div className="relative">
                <img
                  src={imagePreview}
                  alt="Selected"
                  width={220}
                  height={200}
                  className="w-[250px] h-[150px] md:w-[500px] md:h-[300px] mb-3 object-cover rounded-lg"
                />
                <button
                  type="button"
                  onClick={() => setImagePreview(null)} // Clear image preview
                  className="absolute top-2 right-2 bg-white p-1 rounded-full shadow-md hover:bg-gray-100"
                >
                  <FaTimes className="text-red-500" />
                </button>
              </div>
            ) : (
              <div
                htmlFor="image"
                className="w-full h-[300px] md:h-full flex flex-col justify-center items-center cursor-pointer p-2 border-2 rounded-3xl bg-blue-50 border-blue-500 border-dashed mx-auto"
                onClick={() => document.getElementById("image").click()}
              >
                <FaCloudUploadAlt className="text-7xl text-blue-500" />
                <p className="text-blue-500 font-bold">Upload file</p>
                <p className="text-xs font-medium text-gray-400 mt-2">
                  PNG, JPG SVG and WEBP are Allowed.
                </p>
              </div>
            )}
            <input
              type="file"
              id="image"
              accept="image/*"
              className="hidden"
              onChange={handleFileChange}
            />
          </div>
          <div>
            <div>
              <div className="flex gap-5 mb-5">
                <div className="flex flex-col w-full">
                  <label className="text-gray-400">Name</label>
                  <input
                    type="text"
                    placeholder="Type here"
                    name="name"
                    className="input input-bordered w-full max-w-lg"
                    onChange={handleInputChange}
                    value={formData.name}
                  />
                </div>
                <div className="flex flex-col w-full">
                  <label className="text-gray-400">Brand</label>
                  <input
                    type="text"
                    placeholder="Type here"
                    name="brand"
                    className="input input-bordered w-full max-w-lg"
                    onChange={handleInputChange}
                    value={formData.brand}
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
                    onChange={handleInputChange}
                    value={formData.color}
                  />
                </div>
                <div className="flex flex-col w-full">
                  <label className="text-gray-400">Type</label>
                  <select
                    className="select select-bordered w-full max-w-lg"
                    name="type"
                    onChange={handleInputChange}
                    value={formData.type}
                  >
                    <option disabled value="">
                      Select Type
                    </option>
                    <option value="Sedan">Sedan</option>
                    <option value="SUV">SUV</option>
                    <option value="Electric">Electric</option>
                    <option value="Hatchback">Hatchback</option>
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
                    onChange={handleInputChange}
                    value={formData.year}
                  />
                </div>
                <div className="flex flex-col w-full">
                  <label className="text-gray-400">Transmission</label>
                  <select
                    className="select select-bordered w-full max-w-lg"
                    name="transmission"
                    onChange={handleInputChange}
                    value={formData.transmission}
                  >
                    <option disabled value="">
                      Select Transmission
                    </option>
                    <option value="Auto">Auto</option>
                    <option value="Manual">Manual</option>
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
                    onChange={handleInputChange}
                    value={formData.seats}
                  />
                </div>
                <div className="flex flex-col w-full">
                  <label className="text-gray-400">
                    Average Fuel Consumption
                  </label>
                  <input
                    type="number"
                    placeholder="Type here"
                    name="carAvg"
                    className="input input-bordered w-full max-w-lg"
                    onChange={handleInputChange}
                    value={formData.carAvg}
                  />
                </div>
              </div>
              <div className="flex flex-col w-full mb-5">
                <label className="text-gray-400">Price</label>
                <input
                  type="number"
                  placeholder="Type here"
                  name="price"
                  className="input input-bordered w-full max-w-lg"
                  onChange={handleInputChange}
                  value={formData.price}
                />
              </div>
              <div className="flex flex-col w-full mb-5">
                <label className="text-gray-400">Description</label>
                <textarea
                  placeholder="Type here"
                  name="description"
                  className="textarea textarea-bordered w-full max-w-lg"
                  onChange={handleInputChange}
                  value={formData.description}
                />
              </div>

              <div className="modal-action">
                <button type="button" className="btn" onClick={handleClose}>
                  Close
                </button>
                <button
                  type="button"
                  className="btn bg-blue-500 text-white hover:bg-blue-800"
                  onClick={handleSubmit}
                >
                  Save
                </button>
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}

export default AddNewCarModal;
