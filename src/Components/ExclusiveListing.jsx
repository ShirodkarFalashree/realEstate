import React, { useRef, useState, useEffect } from 'react';
import img1 from '../assets/pictures/asset 43.jpeg';
import img2 from '../assets/pictures/asset 44.jpeg';
import img3 from '../assets/pictures/asset 45.jpeg';
import img4 from '../assets/pictures/asset 46.jpeg';
import img5 from '../assets/pictures/asset 47.jpeg';
import img6 from '../assets/pictures/asset 48.jpeg';
import img7 from '../assets/pictures/asset 49.jpeg';
import img8 from '../assets/pictures/asset 50.jpeg';
import img9 from '../assets/pictures/asset 51.jpeg';

const listings = [
  { id: 1, title: 'Malibu Mansion', image: img1 },
  { id: 2, title: 'Beverly Hills Estate', image: img2 },
  { id: 3, title: 'Modern LA Home', image: img3 },
  { id: 4, title: 'Palm Springs Villa', image: img4 },
  { id: 5, title: 'Palm Springs Villa', image: img5 },
  { id: 6, title: 'Palm Springs Villa', image: img6 },
  { id: 7, title: 'Palm Springs Villa', image: img7 },
  { id: 8, title: 'Palm Springs Villa', image: img8 },
  { id: 9, title: 'Palm Springs Villa', image: img9 },
];

const ExclusiveListing = () => {
  const scrollRef = useRef(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  const [velocity, setVelocity] = useState(0);
  const [lastX, setLastX] = useState(0);
  const animationRef = useRef(null);

  const handleDragStart = (e) => {
    const pageX = e.type.includes('touch') ? e.touches[0].pageX : e.pageX;
    setIsDragging(true);
    setStartX(pageX - scrollRef.current.offsetLeft);
    setScrollLeft(scrollRef.current.scrollLeft);
    setVelocity(0);
    setLastX(pageX);
    cancelAnimationFrame(animationRef.current);
  };

  const handleDragEnd = () => {
    if (!isDragging) return;
    setIsDragging(false);
    // Apply momentum
    if (Math.abs(velocity) > 0.1) {
      const animateMomentum = () => {
        if (!scrollRef.current || Math.abs(velocity) < 0.1) {
          cancelAnimationFrame(animationRef.current);
          return;
        }
        scrollRef.current.scrollLeft += velocity;
        setVelocity(velocity * 0.95); // Decelerate
        animationRef.current = requestAnimationFrame(animateMomentum);
      };
      animationRef.current = requestAnimationFrame(animateMomentum);
    }
  };

  const handleDragMove = (e) => {
    if (!isDragging || !scrollRef.current) return;
    e.preventDefault();
    const pageX = e.type.includes('touch') ? e.touches[0].pageX : e.pageX;
    const x = pageX - scrollRef.current.offsetLeft;
    const walk = (x - startX) * 1; // Increased sensitivity for smoother feel
    scrollRef.current.scrollLeft = scrollLeft - walk;

    // Calculate velocity for momentum
    const newVelocity = (pageX - lastX) * 0.5;
    setVelocity(newVelocity);
    setLastX(pageX);
  };

  useEffect(() => {
    return () => cancelAnimationFrame(animationRef.current);
  }, []);

  return (
    <div className="min-h-screen w-full px-4 sm:px-8 lg:px-32 py-16 bg-[#141414] text-white">
      <style>
        {`
          .scrollbar-hide::-webkit-scrollbar {
            display: none;
          }
          .scrollbar-hide {
            -ms-overflow-style: none;
            scrollbar-width: none;
          }
          .smooth-scroll {
            scroll-behavior: smooth;
            transition: scroll-left 0.1s ease-out;
          }
          .no-select {
            user-select: none;
            -webkit-user-select: none;
            -moz-user-select: none;
            -ms-user-select: none;
          }
        `}
      </style>
      <h1 className="text-7xl sm:text-4xl lg:text-7xl font-hero mb-10 tracking-tight">
        Exclusive Listings
      </h1>
      <div
        ref={scrollRef}
        className="flex gap-8 overflow-x-auto scrollbar-hide smooth-scroll cursor-grab select-none py-4 snap-x snap-mandatory no-select"
        onMouseDown={handleDragStart}
        onMouseLeave={handleDragEnd}
        onMouseUp={handleDragEnd}
        onMouseMove={handleDragMove}
        onTouchStart={handleDragStart}
        onTouchEnd={handleDragEnd}
        onTouchMove={handleDragMove}
      >
        {listings.map((listing) => (
          <div
            key={listing.id}
            className="flex-shrink-0 w-72 sm:w-96 h-80 sm:h-[24rem] overflow-hidden bg-white text-black relative transition-all duration-300 ease-in-out hover:shadow-2xl snap-center"
          >
            <img
              src={listing.image}
              alt={listing.title}
              className="w-full h-full object-cover"
              loading="lazy"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-black/70 text-white text-sm sm:text-base font-semibold p-3">
              {listing.title}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ExclusiveListing;