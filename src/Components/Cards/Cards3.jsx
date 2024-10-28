import React from "react";
import bgImg from "/img/q.jpg"
import v from "/img/Cards2/bbq.jpeg"
import a from "/img/Cards2/sea.jpeg"
import c from "/img/Cards2/food.jpeg"
import d from "/img/Cards2/fine.jpeg"


const experiences = [
  {
    title: "Fine Dining",
    image: d,
    description: "Mouth Watering Delicious meals from our special menu rich in international and local cuisine, served by highly trained and informed personnel that provide personalized attention to each client. Menu explanations, wine pairing ideas, and other sorts of assistance can all be provided to ensure that guests have a wonderful dining experience."
  },
  {
    title: "Sea Foods",
    image: a,
    description: "Seafood is any form of sea life regarded as food by humans. It prominently includes fish and shellfish. Shellfish include various species of molluscs (e.g., bivalve molluscs such as clams, oysters and mussels, and cephalopods such as octopus and squid), crustaceans (e.g. shrimp, crabs, and lobster), and echinoderms (e.g. sea cucumbers and sea urchins)"
  },
  {
    title: "BBQ Nights",
    image: v,
    description: "Experience the ultimate BBQ night at our enchanting villa, where the ambiance meets the sizzle of delicious flavors under the open sky. Picture a perfect evening filled with laughter and the irresistible aroma of grilled delights. Our outdoor party setup at the villa is tailor-made for those who relish the combination of great company and delectable barbecue."
  },
  {
    title: "Traditional Foods",
    image: c,
    description: "Sri Lankan traditional foods are a delightful fusion of flavors, showcasing dishes like rice and curry, hoppers, coconut sambol, and kottu roti. Richly spiced with ingredients like cinnamon, cardamom, and chili, these meals reflect the island’s diverse cultural heritage, offering a unique culinary experience rooted in centuries-old traditions."
  },
];

const Cards3 = () => {
  return (
    <section>
      <div
        className="bg-cover bg-center min-h-screen p-10 flex flex-col items-center text-center "
        style={{ backgroundImage: `url(${bgImg})` }}
      >
        <h2 className="text-3xl font-bold text-white mb-8">FOOD AND DINING IN SRI LANKA</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
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

export default Cards3;
