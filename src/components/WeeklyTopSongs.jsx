import React, { useState } from 'react';
import '../assets/styles/main.css';
import data from '../data';

const { weeklyTopSongs } = data;

const WeeklyTopSongs = () => {
  const [showAll, setShowAll] = useState(false);

  // Chọn mảng video cần render
  const songsToShow = showAll ? weeklyTopSongs : weeklyTopSongs.slice(0, 5);

  return (
    <section className="mb-8" id="weeklyTopSongsList">
      <h2 className="text-2xl font-bold mb-3">
        Weekly Top <span className="text-pink-400">Songs</span>
      </h2>
      <div className="flex flex-wrap gap-2">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 flex-grow">
          {songsToShow.map((song, idx) => (
            <div
              key={idx}
              className="bg-[#2d2240] rounded-lg p-3 w-40 flex flex-col items-center search-item"
            >
              <div className="relative group">
                <img
                  src={song.cover}
                  alt="Song"
                  className="rounded-lg mb-2 w-30 h-30 object-cover aspect-square"
                />
                {/* Nút play có thể bổ sung thêm logic phát nhạc sau */}
                <button
                  className="absolute bottom-3 right-0 bg-purple-500 hover:bg-purple-600 text-white rounded-full w-9 h-9 flex items-center justify-center shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200 play-btn"
                  title="Nghe nhạc"
                  // onClick={() => playSong(song.src)} // TODO: viết hàm playSong
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M8 5v14l11-7z"></path>
                  </svg>
                </button>
              </div>
              <div className="flex flex-row items-center w-full justify-between mt-2">
                <span className="text-sm font-semibold">{song.title}</span>
              </div>
              <span className="text-xs text-gray-400 w-full text-left">
                {song.artist}
              </span>
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
export default WeeklyTopSongs;