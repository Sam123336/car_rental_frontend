import React, { useContext } from "react";
import { RentedCarsContext } from "./context/RentedCarsContext";

function Rented() {
  const { rentedCars } = useContext(RentedCarsContext);

  return (
    <div className="min-h-screen p-4 flex flex-col bg-gray-900">
      <h2 className="text-2xl font-bold text-white">Rented Cars</h2>
      <ul className="space-y-4 mt-4 mb-0 pb-0">
        {rentedCars.length > 0 ? (
          rentedCars.map((car, index) => (
            <li key={index} className="bg-gray-800 p-4 rounded flex items-center space-x-4">
              <img src={car.image} alt={car.name} className="w-24 h-16 object-cover rounded" />
              <div>
                <h3 className="text-xl font-semibold text-white">{car.name}</h3>
                <p className="text-gray-400">Location: {car.pickUpLocation}</p>
                <p className="text-gray-400">Rental Date: {car.rentalDate}</p>
                <p className="text-gray-400">Cost: {car.cost}</p>
              </div>
            </li>
          ))
        ) : (
          <p className="text-gray-400">No cars rented yet.</p>
        )}
      </ul>
    </div>
  );
}

export default Rented;
