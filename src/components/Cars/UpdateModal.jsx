import React, { useEffect, useState, useRef } from "react";
import UpdateForm from "./UpdateForm";
import { FaCloudUploadAlt, FaTimes } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { UpdateCar } from "../../services/cars.service";
import toast from "react-hot-toast";
import { fetchAllCars, fetchAllCarsAdmin } from "../../redux/feature/carsSlice";

function UpdateModal({ selectedCar }) {
  const [formData, setFormData] = useState({
    name: selectedCar?.name || "",
    brand: selectedCar?.brand || "",
    color: selectedCar?.color || "",
    type: selectedCar?.type || "",
    year: selectedCar?.year || "",
    transmission: selectedCar?.transmission || "",
    seats: selectedCar?.seats || "",
    carAvg: selectedCar?.carAvg || "",
    price: selectedCar?.price || "",
    image: null,
  });
  const [imagePreview, setImagePreview] = useState(null);

  const fileInputRef = useRef(null);

  const { jwt, userRole } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  useEffect(() => {
    if (selectedCar) {
      setFormData({
        name: selectedCar.name || "",
        brand: selectedCar.brand || "",
        color: selectedCar.color || "",
        type: selectedCar.type || "",
        year: selectedCar.year || "",
        transmission: selectedCar.transmission || "",
        seats: selectedCar.seats || "",
        carAvg: selectedCar.carAvg || "",
        price: selectedCar.price || "",
        image: selectedCar.returnedImage,
      });

      const imageBase64 = selectedCar.returnedImage
        ? `data:image/jpeg;base64,${selectedCar.returnedImage}`
        : "";
      setImagePreview(imageBase64);
    }
  }, [selectedCar]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setFormData((prevData) => ({
        ...prevData,
        image: file,
      }));
      const previewUrl = URL.createObjectURL(file);
      setImagePreview(previewUrl);
      console.log("Image preview URL:", previewUrl); // Check preview URL
    }
  };

  const handleImageClear = () => {
    setFormData((prevData) => ({
      ...prevData,
      image: null,
    }));
    setImagePreview(null);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const payload = new FormData();
    for (const key in formData) {
      payload.append(key, formData[key]);
    }

    try {
      await UpdateCar(selectedCar.id, payload, jwt);
      toast.success("Car updated successfully!");
      if (userRole === "ADMIN") {
        dispatch(fetchAllCarsAdmin(jwt));
      } else {
        dispatch(fetchAllCars());
      }
    } catch (error) {
      console.error("Error updating car:", error);
      toast.error("Error updating car");
    }
  };

  return (
    <div className="modal-box w-11/12 max-w-5xl">
      <form method="dialog">
        <div className="border-b-[1px] pb-2">
          <h3 className="text-[30px] font-light text-gray-400">Update Car</h3>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2">
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
                  onClick={handleImageClear} // Clear image preview
                  className="absolute top-2 right-2 bg-white p-1 rounded-full shadow-md hover:bg-gray-100"
                >
                  <FaTimes className="text-red-500" />
                </button>
              </div>
            ) : (
              <div
                className="w-full h-[300px] md:h-full flex flex-col justify-center items-center cursor-pointer p-2 border-2 rounded-3xl bg-blue-50 border-blue-500 border-dashed mx-auto"
                onClick={() => {
                  fileInputRef.current.click();
                }}
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
              ref={fileInputRef}
              className="hidden"
              onChange={handleFileChange}
              key={imagePreview ? imagePreview : Date.now()}
            />
          </div>
          <div>
            <UpdateForm
              formData={formData}
              handleInputChange={handleInputChange}
            />
          </div>
        </div>
        <div className="modal-action">
          <button className="btn">Close</button>
          <button
            className="btn bg-blue-500 text-white hover:bg-blue-800"
            type="button"
            onClick={handleSubmit}
          >
            Save
          </button>
        </div>
      </form>
    </div>
  );
}

export default UpdateModal;
