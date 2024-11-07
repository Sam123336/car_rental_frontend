// src/components/CarListPage.js
import React, { useState } from "react";
import CarCard from "./CarCard";
import BMW from "./images/BMW.png";
import Cadillac from "./images/cadalic.png";
import Lamborghini from "./images/Lamborghini.png";
import jeep from "./images/jeep.png";
import ford from "./images/ford.png";
import nisaan from "./images/nisaan.png";

function CarListPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCar, setSelectedCar] = useState(null);
  const [pickUpDate, setPickUpDate] = useState("");
  const [dropOffDate, setDropOffDate] = useState("");
  const [pickUpLocation, setPickUpLocation] = useState("");
  const [dropOffLocation, setDropOffLocation] = useState("");

  const carData = [
    { id: 1, name: "BMW", price: "$70 / Day", type: "Sedan", doors: 4, seats: 4, ac: true, image: BMW },
    { id: 2, name: "Cadillac", price: "$80 / Day", type: "SUV", doors: 4, seats: 5, ac: true, image: Cadillac },
    { id: 3, name: "Lamborghini", price: "$120 / Day", type: "Convertible", doors: 2, seats: 2, ac: true, image: Lamborghini },
    { id: 4, name: "Jeep", price: "$77 / Day", type: "SUV", doors: 4, seats: 6, ac: true, image: jeep },
    { id: 5, name: "Ford", price: "$89 / Day", type: "Truck", doors: 4, seats: 4, ac: true, image: ford },
    { id: 6, name: "Nisaan", price: "$120 / Day", type: "Van", doors: 3, seats: 2, ac: true, image: nisaan },
  ];
  
  const filteredCars = carData.filter((car) =>
    car.name.toLowerCase().includes(searchTerm.toLowerCase())
  );
  
  return (
    <div className="container mx-auto p-4">
      <div className="mb-4">
        <input
          type="text"
          placeholder="Search for a car..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full p-2 border border-gray-600 rounded-lg bg-gray-800 text-white placeholder-gray-400"
        />
      </div>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {filteredCars.map((car) => (
          <CarCard key={car.id} car={car} />
        ))}
      </div>
    </div>
  );
}

export default CarListPage;
