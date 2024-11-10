// src/components/ReservationForm.js
import React, { useState, useContext } from 'react';
import { RentedCarsContext } from './context/RentedCarsContext'; // Adjust the import path if necessary
import BMW from "./images/BMW.png";
import Cadillac from "./images/cadalic.png";
import Lamborghini from "./images/Lamborghini.png";
import Jeep from "./images/jeep.png";
import Ford from "./images/ford.png";
import Nissan from "./images/nisaan.png";
import { baseUrl } from '../url';

function ReservationForm({ onClose }) {
  const [email, setEmail] = useState('');
  const [firstName, setFirstName] = useState('');
  const [selectedCar, setSelectedCar] = useState('');
  const { addRentedCar } = useContext(RentedCarsContext); // Use context to add rented car

  const availableCars = [
    { name: 'BMW', imgSrc: BMW, cost: 'Rs.150,000/day' },
    { name: 'Cadillac', imgSrc: Cadillac, cost: 'Rs.200,000/day' },
    { name: 'Ford', imgSrc: Ford, cost: 'Rs.120,000/day' },
    { name: 'Jeep', imgSrc: Jeep, cost: 'Rs.140,000/day' },
    { name: 'Lamborghini', imgSrc: Lamborghini, cost: 'Rs.30,000/day' },
    { name: 'Nissan', imgSrc: Nissan, cost: 'Rs.100,000/day' },
  ];

  const handleReserve = async (e) => {
    e.preventDefault();
    if (!selectedCar) {
      alert('Please select a car.');
      return;
    }

    const reservedCar = availableCars.find(car => car.name === selectedCar);

    if (reservedCar) {
      addRentedCar({
        name: reservedCar.name,
        rentalDate: new Date().toISOString().split('T')[0],
        cost: reservedCar.cost,
        image: reservedCar.imgSrc
      });

      alert(`Reservation for ${reservedCar.name} confirmed!`);
    }

    onClose();
      // Send confirmation email
  
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center modal-background">
      <form onSubmit={handleReserve} className="relative space-y-4 modal-form p-6 rounded shadow-lg max-w-md w-full">
        
        {/* Close button */}
        <button onClick={onClose} className="absolute top-4 right-4 text-gray-400 hover:text-red-500 text-2xl">
          ✂
        </button>

        <h2 className="text-2xl font-bold">Complete Reservation</h2>
        <p className="text-sm text-gray-400">
          Upon completing this reservation enquiry, you will receive:
        </p>

        <div>
          <label className="text-gray-300">Pick-up Date & Time</label>
          <input
            type="datetime-local"
            className="w-full p-2 border border-gray-600 bg-gray-800 text-gray-200 rounded"
            required
          />
        </div>

        <div>
          <label className="text-gray-300">Drop-off Date & Time</label>
          <input
            type="datetime-local"
            className="w-full p-2 border border-gray-600 bg-gray-800 text-gray-200 rounded"
            required
          />
        </div>

        <div>
          <label className="text-gray-300">First Name</label>
          <input
            type="text"
            className="w-full p-2 border border-gray-600 bg-gray-800 text-gray-200 rounded"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            required
          />
        </div>

        <div>
          <label className="text-gray-300">Email</label>
          <input
            type="email"
            className="w-full p-2 border border-gray-600 bg-gray-800 text-gray-200 rounded"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>

        <div>
          <label className="text-gray-300">Select Car</label>
          <div className="w-full p-2 border border-gray-600 bg-gray-800 rounded">
            {availableCars.map((car, index) => (
              <div
                key={index}
                onClick={() => setSelectedCar(car.name)}
                className={`flex items-center justify-between p-2 cursor-pointer hover:bg-gray-700 rounded ${
                  selectedCar === car.name ? "bg-gray-700" : ""
                }`}
              >
                <div className="flex items-center">
                  <img src={car.imgSrc} alt={`${car.name} car`} className="w-12 h-8 mr-4" />
                  <span>{car.name}</span>
                </div>
                <span className="text-sm font-semibold text-gray-400">{car.cost}</span>
              </div>
            ))}
          </div>
        </div>

        <button type="submit" className="w-full bg-gray-700 text-gray-200 py-2 rounded hover:bg-gray-600 transition">
          Reserve Now
        </button>
      </form>
    </div>
  );
}

export default ReservationForm;
