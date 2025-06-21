import React, { useState } from 'react';
import bgImage from '../assets/pictures/asset 7.jpeg';
import { FaPlay } from 'react-icons/fa';

const Video = () => {
  const [showVideo, setShowVideo] = useState(false);

  return (
  <div
  className="relative w-full min-h-[80vh] md:h-screen bg-cover bg-center flex items-center justify-center px-4"
  style={{ backgroundImage: `url('https://images.pexels.com/photos/414171/pexels-photo-414171.jpeg')` }}
>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black opacity-30 z-0" />

      {/* Play Button */}
      {!showVideo && (
        <button
          onClick={() => setShowVideo(true)}
          className="z-10 bg-white/60 text-white text-xl sm:text-2xl rounded-full p-6 sm:p-7 hover:scale-110 transition-transform"
        >
          <FaPlay />
        </button>
      )}

      {/* Video Modal */}
      {showVideo && (
        <div className="absolute inset-0 bg-black bg-opacity-90 flex items-center justify-center z-10 p-4">
          <button
            onClick={() => setShowVideo(false)}
            className="absolute top-4 right-4 text-white text-3xl sm:text-4xl font-bold z-20 hover:text-red-500"
          >
            ✕
          </button>

         <iframe
  className="w-full max-w-3xl aspect-video rounded-xl"
  src="https://www.youtube.com/embed/qcsAfAgri2U?autoplay=1&start=1"
  title="YouTube video player"
  frameBorder="0"
  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
  allowFullScreen
></iframe>

        </div>
      )}
    </div>
  );
};

export default Video;
