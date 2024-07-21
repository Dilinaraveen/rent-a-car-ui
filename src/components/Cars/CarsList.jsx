import React, { useEffect, useState } from "react";
import CarCard from "./CarCard";
import BookingModal from "../CarBooking/BookingModal";
import CarActionCard from "./CarActionCard";
import UpdateModal from "./UpdateModal";
import ConfirmationModal from "../ConfirmationModal";
import CarSearchInput from "./CarSearchInput";
import { useDispatch, useSelector } from "react-redux";
import { GetAllCars, GetAllCarsAdmin } from "../../services/cars.service";
import { fetchAllCars, fetchAllCarsAdmin } from "../../redux/feature/carsSlice";

function CarsList() {
  const dispatch = useDispatch();
  //const [cars, setCars] = useState([]);
  const [selectedCar, setSelectedCar] = useState(null);

  const { userRole, jwt } = useSelector((state) => state.auth);
  const { cars, loading, error } = useSelector((state) => state.cars);

  useEffect(() => {
    
    if (userRole === "ADMIN") {
      dispatch(fetchAllCarsAdmin(jwt));
    } else {
      dispatch(fetchAllCars());
    }
    console.log("cars",cars);
  }, [dispatch,jwt, userRole]);

  // const fetchAllCarsAdmin = async () => {
  //   try {
  //     const response = await GetAllCarsAdmin(jwt);
  //     console.log(response);
  //     setCars(response); // Assuming response.data contains an array of cars
  //   } catch (error) {
  //     console.error("Error fetching cars:", error);
  //   }
  // };

  // const fetchAllCars = async () => {
  //   try {
  //     const response = await GetAllCars();
  //     console.log(response);
  //     setCars(response); // Assuming response.data contains an array of cars
  //   } catch (error) {
  //     console.error("Error fetching cars:", error);
  //   }
  // };

  const handleUpdate = (car) => {
    setSelectedCar(car);
    userRole === "ADMIN"
      ? document.getElementById("my_modal_1").showModal()
      : document.getElementById("my_modal_2").showModal();
  };

  const handleDelete = (car) => {
    setSelectedCar(car);
    document.getElementById("my_modal_3").showModal();
  };

  return (
    <>
     <CarSearchInput />

      <div
        className="grid grid-cols-1 mt-2 md:grid-cols-2 lg:grid-cols-3"
      >
        {cars &&
          cars.map((car, index) => (
            <div key={index}>
              {userRole === "ADMIN" ? (
                <CarActionCard
                  car={car}
                  onUpdate={handleUpdate}
                  onDelete={handleDelete}
                  imageUrl={`data:image/jpeg;base64,${car.returnedImage}`}
                />
              ) : (
                <CarCard
                  car={car}
                  onUpdate={handleUpdate}
                  imageUrl={`data:image/jpeg;base64,${car.returnedImage}`}
                />
              )}
            </div>
          ))}

        <dialog id="my_modal_1" className="modal">
          {selectedCar && <UpdateModal selectedCar={selectedCar} />}
        </dialog>

        <dialog id="my_modal_2" className="modal">
          {selectedCar && <BookingModal selectedCar={selectedCar} />}
        </dialog>

        <dialog id="my_modal_3" className="modal">
          <ConfirmationModal
            heading="Delete Car"
            body="Are you sure you want to delete this car?"
          />
        </dialog>
      </div>
    </>
  );
}

export default CarsList;
