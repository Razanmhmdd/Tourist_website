import React from 'react';

const Youtube = () => {
  return (
    <div className="flex flex-col lg:flex-row items-center lg:items-start bg-white py-10 px-6 lg:px-16" >
      <div className="container mx-auto space-y-12">
        {/* Section 1 */}
        <div className="flex flex-col lg:flex-row items-center justify-between space-y-6 lg:space-y-0 lg:space-x-8 bg-gray-50 p-8 rounded-lg shadow-md">
          {/* Video on Left */}
          <div className="lg:w-1/2">
            <iframe
              className="w-full aspect-video rounded-lg shadow-lg"
              src="https://www.youtube.com/embed/YX_u14psRCs?si=D823F37xcc4vmhfL"
              title="Welcome to Sri Lanka"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
          {/* Text on Right */}
          <div className="lg:w-1/2">
            <h2 className="text-3xl font-bold text-blue-900 mb-4">WELCOME TO SRI LANKA</h2>
            <p className="text-gray-700 text-justify">
              Welcome to Sri Lanka, the Pearl of the Indian Ocean. Discover a captivating blend of ancient heritage, stunning landscapes, and warm hospitality. From the golden beaches and lush rainforests to the vibrant cities and serene hill country, Sri Lanka offers an unforgettable adventure for every traveler. Immerse yourself in rich cultures, savor exquisite cuisine, and encounter wildlife wonders. Let the rhythms of this tropical paradise enchant you. Your journey begins here.
            </p>
          </div>
        </div>

        {/* Section 2 */}
        <div className="flex flex-col lg:flex-row items-center justify-between space-y-6 lg:space-y-0 lg:space-x-8 bg-gray-50 p-8 rounded-lg shadow-md">
          {/* Video on Left */}
          <div className="lg:w-1/2">
            <iframe
              className="w-full aspect-video rounded-lg shadow-lg"
              src="https://www.youtube.com/embed/OxFOuZCokLk?si=rM93D3MRI9nDF5AE"
              title="Unique History of Sri Lanka"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
          {/* Text on Right */}
          <div className="lg:w-1/2">
            <h2 className="text-3xl font-bold text-blue-900 mb-4">UNIQUE HISTORY OF SRI LANKA</h2>
            <p className="text-gray-700 text-justify">
              Our history and culture and rich heritage is not something frozen in the relics of our past, but continues on to our present. The wild beauty of our poetic landscapes, the warm hearts of our people; always smiling, willing and sharing, you will experience the wonder of the island with every morning sunrise and every fiery sunset. Visit Sri Lanka, and experience the magic of the island that captivated travelers for thousands of years.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Youtube;
