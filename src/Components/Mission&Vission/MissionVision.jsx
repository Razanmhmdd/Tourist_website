import React from 'react';
import bgImg from "/img/q.jpg"
const MissionVision = () => {
  return (
    <div className="py-12 px-6 "style={{ backgroundImage: `url(${bgImg})` }}>
      <h2 className="text-3xl font-bold text-center text-blue-900 mb-12">OUR VISSION & MISSION</h2>

      <div className="max-w-5xl mx-auto grid gap-10 lg:grid-cols-2">
        {/* Mission */}
        <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition duration-300 transform hover:scale-105">
          <h3 className="text-2xl font-semibold text-blue-800 mb-4">Mission</h3>
          <p className="text-gray-700 leading-relaxed">
            To create meaningful, authentic, and unforgettable travel experiences that celebrate the beauty, culture, and diversity of Sri Lanka. We are committed to offering personalized services, promoting sustainable tourism, and empowering local communities, ensuring that each journey benefits both travelers and the people of Sri Lanka.
          </p>
        </div>

        {/* Vision */}
        <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition duration-300 transform hover:scale-105">
          <h3 className="text-2xl font-semibold text-blue-800 mb-4">Vision</h3>
          <p className="text-gray-700 leading-relaxed">
            To be the leading travel provider in Sri Lanka, renowned for our dedication to quality, sustainability, and cultural immersion. We aim to inspire travelers worldwide to discover and appreciate the richness of Sri Lanka, while fostering responsible tourism that preserves the island's natural beauty and cultural heritage for generations to come.
          </p>
        </div>
      </div>
    </div>
  );
};

export default MissionVision;
