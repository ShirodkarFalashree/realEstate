// Marquee.jsx
import React from 'react';
import logo1 from '../assets/pictures/asset 23.png'
import logo2 from '../assets/pictures/asset 24.png'
import logo3 from '../assets/pictures/asset 25.png'
import logo4 from '../assets/pictures/asset 26.png'
import logo5 from '../assets/pictures/asset 27.png'
import logo6 from '../assets/pictures/asset 28.png'
import logo7 from '../assets/pictures/asset 29.png'
import logo8 from '../assets/pictures/asset 30.png'
import logo9 from '../assets/pictures/asset 31.png'

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
    <div className="overflow-hidden whitespace-nowrap bg-black py-6 mx-36">
      <div className="animate-marquee flex items-center gap-10">
        {logos.map((logo, index) => (
          <div key={index} className="flex items-center gap-10 px-4">
            <img
              src={logo.src}
              alt={logo.alt}
className="h-20 w-auto max-w-[160px] object-contain filter brightness-0 invert"
            />
            {index !== logos.length - 1 && (
              <div className="h-8 border-r border-white opacity-40" />
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Marquee;
