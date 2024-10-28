
import React, { useState, useEffect } from 'react';
import r from '/img/cards1/casino.jpg';
import t from '/img/cards1/q.jpg';
import u from '/img/cards1/w.jpg';
import y from '/img/cards1/honey.jpg';
import v from '/img/cards1/golf.jpg';
import a from '/img/cards1/elephants.jpg';
import c from '/img/cards1/w.jpg';
import d from '/img/cards1/budha.jpg';

const Gallery = () => {

  const images = [r, t, u, y, v, a, c, d];
  const [currentImages, setCurrentImages] = useState(images.slice(0, 4)); 
  const [startIndex, setStartIndex] = useState(0);

  
  useEffect(() => {
    const interval = setInterval(() => {
      const nextIndex = (startIndex + 4) % images.length;
      setCurrentImages(images.slice(nextIndex, nextIndex + 4));
      setStartIndex(nextIndex);
    }, 3000); 

    return () => clearInterval(interval); 
  }, [startIndex, images]);

  return (
    <div className="py-10 px-4 bg-gray-100">
      <h2 className="text-2xl font-bold text-center mb-8">Gallery</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {currentImages.map((url, index) => (
          <div key={index} className="relative overflow-hidden rounded-lg shadow-lg">
            <img
              src={url}
              alt={`Gallery Image ${index + 1}`}
              className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gallery;
