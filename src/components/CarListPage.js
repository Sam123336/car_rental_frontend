// src/components/CarListPage.js
import React, { useState } from "react";
import CarCard from "./CarCard";
import BMW from "./images/BMW.png";
import Cadillac from "./images/cadalic.png";
import Lamborghini from "./images/Lamborghini.png";
import jeep from "./images/jeep.png";
import ford from "./images/ford.png";
import nisaan from "./images/nisaan.png";
import ToyotaCamry from "./images/toyota.png";
import HyundaiElantra from "./images/Hyundai.png";
import AudiA6 from "./images/Audi.png";
import ToyotaFortuner from "./images/fortuner.png";

function CarListPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCar, setSelectedCar] = useState(null);
  const [pickUpDate, setPickUpDate] = useState("");
  const [dropOffDate, setDropOffDate] = useState("");
  const [pickUpLocation, setPickUpLocation] = useState("");
  const [dropOffLocation, setDropOffLocation] = useState("");

  const carData = [
    { id: 1, name: "BMW", price: "Rs.70,000 / Day", type: "Sedan", doors: 4, seats: 4, ac: true, image: BMW },
    { id: 2, name: "Cadillac", price: "Rs.80,000 / Day", type: "SUV", doors: 4, seats: 5, ac: true, image: Cadillac },
    { id: 3, name: "Lamborghini", price: "Rs.120,000 / Day", type: "Convertible", doors: 2, seats: 2, ac: true, image: Lamborghini },
    { id: 4, name: "Jeep", price: "Rs.77,000 / Day", type: "SUV", doors: 4, seats: 6, ac: true, image: jeep },
    { id: 5, name: "Ford", price: "Rs.89,000 / Day", type: "Truck", doors: 4, seats: 4, ac: true, image: ford },
    { id: 6, name: "Nissan", price: "Rs.120,000 / Day", type: "Van", doors: 3, seats: 2, ac: true, image: nisaan },
    
    // New Cars
    { id: 7, name: "Toyota Camry", price: "Rs.60,000 / Day", type: "Sedan", doors: 4, seats: 5, ac: true, image: ToyotaCamry },
    { id: 8, name: "Hyundai Elantra", price: "Rs.55,000 / Day", type: "Sedan", doors: 4, seats: 5, ac: true, image: HyundaiElantra },
    { id: 9, name: "Audi A6", price: "Rs.95,000 / Day", type: "Sedan", doors: 4, seats: 5, ac: true, image: AudiA6 },
    { id: 10, name: "Toyota Fortuner", price: "Rs.85,000 / Day", type: "SUV", doors: 4, seats: 7, ac: true, image: ToyotaFortuner },
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
      <div className="grid gap-4 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {filteredCars.map((car) => (
          <CarCard key={car.id} car={car} />
        ))}
      </div>
    </div>
  );
}

export default CarListPage;
