import React, { useState } from 'react';
import '../assets/styles/main.css';
import data from '../data';

const { musicVideos } = data;

const MusicVideo = () => {
  const [showAll, setShowAll] = useState(false);

  // Chọn mảng video cần render
  const videosToShow = showAll ? musicVideos : musicVideos.slice(0, 3);

  return (
    <section className="mb-8" id="musicVideoList">
      <h2 className="text-2xl font-bold mb-3">
        Music <span className="text-pink-400">Video</span>
      </h2>
      <div className="flex flex-wrap gap-2">
      {/* Grid for videos */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4">
        {videosToShow.map((video, idx) => (
          <a href="/Login/Login.html" key={idx}>
            <div className="bg-[#232026] rounded-xl overflow-hidden w-80 search-item">
              <div className="h-44 w-full bg-gray-700 flex items-center justify-center">
                <img
                  src={video.cover}
                  alt={video.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-4">
                <div className="text-xl font-semibold text-white mb-1">{video.title}</div>
                <div className="flex justify-between items-center text-sm text-gray-300">
                  <span>{video.artist}</span>
                  <span>{video.views} views</span>
                </div>
              </div>
            </div>
          </a>
        ))}
        </div>
        {/* View All Button */}
        <div className="flex flex-col items-center justify-center ml-2 flex-shrink-0">
          <button
            className="cursor-pointer w-14 h-14 bg-[#232323] rounded-full flex items-center justify-center shadow-lg mb-2 hover:bg-pink-500 transition"
            onClick={() => setShowAll((prev) => !prev)}
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <circle cx="12" cy="12" r="10" stroke="white" strokeWidth="2" fill="none"/>
              <path stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" d="M12 8v8m-4-4h8"/>
            </svg>
          </button>
          <span className="text-white font-semibold text-base">
            {showAll ? 'Collapse' : 'View All'}
          </span>
        </div>
      </div>
    </section>
  );
};

export default MusicVideo;