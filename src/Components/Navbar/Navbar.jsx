import React, { useState } from 'react';
import logo from "../../assets/img/logo.png";
import { ImMenu } from "react-icons/im";


const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div className="navbar bg-transparent flex items-center justify-between px-4 py-2">
      {/* Logo Section */}
      <div className="flex-1">
        <a className="btn btn-ghost">
          <img src={logo} alt="Logo" className="h-12 w-auto" />
        </a>
      </div>

      {/* Mobile Menu Button */}
      <div className="flex-none lg:hidden">
        <button 
          className="btn btn-ghost" 
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          <ImMenu />
        </button>
      </div>

      {/* Desktop Menu */}
      <div className="hidden lg:flex flex-none">
        <ul className="menu menu-horizontal px-1 text-black font-semibold">
          <li><a href="#">Home</a></li>
          <li>
            <details>
              <summary>Sri Lanka</summary>
              <ul className="bg-base-100 rounded-t-none p-2">
                <li><a href="#">About Sri Lanka</a></li>
                <li><a href="#">When to Visit Sri Lanka</a></li>
                <li><a href="#">Festival & Events</a></li>
                <li><a href="#">Food & Drink</a></li>
                <li><a href="#">Important Facts</a></li>
              </ul>
            </details>
          </li>
          <li>
            <details>
              <summary>Package</summary>
              <ul className="bg-base-100 rounded-t-none p-2">
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

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden absolute top-16 left-0 w-full bg-white shadow-lg rounded-lg">
          <ul className="menu menu-vertical p-4 text-gray-700">
            <li><a href="#">Home</a></li>
            <li>
              <details>
                <summary>Sri Lanka</summary>
                <ul className="bg-base-100 rounded-t-none p-2">
                  <li><a href="#">About Sri Lanka</a></li>
                  <li><a href="#">When to Visit Sri Lanka</a></li>
                  <li><a href="#">Festival & Events</a></li>
                  <li><a href="#">Food & Drink</a></li>
                  <li><a href="#">Important Facts</a></li>
                </ul>
              </details>
            </li>
            <li>
              <details>
                <summary>Package</summary>
                <ul className="bg-base-100 rounded-t-none p-2">
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
    </div>
  );
};

export default Navbar;
