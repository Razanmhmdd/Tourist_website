import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import { EffectCoverflow, Pagination } from 'swiper/modules';

// Import images
import r from "/img/cards1/wa.jpg";
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
  { title: "Amazing Waterfall", image: r },
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
];

export default function ImageSwiper() {
  return (
    <Swiper
      effect="coverflow"
      grabCursor={true}
      centeredSlides={true}
      slidesPerView="auto"
      coverflowEffect={{
        rotate: 30,
        stretch: 0,
        depth: 200,
        modifier: 1,
        slideShadows: true,
      }}
      pagination={{ clickable: true }}
      modules={[EffectCoverflow, Pagination]}
      loop={true}
      style={{ paddingBottom: '30px' }}  // Adds space for pagination
    >
      {images.map((item, index) => (
        <SwiperSlide key={index} style={{ maxWidth: '300px', borderRadius: '10px', overflow: 'hidden' }}>
          <div style={{ position: 'relative', textAlign: 'center' }}>
            <img
              src={item.image}
              alt={item.title}
              style={{
                width: '100%',
                height: '300px',            // Fixed height to give a consistent look
                objectFit: 'cover',
                borderRadius: '10px',
                boxShadow: '0 4px 15px rgba(0, 0, 0, 0.3)',
              }}
            />
            <div style={{
              position: 'absolute',
              bottom: '15px',
              left: '50%',
              transform: 'translateX(-50%)',
              background: 'rgba(0, 0, 0, 0.6)',
              color: 'white',
              padding: '8px 16px',
              borderRadius: '8px',
              fontSize: '1rem',
              fontWeight: '500',
            }}>
              {item.title}
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
