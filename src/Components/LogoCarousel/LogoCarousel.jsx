import React, { useState, useEffect } from 'react';
import Logo1 from "/img/logos/logo1.png";
import Logo2 from "/img/logos/logo2.png";
import Logo4 from "/img/logos/logo4.png";
import Logo3 from "/img/logos/logo3.png";
import Logo5 from "/img/logos/logo5.png";
import Logo6 from "/img/logos/logo6.png";

function LogoCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const logos = [Logo1, Logo2, Logo3, Logo4, Logo5, Logo6];

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % logos.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + logos.length) % logos.length);
  };

  useEffect(() => {
    const intervalId = setInterval(handleNext, 5000); // Adjust the interval as needed
    return () => clearInterval(intervalId);
  }, []);

  return (
   
        <div className="relative overflow-hidden"> 
      <div className="flex gap-20 justify-center px-4 py-8 sm:px-6 lg:px-8"> {/* Added justify-center for centering */}
        {logos.map((logo, index) => (
          <img
            key={index}
            src={logo}
            alt={`Logo ${index + 1}`}
            className={`w-24 h-12 object-contain rounded-lg shadow-md ${
              index === currentIndex ? 'scale-110' : ''
            }`}
          />
        ))}
      </div>
      <div className="absolute top-1/2 -translate-y-1/2 left-4 right-4 flex justify-between">
        <button onClick={handlePrev} className="bg-gray-200 p-2 rounded-full hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-400"> {/* Added focus styles */}
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-9-9 9-9" />
          </svg>
        </button>
        <button onClick={handleNext} className="bg-gray-200 p-2 rounded-full hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-400"> {/* Added focus styles */}
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>
    </div>
    
  );
}

export default LogoCarousel;