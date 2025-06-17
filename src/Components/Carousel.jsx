// SpotlightCarousel.jsx
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import inman from '../assets/pictures/asset 22.jpeg';
import reporter from '../assets/pictures/asset 21.jpeg';
import Journal from '../assets/pictures/asset 19.jpeg';
import Mansion from '../assets/pictures/asset 17.jpeg';
import house from '../assets/pictures/asset 48.jpeg';

const cards = [
  {
    title: 'Inman News',
    subtitle: '"Jade Mills inducted into the Inman Golden I Hall of Fame."',
    image: inman,
  },
  {
    title: 'Hollywood Reporter',
    subtitle: '"More than $6B career sales..."',
    image: reporter,
  },
  {
    title: 'Wall Street Journal',
    subtitle: '"Jade Mills Sells Coachella Valley Villa"',
    image: Journal,
  },
  {
    title: 'Mansion Global',
    subtitle: '"Jade Mills sells famed Beverly Park home for $70 Million."',
    image: Mansion,
  },
  {
    title: 'Variety Magzine',
    subtitle:
      '"Mills is Coldwell Banker’s No. 1 agent worldwide, and her expertise has propelled her to the top of luxury real estate agents in the country."',
    image: house,
  },
];

export default function SpotlightCarousel() {
  return (
    <div className="bg-black py-16">
      <Swiper
        modules={[Navigation, Autoplay]}
        slidesPerView={1.5}
        centeredSlides={true}
        loop={true}
        navigation={true}
        autoplay={{
          delay: 1500, // 1.5 seconds
          disableOnInteraction: false,
        }}
        spaceBetween={50}
        className="w-full max-w-5xl mx-auto"
      >
        {cards.map((card, idx) => (
          <SwiperSlide key={idx}>
            {({ isActive }) => (
              <div
                className={`transition-all duration-500 ease-in-out overflow-hidden text-white shadow-xl ${
                  isActive ? 'scale-100 opacity-100' : 'scale-90 opacity-50'
                }`}
              >
                <img
                  src={card.image}
                  alt={card.title}
                  className="w-full h-[400px] object-cover"
                />
                <div className="bg-black p-6 text-center">
                  <h2 className="text-2xl font-semibold mb-2 font-hero">{card.title}</h2>
                  <p className="text-sm font-basic">{card.subtitle}</p>
                </div>
              </div>
            )}
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
