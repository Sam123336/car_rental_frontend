// src/components/Login.js
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import './style/LoginSignup.css';

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    console.log("Login:", email, password);
    navigate("/");
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-800">
      <div className="bg-gray-900 p-8 rounded-lg shadow-lg max-w-md w-full">
        <h2 className="text-2xl font-bold text-center text-white mb-6">Login Form</h2>
        
        <div className="flex justify-center mb-6">
          <button className="bg-gradient-to-r from-blue-500 to-blue-700 text-white py-2 px-4 rounded-l-md">Login</button>
          <Link to="/signup" className="bg-gray-700 text-gray-300 py-2 px-4 rounded-r-md hover:bg-gray-600">
            Signup
          </Link>
        </div>
        
        <form onSubmit={handleLogin} className="space-y-4">
          <input
            type="email"
            placeholder="Email Address"
            className="w-full p-3 rounded-md bg-gray-800 border border-gray-600 text-gray-300 focus:outline-none focus:border-blue-500"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Password"
            className="w-full p-3 rounded-md bg-gray-800 border border-gray-600 text-gray-300 focus:outline-none focus:border-blue-500"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <div className="text-right">
            <a href="#" className="text-blue-400 hover:underline">Forgot password?</a>
          </div>
          <button
            type="submit"
            className="w-full bg-gradient-to-r from-blue-500 to-blue-700 text-white font-bold py-2 rounded-md"
          >
            Login
          </button>
        </form>
        
        <p className="text-center text-gray-400 mt-4">
          Not a member?{" "}
          <Link to="/signup" className="text-blue-400 hover:underline">
            Signup now
          </Link>
        </p>
      </div>
    </div>
  );
}

export default Login;