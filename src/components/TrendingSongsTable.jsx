
import React from 'react';
import '../assets/styles/main.css';
import data from '../data';

const { trendingSongs } = data;

const TrendingSongsTable = () => (
  <section className="mb-8" id="trendingSongsList">
    <h2 className="text-2xl font-bold mb-3">
      Trending <span className="text-pink-400">Songs</span>
    </h2>
    <div className="bg-[#2d2240] rounded-xl overflow-hidden">
      <div className="flex font-semibold text-white text-base px-4 py-3">
        <div className="w-16">#</div>
        <div className="flex-1">Title</div>
        <div className="w-40">Release Date</div>
        <div className="flex-1">Album</div>
        <div className="w-24 text-right">Time</div>
      </div>
      {trendingSongs.map((song, idx) => (
        <a href="/Login/Login.html" key={idx}>
          <div className="flex gap-2 items-center border-b border-[#3d2a3f] hover:bg-[#3d2a3f] px-4 py-2 search-item">
            <div className="w-16 flex gap-2 items-center font-bold text-white text-lg">
              #{idx + 1}
              <div>
                <img
                  src={song.cover}
                  alt={song.title}
                  className="release-img"
                  style={{ width: 40, height: 40, borderRadius: 8, objectFit: 'cover' }}
                />
              </div>
            </div>
            <div className="flex-1">
              <div className="text-white font-semibold">{song.title}</div>
              <div className="text-xs text-gray-300">{song.artist}</div>
            </div>
            <div className="w-40 text-white">{song.releaseDate}</div>
            <div className="flex-1 text-white">{song.album}</div>
            <div className="w-24 flex items-center justify-end">
              <span className="heart-hover mr-2">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" viewBox="0 0 24 24">
                  <path
                    className="heart-outline"
                    d="M12.1 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41 0.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54l-1.35 1.31z"
                  />
                </svg>
              </span>
              <span className="text-white">{song.duration}</span>
            </div>
          </div>
        </a>
      ))}
      <div className="flex justify-center mt-4 mb-2">
        <button className="cursor-pointer bg-pink-500 hover:bg-pink-400 text-white text-base font-semibold rounded-full shadow-lg transition-all duration-200 focus:outline-none" style={{ width: 102, height: 25, minWidth: 102, minHeight: 25 }}>
          View All
        </button>
      </div>
    </div>
  </section>
);

export default TrendingSongsTable;