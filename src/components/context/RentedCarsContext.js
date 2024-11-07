import React, { createContext, useState } from 'react';

export const RentedCarsContext = createContext();

export const RentedCarsProvider = ({ children }) => {
  const [rentedCars, setRentedCars] = useState([]);

  const addRentedCar = (car) => setRentedCars([...rentedCars, car]);

  return (
    <RentedCarsContext.Provider value={{ rentedCars, addRentedCar }}>
      {children}
    </RentedCarsContext.Provider>
  );
};
