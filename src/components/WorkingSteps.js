import React from 'react';
function WorkingSteps() {
  return (
    <section className="py-20 text-center bg-gray-900">
      <h2 className="text-4xl font-bold mb-8">Our Working Steps</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
        <div className="bg-gray-800 p-6 rounded-lg">
          <h3 className="text-2xl font-semibold mb-4">Choose Location</h3>
          <p className="text-gray-400">Select your desired location to pick up the vehicle.</p>
        </div>
        <div className="bg-gray-800 p-6 rounded-lg">
          <h3 className="text-2xl font-semibold mb-4">Pick-Up Date</h3>
          <p className="text-gray-400">Specify when you would like to pick up the vehicle.</p>
        </div>
        <div className="bg-gray-800 p-6 rounded-lg">
          <h3 className="text-2xl font-semibold mb-4">Enjoy Your Ride</h3>
          <p className="text-gray-400">Get the car and enjoy your journey in style and comfort.</p>
        </div>
      </div>
    </section>
  );
}
export default WorkingSteps;