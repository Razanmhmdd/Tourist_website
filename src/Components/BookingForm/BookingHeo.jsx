import React, { useState } from 'react';

const BookingHero = () => {
  const [activeTab, setActiveTab] = useState('Hotel');

  const handleTabSwitch = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div className="max-w-4xl mx-auto p-2 sm:p-6 bg-white bg-opacity-75 shadow-lg rounded-lg mt-16 -mt-0">
      {/* Tabs */}
      <div className="flex justify-center space-x-2 sm:space-x-4 mb-4 border-b pb-2">
        {['Hotel', 'Package', 'Transfer'].map((tab) => (
          <button
            key={tab}
            onClick={() => handleTabSwitch(tab)}
            className={`${
              activeTab === tab
                ? 'border-b-2 border-blue-500 text-blue-500'
                : 'text-gray-500'
            } pb-1 text-sm sm:text-base font-medium focus:outline-none transition duration-300`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Tab Content */}
      <div className="p-4 -mb-5 sm:p-6 bg-gray-50 rounded-lg shadow-md w-full">
        {/* Form */}
        {activeTab === 'Hotel' && (
          <form className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <div>
              <label className="block text-gray-600 text-sm mb-1">Select Hotel</label>
              <select className="w-full p-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-1 focus:ring-blue-400">
                <option>Select Hotel</option>
                <option>KingsBurry</option>
                <option>Galleface</option>
                <option>Galadhari</option>
              </select>
            </div>
            <div>
              <label className="block text-gray-600 text-sm mb-1">Check-in Date</label>
              <input
                type="date"
                className="w-full p-2 border rounded-md text-sm focus:outline-none focus:ring-1 focus:ring-blue-400"
              />
            </div>
            <div>
              <label className="block text-gray-600 text-sm mb-1">Check-out Date</label>
              <input
                type="date"
                className="w-full p-2 border rounded-md text-sm focus:outline-none focus:ring-1 focus:ring-blue-400"
              />
            </div>
            <div>
              <label className="block text-gray-600 text-sm mb-1">Nationality</label>
              <input
                type="text"
                className="w-full p-2 border rounded-md text-sm focus:outline-none focus:ring-1 focus:ring-blue-400"
                placeholder="Enter Nationality"
              />
            </div>
            <div className="col-span-1 sm:col-span-2 lg:col-span-4">
              <button
                type="submit"
                className="w-full py-2 bg-blue-500 text-white text-sm rounded-md hover:bg-blue-600 focus:outline-none"
              >
                Search Hotels
              </button>
            </div>
          </form>
        )}

        {activeTab === 'Package' && (
          <form className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <div>
              <label className="block text-gray-600 text-sm mb-1">Location</label>
              <input
                type="text"
                className="w-full p-2 border rounded-md text-sm focus:outline-none focus:ring-1 focus:ring-blue-400"
                placeholder="Enter location"
              />
            </div>
            <div>
              <label className="block text-gray-600 text-sm mb-1">Destination</label>
              <input
                type="text"
                className="w-full p-2 border rounded-md text-sm focus:outline-none focus:ring-1 focus:ring-blue-400"
                placeholder="Enter destination"
              />
            </div>
            <div>
              <label className="block text-gray-600 text-sm mb-1">Start Date</label>
              <input
                type="date"
                className="w-full p-2 border rounded-md text-sm focus:outline-none focus:ring-1 focus:ring-blue-400"
              />
            </div>
            <div>
              <label className="block text-gray-600 text-sm mb-1">End Date</label>
              <input
                type="date"
                className="w-full p-2 border rounded-md text-sm focus:outline-none focus:ring-1 focus:ring-blue-400"
              />
            </div>
            <div className="col-span-1 sm:col-span-2 lg:col-span-4">
              <button
                type="submit"
                className="w-full py-2 bg-green-500 text-white text-sm rounded-md hover:bg-green-600 focus:outline-none"
              >
                Search Packages
              </button>
            </div>
          </form>
        )}

        {activeTab === 'Transfer' && (
          <form className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <div>
              <label className="block text-gray-600 text-sm mb-1">Pick-up Location</label>
              <input
                type="text"
                className="w-full p-2 border rounded-md text-sm focus:outline-none focus:ring-1 focus:ring-blue-400"
                placeholder="Enter pick-up location"
              />
            </div>
            <div>
              <label className="block text-gray-600 text-sm mb-1">Drop-off Location</label>
              <input
                type="text"
                className="w-full p-2 border rounded-md text-sm focus:outline-none focus:ring-1 focus:ring-blue-400"
                placeholder="Enter drop-off location"
              />
            </div>
            <div>
              <label className="block text-gray-600 text-sm mb-1">Transfer Date</label>
              <input
                type="date"
                className="w-full p-2 border rounded-md text-sm focus:outline-none focus:ring-1 focus:ring-blue-400"
              />
            </div>
            <div>
              <label className="block text-gray-600 text-sm mb-1">Additional Info</label>
              <input
                type="text"
                className="w-full p-2 border rounded-md text-sm focus:outline-none focus:ring-1 focus:ring-blue-400"
                placeholder="Enter additional info"
              />
            </div>
            <div className="col-span-1 sm:col-span-2 lg:col-span-4">
              <button
                type="submit"
                className="w-full py-2 bg-yellow-500 text-white text-sm rounded-md hover:bg-yellow-600 focus:outline-none"
              >
                Book Transfer
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};

export default BookingHero;
