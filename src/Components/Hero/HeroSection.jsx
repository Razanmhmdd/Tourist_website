import React from 'react';
import BookingHero from '../BookingForm/BookingHeo';
import video from "../../assets/img/video.mp4"
const HeroSection = () => {
  return (
    <section className="relative w-full min-h-screen overflow-hidden flex flex-col justify-center items-center text-center text-black ">
     
      <video
        className="absolute top-0 left-0 w-[100vw] h-[100vh] object-cover"
        src={video}
        autoPlay
        loop
        muted
        playsInline
      />
     
      <div className="absolute inset-0 bg-black opacity-40"></div>

      <div className="relative  w-full px-4 sm:px-6 md:px-10 mt-8 md:mt-12 ">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-2 md:mb-4 mt-44 uppercase text-white">
          Travel with Sri Lanka
        </h1>
        <p className="text-base sm:text-lg md:text-xl lg:text-2xl font-medium mb-4 md:mb-6 text-white ">
          Experience the Heart of Sri Lanka
        </p>

        <a
          href="#explore"
          className="inline-block bg-blue-900 text-white font-semibold py-2 px-4 sm:px-6 rounded-full hover:bg-gray-300 transition-colors"
        >
          Explore More
        </a>

        <div className="w-full mt-4 sm:mt-6 px-2 sm:px-8 ">
          <BookingHero />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
