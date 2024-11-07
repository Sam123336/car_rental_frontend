import React, { useEffect, useState } from 'react';
import ford from './images/car12.png';

function ExperienceSection() {
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section className="py-20 bg-gray-800 relative">
      <div className="text-right mb-8 ">
        <h2 className="text-4xl font-bold">Feel the Best Experience With Our Rental Deals</h2>
        <p className="text-gray-400 mt-4">Deals for every budget, first-rate guarantee, and 24/7 support.</p>
      </div>
      
      {/* Top-left larger glass effect card */}
      <div className="glass-card absolute top-10 left-10 p-8 text-lg max-w-md">
        <h3 className="text-2xl font-semibold">Exclusive Offers and Unbeatable Prices</h3>
        <p className="mt-4">
          Unlock the best rental deals tailored to your needs! Whether you're looking for a short-term rental or a 
          long-term lease, we have a range of options at prices you won’t find anywhere else.
        </p>
        <p className="mt-4">
          Our special promotions include:
          <ul className="list-disc list-inside mt-2">
            <li>Weekend discounts for last-minute plans</li>
            <li>Long-term rental packages with flexible options</li>
            <li>Holiday season special rates for popular destinations</li>
            <li>Luxury car rentals with exclusive offers</li>
          </ul>
        </p>
        <p className="mt-4">
          With our best-price guarantee, you can travel with peace of mind knowing that you're getting top value 
          for every mile. Don't miss out on our limited-time offers!
        </p>
      </div>
      
      {/* Bottom-right glass effect card */}
      <div className="glass-card absolute bottom-10 right-10 p-8 text-lg max-w-xs">
        <h3 className="text-2xl font-semibold">24/7 Support</h3>
        <p className="mt-4">
          Our dedicated support team is available around the clock to ensure a smooth rental experience. 
          Whether you need roadside assistance or have a question, we're here to help—anytime, anywhere.
        </p>
      </div>

      <div className="max-w-4xl mx-auto">
        <img
          src={ford}
          alt="Car"
          className="mx-auto rounded-lg"
          style={{
            transform: `translateX(${scrollPosition - window.innerWidth / 2}px)`,
            transition: 'transform 0.1s linear'
          }}
        />
      </div>
    </section>
  );
}

export default ExperienceSection;
