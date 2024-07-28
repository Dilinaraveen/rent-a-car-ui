import React, { useEffect, useState } from "react";
import CarCard from "./CarCard";
import BookingModal from "../CarBooking/BookingModal";
import CarActionCard from "./CarActionCard";
import UpdateModal from "./UpdateModal";
import ConfirmationModal from "../ConfirmationModal";
import CarSearchInput from "./CarSearchInput";
import { useDispatch, useSelector } from "react-redux";
import { fetchAllCars, fetchAllCarsAdmin } from "../../redux/feature/carsSlice";
import { DeleteCar } from "../../services/cars.service";
import { message } from "antd";

function CarsList() {
  const dispatch = useDispatch();
  
  const [selectedCar, setSelectedCar] = useState(null);
  const [isDeleteModalVisible, setIsDeleteModalVisible] = useState(false);

  const { userRole, jwt } = useSelector((state) => state.auth);
  const { cars, loading, error } = useSelector((state) => state.cars);

  useEffect(() => {
    
    if (userRole === "ADMIN") {
      dispatch(fetchAllCarsAdmin(jwt));
    } else {
      dispatch(fetchAllCars());
    }
    
  }, [dispatch,jwt, userRole]);

  useEffect(() => {
    if (error) {
      message.error("Error in fetching cars");
    }
  }, [error]);

 
  const handleUpdate = (car) => {
    setSelectedCar(car);
    userRole === "ADMIN"
      ? document.getElementById("my_modal_1").showModal()
      : document.getElementById("my_modal_2").showModal();
  };

  
  const handleDelete = (car) => {
    setSelectedCar(car);
    setIsDeleteModalVisible(true);
  };


  const confirmDelete = async () => {
    try {
      if (selectedCar) {
        const status = await DeleteCar(selectedCar.id, jwt);
        if (status === 200) {
          message.success("Car deleted successfully");
          setIsDeleteModalVisible(false);
          setSelectedCar(null);
          if (userRole === "ADMIN") {
            dispatch(fetchAllCarsAdmin(jwt));
          } else {
            dispatch(fetchAllCars());
          }
        } else {
          throw new Error("Failed to delete car");
        }
      }
    } catch (error) {
      console.error("Error deleting car:", error);
      message.error("Failed to delete car");
    }
  };
  
  

  return (
    <>
     <CarSearchInput />

      <div
        className="grid grid-cols-1 mt-2 md:grid-cols-2 lg:grid-cols-3"
      >
         {loading && (
          <div className="flex justify-center items-start min-h-screen w-full md:w-[800px]">
            <span className="loading loading-spinner loading-lg bg-blue-500"></span>
          </div>
        )}
        {!loading &&cars &&
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

        {selectedCar && (
          <ConfirmationModal
            heading="Delete Car"
            body="Are you sure you want to delete this car?"
            isVisible={isDeleteModalVisible}
            onConfirm={confirmDelete}
            onCancel={() => setIsDeleteModalVisible(false)}
          />
        )}
      </div>
    </>
  );
}

export default CarsList;
