import React from "react";
import CarCard from "../Home/CarCard";
import Form from "./Form";

function BookingModal({ selectedCar }) {


  return (
    <div className="modal-box w-11/12 max-w-5xl">
      
        <form method="dialog">
         <div className="border-b-[1px] pb-2">
          <h3 className="text-[30px] font-light text-gray-400">Rent A Car Now!</h3>
         </div>
         <div className="grid grid-cols-1 md:grid-cols-2">
          <div>
            <CarCard car={selectedCar} />
          </div>
          <div>
            <Form />
          </div>
         </div>
          <button className="btn">Close</button>
        </form>
      
    </div>
  );
}

export default BookingModal;
