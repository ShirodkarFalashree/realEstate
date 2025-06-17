import React, { useState } from 'react';
import bgImage from '../assets/pictures/asset 7.jpeg';
import { FaPlay } from "react-icons/fa";

const Video = () => {
  const [showVideo, setShowVideo] = useState(false);

  return (
    <div
      className="relative w-full mt-8 h-screen bg-cover bg-center flex items-center justify-center"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
              <div className="absolute inset-0 bg-black opacity-30 z-0" />

      {!showVideo && (
        <button
          onClick={() => setShowVideo(true)}
          className=" z-10 bg-white/50 text-white text-sm rounded-full p-6  font-bold hover:scale-110 transition-transform"
        >
          <FaPlay />

        </button>
      )}

      {showVideo && (
        <div className="absolute inset-0 bg-black bg-opacity-90 flex items-center justify-center z-10">
          <button
            onClick={() => setShowVideo(false)}
            className="absolute top-5 right-5 text-white text-3xl font-bold z-20 hover:text-red-500"
          >
            ✕
          </button>

          <iframe
            className="w-[90%] max-w-4xl aspect-video rounded-xl"
            src="https://www.youtube.com/embed/MSb-a0X0xAc?autoplay=1"
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
