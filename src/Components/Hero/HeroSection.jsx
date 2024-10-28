import React, { useState, useEffect } from 'react';
import plage from "/img/q.jpg"
import dz from "/img/r.jpg"
import d from "/img/w.jpg"
import  BookingForm  from "../BookingForm/BookingForm";

const HeroSection = () => {
  const images = [plage, dz, d];
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000); // Change image every 5 seconds

    return () => clearInterval(intervalId); // Clear interval on component unmount
  }, [images.length]);

  return (
    <section
      className="relative w-full h-screen bg-cover bg-center flex flex-col justify-center items-center text-center text-white transition-all duration-1000"
      style={{ backgroundImage: `url(${images[currentImageIndex]})` }}
    >
      <h1 className="text-7xl font-bold mb-4">Diferancia Tours</h1>
      <p className="text-2xl font-medium mb-6">Journey Beyond the Happy</p>
      
      <a
        href="#explore"
        className="bg-white text-blue-600 font-semibold py-2 px-6 rounded-full hover:bg-gray-100 transition"
      >
        Explore More
      </a>
      <BookingForm/>
    </section>
  );
};

export default HeroSection;
