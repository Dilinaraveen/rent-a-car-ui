import React, { useEffect, useState } from "react";
import Button from "../Button";
import { useDispatch, useSelector } from "react-redux";
import { searchCars } from "../../redux/feature/carsSlice";
import { GetCarBrands } from "../../services/cars.service";
import { IoMdAdd } from "react-icons/io";
import ConfirmationModal from "../ConfirmationModal";
import AddNewCarModal from "./AddNewCarModal";

function CarSearchInput() {
  const dispatch = useDispatch();

  const [brand, setBrand] = useState("");
  const [type, setType] = useState("");
  const [color, setColor] = useState("");
  const [transmission, setTransmission] = useState("");
  const [carBrands, setCarBrands] = useState([]);

  const { userRole } = useSelector((state) => state.auth);

  useEffect(() => {
    getCarBrands();
  }, []);

  const getCarBrands = async () => {
    try {
      const response = await GetCarBrands();

      setCarBrands(response);
    } catch (error) {
      console.error("Error fetching car brands:", error);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const payload = {
      brand,
      type,
      color,
      transmission,
    };
    dispatch(searchCars(payload));
  };

  const handleClear = () => {
    console.log("Clear button clicked");
    setBrand("");
    setType("");
    setColor("");
    setTransmission("");
    console.log("State after clear:", { brand, type, color, transmission });
    dispatch(
      searchCars({
        brand: "",
        type: "",
        color: "",
        transmission: "",
      })
    );
  };

  const handleAddNewCar = () => {
    document.getElementById("my_modal_3").showModal(); // Open the modal
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col justify-center md:items-start mb-4 p-2"
    >
      <div className="grid grid-cols-2 gap-3 md:grid-cols-4 mb-4">
        <select
          className="select select-bordered w-full max-w-xs"
          value={brand}
          onChange={(e) => setBrand(e.target.value)}
        >
          <option value="" disabled>
            Brand
          </option>
          {carBrands.map((carBrand) => (
            <option key={carBrand} value={carBrand}>
              {carBrand}
            </option>
          ))}
        </select>

        <select
          className="select select-bordered w-full md:block max-w-xs"
          value={type}
          onChange={(e) => setType(e.target.value)}
        >
          <option value="" disabled>
            Type
          </option>
          <option value="Sedan">Sedan</option>
          <option value="SUV">SUV</option>
          <option value="Electric">Electric</option>
          <option value="Hatchback">Hatchback</option>
        </select>

        <select
          className="select select-bordered w-full md:block max-w-xs"
          value={color}
          onChange={(e) => setColor(e.target.value)}
        >
          <option value="" disabled>
            Color
          </option>
          <option value="Black">Black</option>
          <option value="White">White</option>
          <option value="Blue">Blue</option>
          <option value="Red">Red</option>
        </select>

        <select
          className="select select-bordered w-full md:block max-w-xs"
          value={transmission}
          onChange={(e) => setTransmission(e.target.value)}
        >
          <option value="" disabled>
            Select Transmission
          </option>
          <option value="Auto">Auto</option>
          <option value="Manual">Manual</option>
        </select>
      </div>
      <div className="flex justify-between items-center w-full">
        <div className="flex gap-2">
          <Button type="submit" placeholder="Search" />
          <Button
            type="button"
            onClick={handleClear}
            placeholder="Clear"
            secondary
          />
        </div>

        {userRole === "ADMIN" ? (
          <Button
            type="button"
            placeholder="Add New Car"
            icon={<IoMdAdd />}
            onClick={handleAddNewCar}
          />
        ) : null}
      </div>
      <dialog id="my_modal_3" className="modal">
        <AddNewCarModal />
      </dialog>
    </form>
  );
}

export default CarSearchInput;
