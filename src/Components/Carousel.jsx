import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';

const cards = [
  {
    title: 'Photography Excellence Awards',
    subtitle: '"Aarav Kapoor receives international recognition for artistic storytelling."',
    image: "https://res.cloudinary.com/dghoya7tk/image/upload/v1750543870/Gemini_Generated_Image_i8pkjyi8pkjyi8pk_qu5ghk.png",
  },
  {
    title: 'Golden Hour Vision',
    subtitle: '"Capturing the fleeting glow of sunsets through a cinematic lens."',
    image: "https://res.cloudinary.com/dghoya7tk/image/upload/v1750544050/Gemini_Generated_Image_mhvzzumhvzzumhvz_rppy80.png",
  },
  {
    title: 'Chasing Waterfalls',
    subtitle: '"Exploring movement and emotion in nature’s purest moments."',
    image: "https://res.cloudinary.com/dghoya7tk/image/upload/v1750544201/Gemini_Generated_Image_9najmr9najmr9naj_hpvjk6.png",
  },
  {
    title: 'Cityscapes in Focus',
    subtitle: '"Urban storytelling framed through light, depth, and silence."',
    image: "https://res.cloudinary.com/dghoya7tk/image/upload/v1750544425/Gemini_Generated_Image_61rgie61rgie61rg_ao9cpb.png",
  },
  {
    title: 'Whispers of Nature',
    subtitle: '"Stillness, solitude, and the natural world — captured with soul."',
    image: 'https://images.pexels.com/photos/955658/pexels-photo-955658.jpeg',
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
          delay: 1500,
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
