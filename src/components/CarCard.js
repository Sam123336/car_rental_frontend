// src/components/CarCard.js
import React, { useState, useContext } from "react";
import { RentedCarsContext } from "./context/RentedCarsContext";
import { FaTimes } from "react-icons/fa"; // Importing an icon for the close button

function CarCard({ car }) {
  const { addRentedCar } = useContext(RentedCarsContext);
  const [showForm, setShowForm] = useState(false);
  const [showDetails, setShowDetails] = useState(false);
  const [pickUpLocation, setPickUpLocation] = useState("");
  const [pickUpDate, setPickUpDate] = useState("");
  const [dropOffDate, setDropOffDate] = useState("");

  const handleBook = () => setShowForm(true);
  const handleDetails = () => setShowDetails(true);
  const handleCloseDetails = () => setShowDetails(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    addRentedCar({
      ...car,
      rentalDate: `Pickup: ${pickUpDate}, Dropoff: ${dropOffDate}`,
      pickUpLocation,
    });
    setShowForm(false);
  };

  return (
    <div className="car-card bg-gray-800 text-white p-4 rounded-lg shadow-lg transition-transform transform hover:scale-105 duration-300">
      <div className="car-image-container w-full h-52 overflow-hidden flex items-center justify-center rounded-t-lg">
        <img src={car.image} alt={car.name} className="car-image w-full h-40 object-cover mb-2" />
      </div>
      <h3 className="text-xl font-bold mb-2">{car.name}</h3>
      <p className="mb-2">{car.price}</p>
      <p className="text-sm mb-2">Type: {car.type}</p>
      <p className="text-sm mb-2">Doors: {car.doors}</p>
      <p className="text-sm mb-2">Seats: {car.seats}</p>
      <p className="text-sm mb-4">AC/Heater: {car.ac ? "Available" : "Not Available"}</p>
      <div className="flex justify-between">
        <button onClick={handleDetails} className="bg-gray-500 text-white py-1 px-4 rounded hover:bg-gray-600 transition">
          Details
        </button>
        <button onClick={handleBook} className="bg-blue-600 text-white py-1 px-4 rounded hover:bg-blue-700 transition">
          Book
        </button>
      </div>

      {/* Booking Form Modal */}
      {showForm && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-gray-800 p-4 rounded-lg shadow-lg w-80">
            <h2 className="text-lg font-bold text-white mb-2">Book {car.name}</h2>
            <form onSubmit={handleSubmit}>
              <input
                type="text"
                placeholder="Pick-Up Location"
                value={pickUpLocation}
                onChange={(e) => setPickUpLocation(e.target.value)}
                className="w-full mb-2 p-2 border border-gray-600 rounded bg-gray-700 text-white placeholder-gray-400"
                required
              />
              <input
                type="date"
                placeholder="Pick-Up Date"
                value={pickUpDate}
                onChange={(e) => setPickUpDate(e.target.value)}
                className="w-full mb-2 p-2 border border-gray-600 rounded bg-gray-700 text-white"
                required
              />
              <input
                type="date"
                placeholder="Drop-Off Date"
                value={dropOffDate}
                onChange={(e) => setDropOffDate(e.target.value)}
                className="w-full mb-2 p-2 border border-gray-600 rounded bg-gray-700 text-white"
                required
              />
              <div className="flex justify-end">
                <button
                  type="button"
                  onClick={() => setShowForm(false)}
                  className="mr-2 bg-gray-600 text-white py-1 px-4 rounded hover:bg-gray-700 transition"
                >
                  Cancel
                </button>
                <button type="submit" className="bg-blue-600 text-white py-1 px-4 rounded hover:bg-blue-700 transition">
                  Rent
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Car Details Modal */}
      {showDetails && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50 transition-opacity duration-300 ease-in-out">
          <div className="bg-gray-900 p-4 rounded-lg shadow-lg w-80 animate-fade-in">
            <div className="flex justify-between items-center mb-2">
              <h2 className="text-lg font-bold text-white">{car.name}</h2>
              <button onClick={handleCloseDetails} className="text-gray-400 hover:text-white transition">
                <FaTimes size={20} />
              </button>
            </div>
            <div className="car-image-container mb-2">
              <img src={car.image} alt={car.name} className="w-full h-40 object-cover rounded" />
            </div>
            <p className="text-sm mb-2">Price: {car.price}</p>
            <p className="text-sm mb-2">Type: {car.type}</p>
            <p className="text-sm mb-2">Doors: {car.doors}</p>
            <p className="text-sm mb-2">Seats: {car.seats}</p>
            <p className="text-sm mb-2">AC/Heater: {car.ac ? "Available" : "Not Available"}</p>
            <div className="flex justify-end">
              <button
                onClick={handleCloseDetails}
                className="bg-gray-600 text-white py-1 px-4 rounded hover:bg-gray-700 transition"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default CarCard;
