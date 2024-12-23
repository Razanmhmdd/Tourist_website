import React from "react";
import bgImg from "/img/q.jpg";
import v from "../../assets/img/Cards2/tea.jpg";
import a from "../../assets/img/Cards2/img1.jpg";
import c from "../../assets/img/Cards2/img2.jpg";
import d from "../../assets/img/Cards2/img3.jpg";

const experiences = [
  {
    title: "Stay in the Tea & Beach Sri Lanka",
    image: v,
    description:
      "Sri Lanka provides the chance to immerse oneself in the rich cultural heritage of the country, with easy access to ancient temples, ruins, and other historical sites, while enjoying luxurious accommodations in a stunning setting, surrounded by lush gardens that provide a secluded oasis.",
  },
  {
    title: "Sri Lankan National Parks",
    image: a,
    description:
      "A leopard basking in the fork of a tree. A family of elephants lumbering out of the tropical undergrowth. These are just some of the sights awaiting in Sri Lanka’s national parks – some of the wildest, most beautiful places on earth.some of the wildest, most beautiful places on earth.",
  },
  {
    title: "Sri Lankan Hospitality",
    image: c,
    description:
      "Sri Lanka provides the chance to immerse oneself in the rich cultural heritage of the country, with easy access to ancient temples, ruins, and other historical sites, while enjoying luxurious accommodations in a stunning setting, surrounded by lush gardens that provide a secluded oasis.",
  },
  {
    title: "Wildlife",
    image: d,
    description:
      "Sri Lankan wildlife is incredibly diverse, with over 26 national parks home to elephants, leopards, sloth bears, and a variety of bird species. The island’s unique ecosystems make it a biodiversity hotspot for nature enthusiasts and wildlife photographers alike.",
  },
];

const Cards2 = () => {
  return (
    <section className="relative">
      <div
        className="bg-cover bg-center min-h-screen p-10 flex flex-col items-center text-center "
        style={{ backgroundImage: `url(${bgImg})` }}
      >
      <div className="relative bg-cover bg-center min-h-screen p-10 flex flex-col items-center text-center mt-5 z-10">
        <h2 className="text-3xl font-bold text-blue-900 mb-9">EXPERIENCE IN SRILANKA</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {experiences.map((experience, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden transform transition duration-300 hover:scale-105">
              <img src={experience.image} alt={experience.title} className="w-full h-48 object-cover" />
              <div className="p-5">
                <h3 className="font-bold text-xl mb-2">{experience.title}</h3>
                <p className="text-gray-700">{experience.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      </div>
    </section>
  );
};

export default Cards2;
  