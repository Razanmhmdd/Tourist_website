import React, { useState } from 'react';

const BookingHero = () => {
  const [activeTab, setActiveTab] = useState("hotels"); // Default to "hotels"

  return (
    <section className="bg-white bg-opacity-80 rounded-xl py-10 px-5 md:px-20">
      <div className="max-w-5xl mx-auto">
        
        {/* Tabs */}
        <div className="flex">
          {["Hotels", "Transfers", "Packages"].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab.toLowerCase())} // Update activeTab on click
              className={`flex-1 text-center py-3 text-lg font-semibold ${
                activeTab === tab.toLowerCase()
                  ? "bg-gray-800 text-white"
                  : "bg-gray-200 text-gray-600"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Form based on activeTab */}
        <div className="mt-5 bg-white bg-opacity-80 rounded-lg shadow-lg p-5 md:flex md:items-center space-y-4 md:space-y-0 md:space-x-4">
          
          {activeTab === "hotels" && (
            <>
              {/* Hotels Form */}
              <div className="flex-1">
                <label className="block text-gray-700">Select Hotel</label>
                <select className="w-full p-3 border border-gray-300 rounded-md mt-1 text-gray-700">
                  <option>Select Hotel</option>
                  <option>KingsBurry</option>
                  <option>Galleface</option>
                  <option>Galadhari</option>
                </select>
              </div>
              <div className="flex-1">
                <label className="block text-gray-700">Check In</label>
                <input
                  type="date"
                  className="w-full p-3 border border-gray-300 rounded-md mt-1 text-gray-700"
                  placeholder="dd/mm/yyyy"
                />
              </div>
              <div className="flex-1">
                <label className="block text-gray-700">Check Out</label>
                <input
                  type="date"
                  className="w-full p-3 border border-gray-300 rounded-md mt-1 text-gray-700"
                  placeholder="dd/mm/yyyy"
                />
              </div>
              <div className="flex-1">
                <label className="block text-gray-700">Pax. Count</label>
                <input
                  type="number"
                  min="1"
                  max="10"
                  defaultValue="1"
                  className="w-full p-3 border border-gray-300 rounded-md mt-1 text-gray-700"
                  placeholder="Person"
                />
              </div>
              <div className="flex-1">
                <label className="block text-gray-700">Nationality</label>
                <input
                  type="text"
                  className="w-full p-3 border border-gray-300 rounded-md mt-1 text-gray-700"
                  placeholder="Nationality"
                />
              </div>
            </>
          )}

          {activeTab === "transfers" && (
            <>
              {/* Transfers Form */}
              <div className="mt-5 bg-white bg-opacity-80 rounded-lg shadow-lg p-5 md:flex md:items-center space-y-4 md:space-y-0 md:space-x-4">
                <label className="block text-gray-700">Select Transfer Type</label>
                <select className="w-full p-3 border border-gray-300 rounded-md mt-1 text-gray-700">
                  <option>Select Transfer</option>
                  <option>Airport</option>
                  <option>Hotel to Hotel</option>
                  <option>City Tour</option>
                </select>
              </div>
              <div className="flex-1">
                <label className="block text-gray-700">Pickup Date</label>
                <input
                  type="date"
                  className="w-full p-3 border border-gray-300 rounded-md mt-1 text-gray-700"
                  placeholder="dd/mm/yyyy"
                />
              </div>
              <div className="flex-1">
                <label className="block text-gray-700">Pax. Count</label>
                <input
                  type="number"
                  min="1"
                  max="10"
                  defaultValue="1"
                  className="w-full p-3 border border-gray-300 rounded-md mt-1 text-gray-700"
                  placeholder="Person"
                />
              </div>
            </>
          )}

          {activeTab === "packages" && (
            <>
              {/* Packages Form */}
              <div className="flex-1">
                <label className="block text-gray-700">Select Package</label>
                <select className="w-full p-3 border border-gray-300 rounded-md mt-1 text-gray-700">
                  <option>Select Package</option>
                  <option>Family Package</option>
                  <option>Honeymoon Package</option>
                  <option>Adventure Package</option>
                </select>
              </div>
              <div className="flex-1">
                <label className="block text-gray-700">Start Date</label>
                <input
                  type="date"
                  className="w-full p-3 border border-gray-300 rounded-md mt-1 text-gray-700"
                  placeholder="dd/mm/yyyy"
                />
              </div>
              <div className="flex-1">
                <label className="block text-gray-700">End Date</label>
                <input
                  type="date"
                  className="w-full p-3 border border-gray-300 rounded-md mt-1 text-gray-700"
                  placeholder="dd/mm/yyyy"
                />
              </div>
              <div className="flex-1">
                <label className="block text-gray-700">Pax. Count</label>
                <input
                  type="number"
                  min="1"
                  max="10"
                  defaultValue="1"
                  className="w-full p-3 border border-gray-300 rounded-md mt-1 text-gray-700"
                  placeholder="Person"
                />
              </div>
            </>
          )}

          {/* Request Button */}
          <div className="flex-1 md:w-auto">
            <button className="w-full md:w-auto px-6 py-3 bg-yellow-500 text-white font-semibold rounded-md hover:bg-yellow-600 mt-4 md:mt-0">
              Request
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BookingHero;
