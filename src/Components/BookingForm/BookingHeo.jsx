import React, { useState } from 'react';

const BookingHero = () => {
  const [activeTab, setActiveTab] = useState('Hotel');

  const handleTabSwitch = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div className="max-w-4xl mx-auto p-8 bg-white bg-opacity-80 shadow-lg rounded-lg mt-8">
      {/* Tabs */}
      <div className="flex justify-center space-x-6 mb-6 border-b pb-4">
        {['Hotel', 'Package', 'Transfer'].map((tab) => (
          <button
            key={tab}
            onClick={() => handleTabSwitch(tab)}
            className={`${
              activeTab === tab
                ? 'border-b-4 border-blue-500 text-blue-500'
                : 'text-gray-500'
            } pb-2 text-lg font-semibold focus:outline-none transition duration-300`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Tab Content */}
      <div className="flex flex-col items-center p-6 bg-gray-50 rounded-lg shadow-md w-full">
        {/* Form */}
        {activeTab === 'Hotel' && (
          <form className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 w-full max-w-4xl">
            <div>
              <label className="block text-gray-700">Select Hotel</label>
              <select className="w-full p-3 border border-gray-300 rounded-lg mt-1 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-400">
                <option>Select Hotel</option>
                <option>KingsBurry</option>
                <option>Galleface</option>
                <option>Galadhari</option>
              </select>
            </div>
            <div>
              <label className="block text-gray-700">Check-in Date</label>
              <input
                type="date"
                className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
            </div>
            <div>
              <label className="block text-gray-700">Check-out Date</label>
              <input
                type="date"
                className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
            </div>
            <div>
              <label className="block text-gray-700">Nationality</label>
              <input
                type="text"
                className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                placeholder="Enter Nationality"
              />
            </div>
            <div className="col-span-1 md:col-span-2 lg:col-span-4">
              <button
                type="submit"
                className="w-full mt-4 py-3 px-4 bg-blue-500 text-white rounded-lg hover:bg-blue-600 focus:outline-none"
              >
                Search Hotels
              </button>
            </div>
          </form>
        )}

        {activeTab === 'Package' && (
          <form className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 w-full max-w-4xl">
            <div>
              <label className="block text-gray-700">Location</label>
              <input
                type="text"
                className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                placeholder="Enter location"
              />
            </div>
            <div>
              <label className="block text-gray-700">Location</label>
              <input
                type="text"
                className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                placeholder="Enter location"
              />
            </div>
            <div>
              <label className="block text-gray-700">Start Date</label>
              <input
                type="date"
                className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
            </div>
            <div>
              <label className="block text-gray-700">End Date</label>
              <input
                type="date"
                className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
            </div>
            <div className="col-span-1 md:col-span-2 lg:col-span-4">
              <button
                type="submit"
                className="w-full mt-4 py-3 px-4 bg-green-500 text-white rounded-lg hover:bg-green-600 focus:outline-none"
              >
                Search Packages
              </button>
            </div>
          </form>
        )}

        {activeTab === 'Transfer' && (
          <form className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 w-full max-w-4xl">
            <div>
              <label className="block text-gray-700">Pick-up Location</label>
              <input
                type="text"
                className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                placeholder="Enter pick-up location"
              />
            </div>
            <div>
              <label className="block text-gray-700">Drop-off Location</label>
              <input
                type="text"
                className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                placeholder="Enter drop-off location"
              />
            </div>
            <div>
              <label className="block text-gray-700">Transfer Date</label>
              <input
                type="date"
                className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
            </div>
            <div>
              <label className="block text-gray-700">Location</label>
              <input
                type="text"
                className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                placeholder="Enter location"
              />
            </div>
            <div className="col-span-1 md:col-span-2 lg:col-span-4">
              <button
                type="submit"
                className="w-full mt-4 py-3 px-4 bg-yellow-500 text-white rounded-lg hover:bg-yellow-600 focus:outline-none"
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
