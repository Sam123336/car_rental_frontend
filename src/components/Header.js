// src/components/Header.js
import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="bg-gray-800 p-4">
      <nav className="flex justify-between items-center">
        <h1 className="text-3xl font-bold text-white">CarRental</h1>
        <div className="flex space-x-4">
          <Link to="/" className="text-gray-300 hover:text-white">Home</Link>
          <Link to="/cars" className="text-gray-300 hover:text-white">Cars</Link>
          <Link to="/rented" className="text-gray-300 hover:text-white">Rented</Link>
          <Link to="/login" className="text-gray-300 hover:text-white">Login</Link>
        </div>
      </nav>
    </header>
  );
}

export default Header;
