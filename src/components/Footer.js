import React from 'react';

function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-400 py-10">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* About Us */}
          <div>
            <h3 className="text-xl font-semibold text-white mb-4">About CarRental</h3>
            <p className="text-gray-400">
              CarRental offers a premium car rental experience with top-tier services. Explore our wide range of vehicles to fit your style and needs.
            </p>
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-semibold text-white mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="/" className="hover:text-white">Home</a></li>
              <li><a href="/about" className="hover:text-white">About Us</a></li>
              <li><a href="/cars" className="hover:text-white">Our Cars</a></li>
              <li><a href="/contact" className="hover:text-white">Contact</a></li>
              <li><a href="/faq" className="hover:text-white">FAQ</a></li>
            </ul>
          </div>
          
          
          {/* Contact Information */}
          <div>
            <h3 className="text-xl font-semibold text-white mb-4">Contact Us</h3>
            <p className="text-gray-400">Email: sambitghosh56@gmail.com</p>
            <p className="text-gray-400">Phone: +91771918391</p>
            <p className="text-gray-400">Jalandhar - Delhi, Grand Trunk Rd, Phagwara, Punjab 144411</p>
          </div>
        </div>
        
        <div className="mt-8 border-t border-gray-700 pt-6 flex flex-col md:flex-row items-center justify-between">
          {/* Social Media Icons */}
          <div className="flex space-x-4 mb-4 md:mb-0">
            <a href="https://facebook.com" className="hover:text-white" aria-label="Facebook">
              <i className="fab fa-facebook fa-lg"></i>
            </a>
            <a href="https://twitter.com" className="hover:text-white" aria-label="Twitter">
              <i className="fab fa-twitter fa-lg"></i>
            </a>
            <a href="https://instagram.com" className="hover:text-white" aria-label="Instagram">
              <i className="fab fa-instagram fa-lg"></i>
            </a>
            <a href="https://linkedin.com" className="hover:text-white" aria-label="LinkedIn">
              <i className="fab fa-linkedin fa-lg"></i>
            </a>
          </div>
          
          {/* Copyright */}
          <p className="text-sm text-gray-500">&copy; 2024 CarRental. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
