import React from 'react';
import BookingHero from '../BookingForm/BookingHeo';

const Hero = () => {
  return (
    <div
      className="hero min-h-screen"
      style={{
        backgroundImage: "url(https://img.daisyui.com/images/stock/photo-1507358522600-9f71e620c44e.webp)",
      }}
    >
      <div className="hero-overlay bg-opacity-60"></div>
      <div className="hero-content text-neutral-content text-center">
        <div className="max-w-md">
          <h1 className="mb-5 text-5xl font-bold">Diferancia Tours</h1>
          <p className="mb-5">Journey Beyond the Happy</p>
          <button className="btn btn-warning mb-5">Explore More</button>
          
          {/* BookingHero component directly under the button */}
          <BookingHero />
        </div>
      </div>
    </div>
  );
};

export default Hero;
