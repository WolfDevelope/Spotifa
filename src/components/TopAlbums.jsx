import React, { useState } from 'react';
import '../assets/styles/main.css';
import data from '../data';

const { topAlbums } = data;

const TopAlbums = () => {
  const [showAll, setShowAll] = useState(false);

  // Chọn mảng video cần render
  const albumsToShow = showAll ? topAlbums : topAlbums.slice(0, 5);

  return (
  <section className="mb-8" id="topAlbumsList">
    <h2 className="text-2xl font-bold mb-3">
      Top <span className="text-blue-400">Albums</span>
    </h2>
    <div className="flex flex-wrap gap-2">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 flex-grow">
          {albumsToShow.map((album, idx) => (
          <div className="bg-[#2d2240] rounded-lg p-3 w-40 h-60 flex flex-col justify-between items-center overflow-hidden search-item">
            <div className="w-full flex flex-col items-center">
              <img
                src={album.cover}
                alt={album.name}
                className="rounded-lg mb-2 w-32 h-32 object-cover bg-gray-700"
              />
              <span className="text-base font-semibold text-white text-center line-clamp-2">{album.name}</span>
            </div>
            <div className="text-center text-gray-400 text-xs">{album.artist}</div>
          </div>
          ))}
        </div>
      
      {/* View All Button */}
      <div className="flex flex-col items-center justify-center flex-shrink-0">
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

export default TopAlbums;