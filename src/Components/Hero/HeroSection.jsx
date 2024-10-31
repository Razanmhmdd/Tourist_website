import React, { useState, useEffect } from 'react';
import plage from "/img/q.jpg"
import dz from "/img/cards1/r.jpg"
import d from "/img/cards1/sunset.jpg"
import q from "/img/cards1/elephants.jpg"

import BookingHero from '../BookingForm/BookingHeo';

const HeroSection = () => {
  const images = [plage, d, q,dz ];
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000);

    return () => clearInterval(intervalId); 
  }, [images.length]);

  return (
   <section
  className="relative w-full h-screen sm:h-[75vh] bg-cover bg-center flex flex-col justify-center items-center text-center text-black transition-all duration-1000"
  style={{ backgroundImage: `url(${images[currentImageIndex]})` }}
>
  <div className="w-full px-4 md:px-10">
    <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold mb-2 md:mb-4">Diferancia Tours</h1>
    <p className="text-base sm:text-lg md:text-xl lg:text-2xl font-medium mb-4 md:mb-6">Journey Beyond the Happy</p>
    
    <a
      href="#explore"
      className="inline-block bg-black text-white font-semibold py-2 px-4 sm:px-6 rounded-full hover:bg-gray-100 transition-colors"
    >
      Explore More
    </a>

    <div className="w-full mt-4 sm:mt-6 px-2 sm:px-8">
      <BookingHero />
    </div>
  </div>
</section>

  );
};

export default HeroSection;
