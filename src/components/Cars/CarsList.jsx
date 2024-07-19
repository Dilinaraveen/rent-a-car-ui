import React, { useState } from "react";
import CarCard from "./CarCard";
import BookingModal from "../CarBooking/BookingModal";
import CarActionCard from "./CarActionCard";
import UpdateModal from "./UpdateModal";
import ConfirmationModal from "../ConfirmationModal";

const cars = [
  {
    name: "Tesla Model S",
    price: 120,
    image:
      "https://hips.hearstapps.com/hmg-prod/images/2024-tesla-model-s-107-6572200e43fa1.jpg?crop=0.497xw:0.560xh;0.243xw,0.232xh&resize=768:*",
    carType: "Electric",
    seat: 5,
    carAvg: 120,
  },
  {
    name: "BMW X3",
    price: 90,
    image:
      "https://hips.hearstapps.com/hmg-prod/images/2025-bmw-x3-101-6672011896440.jpg?crop=0.718xw:0.716xh;0.0994xw,0.239xh&resize=768:*",
    carType: "Sedan",
    seat: 5,
    carAvg: 30,
  },
  {
    name: "Ford Mustang",
    price: 150,
    image:
      "https://images.prismic.io/carwow/c2d2e740-99e2-4faf-8cfa-b5a75c5037c0_ford-mustang-2024-lhd-front34static.jpg?auto=format&cs=tinysrgb&fit=crop&q=60&w=750",
    carType: "Coupe",
    seat: 4,
    carAvg: 25,
  },
  {
    name: "Tesla Model S",
    price: 120,
    image:
      "https://hips.hearstapps.com/hmg-prod/images/2024-tesla-model-s-107-6572200e43fa1.jpg?crop=0.497xw:0.560xh;0.243xw,0.232xh&resize=768:*",
    carType: "Electric",
    seat: 5,
    carAvg: 120,
  },
];

function CarsList() {
  const userRole = "ADMIN";
  const [selectedCar, setSelectedCar] = useState(null);

  const handleUpdate = (car) => {
    setSelectedCar(car);
    {
      userRole === "ADMIN"
        ? document.getElementById("my_modal_1").showModal()
        : document.getElementById("my_modal_2").showModal();
    }
  };

  const handleDelete = (car) => {
    setSelectedCar(car);
    document.getElementById("my_modal_3").showModal();
  };

  return (
    <div
      className="grid grid-cols-1 
    md:grid-cols-2
    lg:grid-cols-3"
    >
      {cars.map((car, index) => (
        <div key={index}>
          {userRole === "ADMIN" ? (
            <CarActionCard car={car} onUpdate={handleUpdate} onDelete={handleDelete} />
          ) : (
            <CarCard car={car} onUpdate={handleUpdate} />
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
  );
}

export default CarsList;
