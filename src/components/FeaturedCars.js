import React, { useState } from 'react';
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

function FeaturedCars() {
  const cars = [
    { name: "SUV", price: "Rs.70,000/day", image: BMW, description: "A spacious SUV with excellent fuel efficiency." },
    { name: "Cadillac", price: "Rs.80,000/day", image: Cadillac, description: "Luxury and comfort with a smooth drive." },
    { name: "Lamborghini", price: "Rs.120,000/day", image: Lamborghini, description: "High performance and sleek design." },
    { name: "Jeep", price: "Rs.77,000/day", image: jeep, description: "Rugged and reliable, perfect for off-road adventures." },
    { name: "Ford", price: "Rs.89,000/day", image: ford, description: "A powerful car with modern features." },
    { name: "Dodge", price: "Rs.99,000/day", image: nisaan, description: "Sporty and fast with advanced safety features." },
    { name: "ToyotaCamry ", price: "Rs.110,000/day", image: ToyotaCamry, description: "Stylish and smooth with luxury features." },
    { name: "Audi", price: "Rs.115,000/day", image: AudiA6, description: "German engineering with powerful performance." },
    { name: "ToyotaFortuner", price: "Rs.130,000/day", image: ToyotaFortuner, description: "Classy and refined, ideal for luxury travel." },
    { name: "HyundaiElantra", price: "Rs.140,000/day", image: HyundaiElantra, description: "Electric and environmentally friendly." }
  ];

  const initialVisibleCars = 6;
  const [visibleCars, setVisibleCars] = useState(initialVisibleCars);
  const [selectedCar, setSelectedCar] = useState(null);

  const handleDetailsClick = (car) => {
    setSelectedCar(car);
  };

  const closeModal = () => {
    setSelectedCar(null);
  };

  const toggleView = () => {
    setVisibleCars(visibleCars >= cars.length ? initialVisibleCars : cars.length);
  };

  return (
    <section className="py-20 bg-gray-900 text-center text-white">
      <h2 className="text-4xl font-bold mb-8">Our Featured Cars</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {cars.slice(0, visibleCars).map((car, index) => (
          <div
            key={index}
            className="bg-gray-800 p-6 rounded-lg transform transition-transform duration-300 hover:scale-105" // Zoom-in effect on hover
          >
            <img
              src={car.image}
              alt={car.name}
              className="w-full h-40 object-cover rounded-lg mb-4 transform transition-transform duration-300 hover:scale-105" // Zoom-in effect on the image
            />
            <h3 className="text-2xl font-semibold">{car.name}</h3>
            <p className="text-gray-400 mt-2">{car.price}</p>
            <button
              onClick={() => handleDetailsClick(car)}
              className="mt-6 px-6 py-2 bg-blue-600 text-white rounded-lg"
            >
              Details
            </button>
          </div>
        ))}
      </div>

      <button
        onClick={toggleView}
        className="mt-8 px-6 py-2 bg-blue-600 text-white rounded-lg"
      >
        {visibleCars >= cars.length ? 'View Less Cars' : 'View More Cars'}
      </button>

      {selectedCar && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-gray-800 p-8 rounded-lg max-w-lg text-left">
            <h3 className="text-3xl font-semibold mb-4">{selectedCar.name}</h3>
            <img src={selectedCar.image} alt={selectedCar.name} className="w-full h-60 object-cover rounded-lg mb-4" />
            <p className="text-gray-400 mb-4">{selectedCar.description}</p>
            <p className="text-lg font-bold mb-4">{selectedCar.price}</p>
            <button onClick={closeModal} className="px-6 py-2 bg-red-600 text-white rounded-lg">
              Close
            </button>
          </div>
        </div>
      )}
    </section>
  );
}

export default FeaturedCars;
