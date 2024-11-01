import React from 'react';

const AboutUs = () => {
  return (
    <div className="flex flex-col lg:flex-row items-center lg:items-start bg-white py-10 px-6 lg:px-16">
      {/* Left Side - Text Content */}
      <div className="lg:w-1/2 mb-8 lg:mb-0 lg:pr-10">
        <h2 className="text-3xl font-bold text-blue-900 mb-4">About Us</h2>
        <p className="text-gray-600 mb-4">
          Travel With Sri Lanka is your gateway to discovering its authentic beauty, rich history, and vibrant culture. As a full-service travel company, we specialize in creating personalized journeys that immerse travelers in the unique charm of this island paradise.
        </p>
        <p className="text-gray-600 mb-4">
          From lush tea plantations to golden beaches, and ancient temples to lively cityscapes, we curate experiences catering to all interests and travel styles.
        </p>
        <p className="text-gray-600 mb-4">
          Our team is passionate about showcasing the best of Sri Lanka, blending comfort with adventure to make every trip unforgettable. Whether you're a solo traveler, a couple on a romantic getaway, or a family looking to explore, we provide customized itineraries, local expertise, and seamless travel arrangements, ensuring a hassle-free journey from start to finish.
        </p>
        <p className="text-gray-600">
          With Travel With Sri Lanka, experience the magic of this extraordinary island, crafted just for you. Let us take you beyond the guidebooks to the heart of Sri Lanka.
        </p>
      </div>

      {/* Right Side - Image */}
      <div className="lg:w-1/2">
        <img 
          src="./img/tea.jpg" 
          alt="Sri Lanka scenery" 
          className="w-full h-auto rounded-lg shadow-lg"
        />
      </div>
    </div>
  );
};

export default AboutUs;
