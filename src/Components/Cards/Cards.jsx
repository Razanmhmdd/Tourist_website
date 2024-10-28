import React, { useEffect, useState } from 'react';
import r from "/img/cards1/casino.jpg"
import t from '/img/cards1/q.jpg';
import u from '/img/cards1/w.jpg';
import y from '/img/cards1/honey.jpg';
import v from '/img/cards1/golf.jpg';
import a from '/img/cards1/elephants.jpg';
import c from '/img/cards1/w.jpg';
import d from '/img/cards1/budha.jpg';


const cards = [
  { title: "NIGHTS OF LIGHTS PACKAGE", image: r },
  { title: "HILL COUNTRY TOURS", image: t },
  { title: "GLIMPSE OF SRI LANKA", image: u },
  { title: "HONEYMOON PACKAGE", image: y },
  { title: "Elephants", image: a },
  { title: "Golf Tours", image: v },
  { title: "Beach View", image: c },
  { title: "CULTURAL PACKAGE", image: d }
];

export default function CardCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const totalCards = cards.length;

 
  //useEffect(() => {
    //const interval = setInterval(() => {
     // setCurrentIndex((prevIndex) => prevIndex + 1);
 //   }, 7000);

   // return () => clearInterval(interval);
 // }, []);


  useEffect(() => {
    if (currentIndex === totalCards * 2) {
      setTimeout(() => setCurrentIndex(0), 700);
    }
  }, [currentIndex, totalCards]);

  return (
    <div className="w-full h-80 flex justify-center items-center relative overflow-hidden">
      <div
        className="flex transition-transform duration-700 ease-in-out"
        style={{
          transform: `translateX(-${(currentIndex % totalCards) * 100}%)`,
          width: `${totalCards * 200}%`
        }}
      >
        {[...cards, ...cards].map((card, index) => ( 
          <div
            key={index}
            className="w-80 h-80 flex-shrink-0 m-2 rounded-lg shadow-lg bg-cover bg-center relative"
            style={{ backgroundImage: `url(${card.image})` }}
          >
        
            <div className="absolute bottom-0 w-full bg-black bg-opacity-70 text-white p-2 text-center">
              <h2 className="text-lg font-bold">{card.title}</h2>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
