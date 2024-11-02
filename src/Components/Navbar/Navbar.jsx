
import React, { useState } from 'react';

import logo from "/img/LOGO.png";
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-transperant text-white px-4 py-3 md:px-10 ">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <div className="text-xl font-bold"> <button><img src={logo} alt="Logo" className="h-12 w-auto" /></button></div>
        <div className="hidden lg:flex flex-none">
          <ul className="menu menu-horizontal px-1 font-semibold space-x-4">
            <li><a href="#">Home</a></li>
            <li>
              <details className="relative">
                <summary>Sri Lanka</summary>
                <ul className="absolute top-full left-0 bg-white rounded-t-none p-2 text-black z-auto">
                  <li><a href="#">About Sri Lanka</a></li>
                  <li><a href="#">When to Visit Sri Lanka</a></li>
                  <li><a href="#">Festival & Events</a></li>
                  <li><a href="#">Food & Drink</a></li>
                  <li><a href="#">Important Facts</a></li>
                </ul>
              </details>
            </li>
            <li>
              <details className="relative">
                <summary>Package</summary>
                <ul className="absolute top-full left-0 bg-white rounded-t-none p-2 text-black">
                  <li><a href="#">Ramayana Yatra in Sri Lanka</a></li>
                  <li><a href="#">Sri Lanka Nightlife Package</a></li>
                  <li><a href="#">Sri Lanka Honeymoon Package</a></li>
                  <li><a href="#">Kandy Perehara Package</a></li>
                  <li><a href="#">Valentine's Package</a></li>
                </ul>
              </details>
            </li>
            <li><a href="#">Destinations</a></li>
            <li><a href="#">Special Offers</a></li>
            <li><a href="#">About Us</a></li>
            <li><a href="#">Contact Us</a></li>
          </ul>
        </div>
        <div className="lg:hidden">
          <button 
            onClick={() => setIsOpen(!isOpen)} 
            className="text-xl focus:outline-none">
            ☰
          </button>
        </div>
      </div>
      {isOpen && (
        <div className="lg:hidden">
          <ul className="menu bg-gray-700 text-white p-4 space-y-2">
            <li><a href="#">Home</a></li>
            <li>
              <details className="absolute">
                <summary>Sri Lanka</summary>
                <ul className="bg-gray-600 rounded-t-none p-2 text-white">
                  <li><a href="#">About Sri Lanka</a></li>
                  <li><a href="#">When to Visit Sri Lanka</a></li>
                  <li><a href="#">Festival & Events</a></li>
                  <li><a href="#">Food & Drink</a></li>
                  <li><a href="#">Important Facts</a></li>
                </ul>
              </details>
            </li>
            <li>
              <details className="relative">
                <summary>Package</summary>
                <ul className="bg-gray-600 rounded-t-none p-2 text-white">
                  <li><a href="#">Ramayana Yatra in Sri Lanka</a></li>
                  <li><a href="#">Sri Lanka Nightlife Package</a></li>
                  <li><a href="#">Sri Lanka Honeymoon Package</a></li>
                  <li><a href="#">Kandy Perehara Package</a></li>
                  <li><a href="#">Valentine's Package</a></li>
                </ul>
              </details>
            </li>
            <li><a href="#">Destinations</a></li>
            <li><a href="#">Special Offers</a></li>
            <li><a href="#">About Us</a></li>
            <li><a href="#">Contact Us</a></li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
