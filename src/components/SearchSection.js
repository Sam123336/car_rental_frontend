import React, { useState } from 'react';
import ReservationForm from './ReservationForm';

function SearchSection() {
  const [showForm, setShowForm] = useState(false);
  const [location, setLocation] = useState('');

  const handleSearchClick = () => {
    if (location) {
      setShowForm(true);
    } else {
      alert('Please enter a location.');
    }
  };

  const handleCloseForm = () => {
    setShowForm(false);
    setLocation('');
  };

  return (
    <section className="flex justify-center py-10 bg-gray-700">
      <div className="flex items-center space-x-4">
        <input
          type="text"
          placeholder="Enter Location"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          className="px-4 py-2 rounded bg-gray-600 text-white placeholder-gray-400"
        />
        <button onClick={handleSearchClick} className="px-6 py-2 bg-blue-600 rounded-lg text-white">
          Search
        </button>
      </div>
      {showForm && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="relative bg-white p-8 rounded-lg shadow-lg w-full max-w-lg mx-auto">
            <button
              onClick={handleCloseForm}
              className="absolute top-2 right-2 text-gray-600 hover:text-gray-800"
            >
              ✕
            </button>
            <ReservationForm onClose={handleCloseForm} />
          </div>
        </div>
      )}
    </section>
  );
}

export default SearchSection;
