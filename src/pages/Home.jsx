import React from "react";
import Hero from "../components/Home/Hero";
import SearchInput from "../components/Home/SearchInput";
import CarsFilterOption from "../components/Home/CarsFilterOption";
import CarsList from "../components/Cars/CarsList";
import Navbar from "../components/Navbar";

function Home() {
  return (
    <div className="p-5 sm:px-10 md:px-20">
      <Navbar />
      <Hero />
      <SearchInput />
      <CarsFilterOption />
      <CarsList />
    </div>
  );
}

export default Home;
