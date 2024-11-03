// DestinationGuide.js
import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import nuwara from "../../assets/img/City/nuwara.jpg";
import Kalutara from "../../assets/img/City/Kalutara.png";
import chilaw from "../../assets/img/City/chilaw.jpg";
import trinco from "../../assets/img/City/ella.jpg";

const DestinationGuide = () => {
  const destinations = [
    {
      name: "NUWARA ELIYA",
      description: "Explore Hambantota",
      image: nuwara,
    },
    {
      name: "KALUTARA",
      description: "Kalutara's Diverse Heritage",
      image: Kalutara,
    },
    {
      name: "CHILAW",
      description: "Chilaw",
      image: chilaw,
    },
    {
      name: "ELLA",
      description: "Badulla Ella",
      image: trinco,
    },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: { slidesToShow: 2, slidesToScroll: 1 },
      },
      {
        breakpoint: 640,
        settings: { slidesToShow: 1, slidesToScroll: 1 },
      },
    ],
  };

  return (
    <div className="bg-gray-100 p-8">
      <div className="text-center mb-8">
        <h1 className="text-4xl font-extrabold">DESTINATION GUIDE</h1>
        <h2 className="text-xl font-medium text-gray-600 mt-2">HOLIDAY IN SRI LANKA</h2>
        <p className="text-gray-700 mt-4 max-w-2xl mx-auto">
          Sri Lanka is a meeting place of friendly faces who share their homes and trade; a space for spiritual healing; a land for learning from the old and the new; a hub of commercial activity; a spot for tranquility. Sri Lanka casts a spell unlike anywhere else...
        </p>
        <button className="mt-4 text-blue-600 font-semibold hover:underline">FIND OUT MORE →</button>
      </div>

      <Slider {...settings} className="mx-auto w-full max-w-6xl">
        {destinations.map((destination, index) => (
          <div key={index} className="p-4">
            <div className="bg-white shadow-lg rounded-lg overflow-hidden">
              <img src={destination.image} alt={destination.name} className="w-full h-64 object-cover" />
              <div className="p-6 text-center">
                <h3 className="text-gray-500 uppercase tracking-wide text-sm">{destination.description}</h3>
                <h2 className="text-2xl font-bold mt-2">{destination.name}</h2>
                <button className="mt-4 text-blue-600 font-semibold hover:underline">→</button>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default DestinationGuide;
