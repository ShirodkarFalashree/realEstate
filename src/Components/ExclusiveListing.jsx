import React, { useRef, useState, useEffect } from 'react';

const listings = [
  { id: 2, title: 'Hidden Waterfall', image: 'https://images.pexels.com/photos/210186/pexels-photo-210186.jpeg' },
  { id: 3, title: 'Mountain Panorama', image: 'https://images.pexels.com/photos/358482/pexels-photo-358482.jpeg' },
  { id: 4, title: 'City Lights at Dusk', image: 'https://images.pexels.com/photos/373912/pexels-photo-373912.jpeg' },
  { id: 5, title: 'Mirror Lake Reflection', image: 'https://images.pexels.com/photos/462024/pexels-photo-462024.jpeg' },
  { id: 6, title: 'Desert Dune Shadows', image: 'https://images.pexels.com/photos/374166/pexels-photo-374166.jpeg' },
  { id: 7, title: 'Old Town Street', image: 'https://images.pexels.com/photos/247599/pexels-photo-247599.jpeg' },
  { id: 8, title: 'Snowy Forest Path', image: 'https://images.pexels.com/photos/417074/pexels-photo-417074.jpeg' },
  { id: 9, title: 'Coastal Cliff View', image: 'https://images.pexels.com/photos/3225517/pexels-photo-3225517.jpeg' },
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
    if (Math.abs(velocity) > 0.1) {
      const animateMomentum = () => {
        if (!scrollRef.current || Math.abs(velocity) < 0.1) {
          cancelAnimationFrame(animationRef.current);
          return;
        }
        scrollRef.current.scrollLeft += velocity;
        setVelocity(velocity * 0.95);
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
    const walk = (x - startX) * 1;
    scrollRef.current.scrollLeft = scrollLeft - walk;

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
        Exclusive Shots
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
