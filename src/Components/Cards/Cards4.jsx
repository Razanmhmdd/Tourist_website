import React from "react";
import bgImg from "/img/tea.jpg"
import v from "/img/Cards2/boat.jpg"
import a from "/img/Cards2/party.jpg"
import c from "/img/Cards2/Surfing.jpg"



const experiences = [
  {
    title: "SURFING",
    image: c,
    description: "Surfing is a surface water sport in which an individual, a surfer (or two in tandem surfing), uses a board to ride on the forward section, or face, of a moving wave of water, which usually carries the surfer towards the shore. Waves suitable for surfing are primarily found on ocean shores, but can also be found in standing waves in the open ocean."
  },
  {
    title: "BEACH PARTIES",
    image: a,
    description: "A beach party is a celebration that takes place on a beach or near the ocean. It usually involves activities like swimming, surfing, playing games, dancing, eating and drinking. Some beach parties are casual and informal, while others are more organized and themed. Here are some examples of beach party descriptions."
  },
  {
    title: "BOAT RIDES",
    image: v,
    description: "There are many different types of boat rides available in Sri Lanka, each offering its own unique experience. You can take a whale watching tour and see some of the largest creatures on Earth, go on a mangrove safari and explore the unique ecosystem of the mangroves, or take a river cruise and relax as you take in the sights and sounds of the countryside"
  },
 
];

const Cards4 = () => {
  return (
    <section>
      <div
        className="bg-cover bg-center min-h-screen p-10 flex flex-col items-center text-center"
        style={{ backgroundImage: `url(${bgImg})` }}
      >
        <h2 className="text-3xl font-bold text-white mb-8">POPULAR ACTIVITIES IN SRILANKA</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {experiences.map((experience, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-lg overflow-hidden transform transition duration-300 hover:scale-105"
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={experience.image}
                  alt={experience.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-5">
                <h3 className="font-bold text-xl mb-2">{experience.title}</h3>
                <p className="text-gray-700">{experience.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Cards4;
