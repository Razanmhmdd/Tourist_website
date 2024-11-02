import React, { useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';

// Import images
import r from '/img/cards1/casino.webp';
import t from '/img/cards1/q.jpg';
import u from '/img/cards1/w.jpg';
import y from '/img/cards1/honey.jpg';
import v from '/img/cards1/golf.jpg';
import a from '/img/cards1/elephants.jpg';
import c from '/img/cards1/w.jpg';
import d from '/img/cards1/budha.jpg';

const Gallery = () => {
  const images = [r, t, u, y, v, a, c, d, r, t, u, y, v, a, c, d, r, t, u, y, v, a, c, d];
  const [startIndex, setStartIndex] = useState(0);

  const slides = [];
  for (let i = 0; i < images.length; i += 4) {
    slides.push(images.slice(i, i + 4));
  }

  useEffect(() => {
    const interval = setInterval(() => {
      setStartIndex((prevIndex) => (prevIndex + 1) % slides.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [slides.length]);

  return (
    <div className="py-10 px-4 bg-gradient-to-b from-gray-100 to-gray-300">
      <h2 className="text-3xl font-extrabold text-center mb-8 text-gray-800">Gallery</h2>
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={20}
        slidesPerView={1}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        loop={true}
        navigation
        pagination={{ clickable: true }}
        breakpoints={{
          640: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
      >
        {slides.map((slideImages, index) => (
          <SwiperSlide key={index}>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {slideImages.map((url, i) => (
                <div
                  key={i}
                  className="relative overflow-hidden rounded-lg shadow-lg hover:shadow-xl transform transition-transform duration-300 hover:scale-105"
                >
                  <img
                    src={url}
                    alt={`Gallery Image ${i + 1}`}
                    className="w-full h-full object-cover"
                    style={{
                      width: '100%',
                      height: '200px',
                      objectFit: 'cover',
                    }}
                  />
                </div>
              ))}
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Gallery;
// import React from 'react';
// import { Swiper, SwiperSlide } from 'swiper/react';

// // Import Swiper styles
// import 'swiper/css';
// import 'swiper/css/effect-coverflow';


// import { EffectCoverflow, Pagination, Navigation } from 'swiper';

// // Import images
// import slide_image_1 from '/img/cards1/casino.webp';
// import slide_image_2 from '/img/cards1/q.jpg';
// import slide_image_3 from '/img/cards1/w.jpg';
// import slide_image_4 from '/img/cards1/honey.jpg';
// import slide_image_5 from '/img/cards1/golf.jpg';
// import slide_image_6 from '/img/cards1/elephants.jpg';
// import slide_image_7 from '/img/cards1/w.jpg';
// import slide_image_8 from '/img/cards1/budha.jpg';

// function Gallery() {
//   return (
//     <div className="container mx-auto p-8">
//       <h1 className="text-3xl font-bold text-center mb-8">Flower Gallery</h1>
//       <Swiper
//         effect="coverflow"
//         grabCursor={true}
//         centeredSlides={true}
//         loop={true}
//         slidesPerView="auto"
//         coverflowEffect={{
//           rotate: 0,
//           stretch: 0,
//           depth: 100,
//           modifier: 2.5,
//         }}
//         pagination={{ el: '.swiper-pagination', clickable: true }}
//         navigation={{
//           nextEl: '.swiper-button-next',
//           prevEl: '.swiper-button-prev',
//           clickable: true,
//         }}
//         modules={[EffectCoverflow, Pagination, Navigation]}
//         className="swiper_container"
//       >
//         <SwiperSlide>
//           <img src={slide_image_1} alt="Casino" className="rounded-lg" />
//         </SwiperSlide>
//         <SwiperSlide>
//           <img src={slide_image_2} alt="Q" className="rounded-lg" />
//         </SwiperSlide>
//         <SwiperSlide>
//           <img src={slide_image_3} alt="W" className="rounded-lg" />
//         </SwiperSlide>
//         <SwiperSlide>
//           <img src={slide_image_4} alt="Honey" className="rounded-lg" />
//         </SwiperSlide>
//         <SwiperSlide>
//           <img src={slide_image_5} alt="Golf" className="rounded-lg" />
//         </SwiperSlide>
//         <SwiperSlide>
//           <img src={slide_image_6} alt="Elephants" className="rounded-lg" />
//         </SwiperSlide>
//         <SwiperSlide>
//           <img src={slide_image_7} alt="W" className="rounded-lg" />
//         </SwiperSlide>
//         <SwiperSlide>
//           <img src={slide_image_8} alt="Budha" className="rounded-lg" />
//         </SwiperSlide>

//         {/* Controls */}
//         <div className="slider-controller flex justify-center mt-4">
//           <div className="swiper-button-prev slider-arrow text-gray-600">
//             <ion-icon name="arrow-back-outline"></ion-icon>
//           </div>
//           <div className="swiper-button-next slider-arrow text-gray-600">
//             <ion-icon name="arrow-forward-outline"></ion-icon>
//           </div>
//         </div>
//         <div className="swiper-pagination mt-4"></div>
//       </Swiper>
//     </div>
//   );
// }

// export default Gallery;
