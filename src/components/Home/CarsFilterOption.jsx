import React from "react";

function CarsFilterOption() {
  return (
    <div className="mt-10 flex justify-between">
      <div>
        <h2 className="text-[30px] font-bold">Cars Catalog</h2>
        <h2>Explore our clars you might like</h2>
      </div>
      <div className="flex items-center gap-5">
        <select className="select select-bordered w-full max-w-xs">
          <option disabled selected>
            Price
          </option>
          <option>Min to Max</option>
          <option>Max to Min</option>
        </select>

        <select className="select select-bordered w-full md:block max-w-xs hidden">
          <option disabled selected>
            Manufacturer
          </option>
          <option>BMW</option>
          <option>Audi</option>
          <option>Toyota</option>
        </select>
      </div>
    </div>
  );
}

export default CarsFilterOption;
