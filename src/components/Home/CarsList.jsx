import React, { useState } from "react";
import CarCard from "./CarCard";
import BookingModal from "../CarBooking/BookingModal";

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
];

function CarsList() {
  const [selectedCar, setSelectedCar] = useState(null);


  return (
    <div
      className="grid grid-cols-2 
    md:grid-cols-3
    lg:grid-cols-4"
    >
      {cars.map((car, index) => (
        <div
          key={index}
          onClick={() => {
            document.getElementById("my_modal_1").showModal();
            setSelectedCar(car);
            console.log(selectedCar)
          }}
        >
          <CarCard car={car} />
        </div>
      ))}

      <dialog id="my_modal_1" className="modal">
        {selectedCar && (
          <BookingModal selectedCar={selectedCar} />
        )}
      </dialog>
    </div>
  );
}

export default CarsList;
