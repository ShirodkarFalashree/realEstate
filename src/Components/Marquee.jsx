import React from 'react';
import logo1 from '../assets/pictures/asset 23.png';
import logo2 from '../assets/pictures/asset 24.png';
import logo3 from '../assets/pictures/asset 25.png';
import logo4 from '../assets/pictures/asset 26.png';
import logo5 from '../assets/pictures/asset 27.png';
import logo6 from '../assets/pictures/asset 28.png';
import logo7 from '../assets/pictures/asset 29.png';
import logo8 from '../assets/pictures/asset 30.png';
import logo9 from '../assets/pictures/asset 31.png';

const logos = [
  { src: logo1, alt: 'WSJ' },
  { src: logo2, alt: 'Variety' },
  { src: logo3, alt: 'Haute Residence' },
  { src: logo4, alt: 'Los Angeles Business Journal' },
  { src: logo5, alt: 'Bloomberg' },
  { src: logo6, alt: 'Mansion Global 1' },
  { src: logo7, alt: 'Mansion Global 2' },
  { src: logo8, alt: 'Mansion Global 3' },
  { src: logo9, alt: 'Mansion Global 4' },
];

const Marquee = () => {
  return (
    <div className="overflow-hidden whitespace-nowrap bg-black py-6 px-4 sm:px-10 md:px-20">
      <div className="flex animate-marquee gap-6 sm:gap-10">
        {[...logos, ...logos].map((logo, index) => (
          <div key={index} className="flex items-center gap-6 sm:gap-10 px-2 sm:px-4 shrink-0">
            <img
              src={logo.src}
              alt={logo.alt}
              className="h-10 sm:h-16 md:h-20 w-auto max-w-[140px] object-contain filter brightness-0 invert"
            />
            <div className="h-6 sm:h-8 border-r border-white opacity-40" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Marquee;
