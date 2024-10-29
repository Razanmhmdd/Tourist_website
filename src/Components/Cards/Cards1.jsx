import React, { useEffect, useState, useRef } from 'react';
import r from "/img/cards1/casino.webp";
import t from '/img/cards1/q.jpg';
import u from '/img/cards1/w.jpg';
import y from '/img/cards1/honey.jpg';
import v from '/img/cards1/golf.jpg';
import a from '/img/cards1/elephants.jpg';
import c from '/img/cards1/w.jpg';
import d from '/img/cards1/budha.jpg';
import z from '/img/cards1/campfire.jpg';
import x from '/img/cards1/hill.jpg';
import b from '/img/cards1/paddy.jpg';
import n from '/img/cards1/lake.jpg';

const images = [
  { title: "NIGHTS OF LIGHTS PACKAGE", image: r },
  { title: "HILL COUNTRY TOURS", image: t },
  { title: "GLIMPSE OF SRI LANKA", image: u },
  { title: "HONEYMOON PACKAGE", image: y },
  { title: "Elephants", image: a },
  { title: "Golf Tours", image: v },
  { title: "Beach View", image: c },
  { title: "CULTURAL PACKAGE", image: d },
  { title: "Beauty of Lakes", image: n },
  { title: "Green views", image: b },
  { title: "Hiking PACKAGE", image: x },
  { title: "Camping PACKAGE", image: z },
  { title: "Elephants", image: a },
  { title: "Golf Tours", image: v },
  { title: "Beach View", image: c },
  { title: "CULTURAL PACKAGE", image: d },
  { title: "Beauty of Lakes", image: n },
  { title: "Green views", image: b },
  { title: "Hiking PACKAGE", image: x },
  { title: "Camping PACKAGE", image: z }
  
];

export default function AutoCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const carouselRef = useRef(null);
  const totalItems = images.length;

  // Auto-slide every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  // Move to the next slide
  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % totalItems);
  };

  // Move the carousel smoothly
  useEffect(() => {
    if (carouselRef.current) {
      const width = carouselRef.current.clientWidth;
      carouselRef.current.style.transform = `translateX(-${currentIndex * width}px)`;
      carouselRef.current.style.transition = 'transform 0.5s ease-in-out';
    }
  }, [currentIndex]);

  return (
    <div className="overflow-hidden w-full">
      <div
        ref={carouselRef}
        className="flex"
      >
        {images.map((item, index) => (
          <div
            key={index}
            className="flex-shrink-0 w-full sm:w-80 h-60 relative"
          >
            <img
              src={item.image}
              alt={`Slide ${index + 1}`}
              className="w-full h-full object-cover"
            />
            <div className="absolute bottom-0 w-full bg-black bg-opacity-50 text-white text-center p-2 text-xs sm:text-sm md:text-base">
              {item.title}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
