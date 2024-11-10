import React, { useRef } from 'react';
import { motion, useScroll } from 'framer-motion';

import BMW from "./images/BMW.png";
import Cadillac from "./images/car.png";
import Lamborghini from "./images/Lamborghini.png";
import jeep from "./images/jeep.png";
import ford from "./images/ford.png";
import nisaan from "./images/nisaan.png";
import car from "./images/car12.png";
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


function IconSection() {
  const brands = [
   
    { name: 'Brand 2', image: Cadillac },
    { name: 'Brand 3', image: Lamborghini },
    { name: 'Brand 4', image: car},
    { name: 'Brand 2', image: Cadillac },
    { name: 'Brand 3', image: Lamborghini },
  
    { name: 'Brand 2', image: Cadillac },
    { name: 'Brand 3', image: Lamborghini },
    { name: 'Brand 4', image: car},
    { name: 'Brand 2', image: Cadillac },
  
    { name: 'Brand 4', image: car},
 
    { name: 'Brand 3', image: Lamborghini },
    { name: 'Brand 4', image: car},
   
   
    { name: 'Brand 5', image: ford },
    
  ];

  const ref = useRef(null);
  const { scrollXProgress } = useScroll({ container: ref });

  return (
    <section className="py-6 bg-gray-800 overflow-x-hidden">
      <ul
        ref={ref}
        className="flex space-x-10 scrollbar-hide px-4" // Increased spacing between items
        style={{
          whiteSpace: 'nowrap',
          overflowY: 'hidden',
          paddingBottom: '10px',
          margin: '0',
          height: '200px', // Adjusted for larger component height
        }}
      >
        {brands.map((brand, index) => (
          <motion.li
            key={index}
            className="flex-shrink-0 text-center text-gray-400 w-64" // Adjusted width for larger items
            whileHover={{ scale: 1.1 }}
          >
            <img
              src={brand.image}
              alt={`${brand.name} car`}
              className="w-96 h-56 mx-auto mb-4" // Adjusted image size
            />
            <div className="text-lg font-semibold">{brand.name}</div> {/* Slightly larger font for brand name */}
          </motion.li>
        ))}
      </ul>
    </section>
  );
}

export default IconSection;
