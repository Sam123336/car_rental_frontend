import React, { useEffect } from 'react'; 
import heroImage from './images/car.png'; // Adjust the path based on your directory structure



function HeroSection() {
  useEffect(() => {
    const img = document.getElementById('hero-image');
    img.classList.add('animate-zoom-out'); // Add the animation class
  }, []);

  return (
    <section
      className="relative text-center py-10 md:py-16 bg-gray-800 bg-cover bg-center flex items-center justify-center overflow-hidden"
      style={{ backgroundImage: `url(${heroImage})`, height: '60vh' }} // Set a height for the hero section
    >
      <div className="absolute inset-0 bg-black opacity-50"></div> {/* Overlay for better text visibility */}
      <img 
        id="hero-image"
        src={heroImage} 
        alt="Hero Car"
        className="object-cover transition-transform duration-1000 ease-in-out" // Smooth transition for zoom effect
        style={{ maxHeight: '100%', maxWidth: '100%', objectFit: 'contain' }} // Ensure the image fits within its container
      />
      <div className="relative z-10">
        <h1 className="text-3xl md:text-4xl font-bold text-white">We Rent the Highest Caliber Automobiles</h1>
        <p className="mt-4 text-gray-300 max-w-lg mx-auto">
          Choose from a variety of premium cars to make your journey memorable.
        </p>
        <div className="mt-6">
          <button className="px-4 py-2 bg-blue-600 text-white rounded-lg mr-2">Rent Now</button>
          <button className="px-4 py-2 bg-gray-700 text-white rounded-lg">Learn More</button>
        </div>
      </div>
    </section>
  );
}


export default HeroSection;
