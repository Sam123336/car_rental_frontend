// src/App.js
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { RentedCarsProvider } from "./components/context/RentedCarsContext";
import Header from "./components/Header";
import Footer from "./components/Footer";
import HeroSection from "./components/HeroSection";
import SearchSection from "./components/SearchSection";
import IconSection from "./components/IconSection";
import WorkingSteps from "./components/WorkingSteps";
import ExperienceSection from "./components/ExperienceSection";
import FeaturedCars from "./components/FeaturedCars";
import CarListPage from "./components/CarListPage";
import Rented from "./components/Rented";
import Login from "./components/Login";
import Signup from "./components/Signup"; // Import the Signup component

function App() {
  return (
    <RentedCarsProvider>
      <Router>
        <div className="bg-gray-900 text-white font-sans">
          <Header />
          <Routes>
            {/* Home Page Route */}
            <Route 
              path="/" 
              element={
                <>
                  <HeroSection />
                  <SearchSection />
                  <IconSection />
                  <WorkingSteps />
                  <ExperienceSection />
                  <FeaturedCars />
                </>
              } 
            />
            {/* Car List Route */}
            <Route path="/cars" element={<CarListPage />} />
            {/* Rented Cars Route */}
            <Route path="/rented" element={<Rented />} />
            {/* Login Route */}
            <Route path="/login" element={<Login />} />
            {/* Signup Route */}
            <Route path="/signup" element={<Signup />} /> {/* Add Signup route here */}
          </Routes>
          <Footer />
        </div>
      </Router>
    </RentedCarsProvider>
  );
}

export default App;
