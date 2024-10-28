import React, { useState } from 'react';

function BookingForm() {
  // State to manage the active tab
  const [activeTab, setActiveTab] = useState('hotels');

  // Function to handle tab switching
  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div className="flex flex-col items-center w-3/4 px-4 py-6 md:px-8">

      
      <div className="w-full bg-white  rounded-lg shadow-lg p-6 mt-10">
      <div className="flex space-x-4 mb-4 ">
        <button
          className={`px-4 py-2 font-semibold rounded-t-md ${
            activeTab === 'hotels' ? 'text-white bg-gray-700' : 'text-gray-500 bg-gray-100'
          }`}
          onClick={() => handleTabClick('hotels')}
        >
          Hotels
        </button>
        <button
          className={`px-4 py-2 font-semibold rounded-t-md ${
            activeTab === 'transfers' ? 'text-white bg-gray-700' : 'text-gray-500 bg-gray-100'
          }`}
          onClick={() => handleTabClick('transfers')}
        >
          Transfers
        </button>
        <button
          className={`px-4 py-2 font-semibold rounded-t-md ${
            activeTab === 'packages' ? 'text-white bg-gray-700' : 'text-gray-500 bg-gray-100'
          }`}
          onClick={() => handleTabClick('packages')}
        >
          Packages
        </button>
      </div>
        {activeTab === 'hotels' && (
          <div className="flex flex-col md:flex-row md:space-x-4">
        
            <div className="flex-1 mb-4 md:mb-0">
              <label className="block mb-1 text-sm  font-medium">Select Preferred Hotel</label>
              <select className="w-full px-4 py-2 text-black border rounded-md border-gray-300">
                <option>Select Hotel</option>
                <option>KingsBurry</option>
                <option>Galleface</option>
                <option>Galadhari</option>

                
              </select>
            </div>
            <div className="flex-1 mb-4 md:mb-0">
              <label className="block mb-1 text-sm font-medium">Check In</label>
              <input type="date" className="w-full px-4 py-2 text-black border rounded-md border-gray-300" />
            </div>
            <div className="flex-1 mb-4 md:mb-0">
              <label className="block mb-1 text-sm font-medium">Check Out</label>
              <input type="date" className="w-full px-4 py-2 border text-black   rounded-md border-gray-300" />
            </div>
            <div className="flex-1 mb-4 md:mb-0">
              <label className="block mb-1 text-sm font-medium">Pax. Count</label>
              <select className="w-full px-4 py-2  text-black border rounded-md border-gray-300">
                <option>Person</option>
              
              </select>
            </div>
            <div className="flex-1 mb-4 md:mb-0">
              <label className="block mb-1 text-sm font-medium">Nationality</label>
              <input type="text" className="w-full px-4 py-2 border text-black  rounded-md border-gray-300" placeholder="Nationality" />
            </div>
          </div>
        )}

        {activeTab === 'transfers' && (
          <div className="flex flex-col md:flex-row md:space-x-4">
        
            <div className="flex-1 mb-4 md:mb-0">
              <label className="block mb-1 text-sm font-medium">Transfer Type</label>
              <select className="w-full px-4 py-2 border rounded-md border-gray-300">
                <option>Select Transfer Type</option>
           
              </select>
            </div>
            <div className="flex-1 mb-4 md:mb-0">
              <label className="block mb-1 text-sm font-medium">Pick-up Date</label>
              <input type="date" className="w-full px-4 py-2 border rounded-md border-gray-300" />
            </div>
            <div className="flex-1 mb-4 md:mb-0">
              <label className="block mb-1 text-sm font-medium">Drop-off Location</label>
              <input type="text" className="w-full px-4 py-2 border rounded-md border-gray-300" placeholder="Drop-off Location" />
            </div>
          </div>
        )}

        {activeTab === 'packages' && (
          <div className="flex flex-col md:flex-row md:space-x-4">
          
            <div className="flex-1 mb-4 md:mb-0">
              <label className="block mb-1 text-sm  font-medium">Select Preferred Hotel</label>
              <select className="w-full px-4 py-2 text-black border rounded-md border-gray-300">
                <option>Select Hotel</option>
                <option>KingsBurry</option>
                <option>Galleface</option>
                <option>Galadhari</option>

              </select>
            </div>
            <div className="flex-1 mb-4 md:mb-0">
              <label className="block mb-1 text-sm font-medium">Check In</label>
              <input type="date" className="w-full px-4 py-2 text-black border rounded-md border-gray-300" />
            </div>
            <div className="flex-1 mb-4 md:mb-0">
              <label className="block mb-1 text-sm font-medium">Check Out</label>
              <input type="date" className="w-full px-4 py-2 border text-black   rounded-md border-gray-300" />
            </div>
            <div className="flex-1 mb-4 md:mb-0">
              <label className="block mb-1 text-sm font-medium">Pax. Count</label>
              <select className="w-full px-4 py-2  text-black border rounded-md border-gray-300">
                <option>Person</option>

              </select>
            </div>
            <div className="flex-1 mb-4 md:mb-0">
              <label className="block mb-1 text-sm font-medium">Nationality</label>
              <input type="text" className="w-full px-4 py-2 border text-black  rounded-md border-gray-300" placeholder="Nationality" />
            </div>
          </div>
        )}

       
        <div className="mt-4">
          <button className="w-full px-6 py-2 font-semibold text-white bg-yellow-500 rounded-md">Request</button>
        </div>
      </div>
    </div>
  );
}

export default BookingForm;
