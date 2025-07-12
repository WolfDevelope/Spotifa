import React from 'react';
import { Link } from 'react-router-dom';

const ArtistsCard = ({ artist }) => {
  if (!artist) {
    return null;
  }

  return (
    <Link 
      to={`/artist/${artist.id}`} 
      className="flex flex-col items-center search-item group relative"
    >
      <div className="relative">
        <img
          src={artist.avatar}
          alt={artist.name}
          className="rounded-full w-32 h-32 object-cover transition-transform duration-300 group-hover:scale-105"
        />
        <button
          className="absolute -bottom-3 -right-3 bg-pink-500 hover:bg-pink-600 text-white rounded-full w-9 h-9 flex items-center justify-center shadow-lg opacity-0 group-hover:opacity-100 transition-all duration-200"
          title="View Artist"
          tabIndex={-1}
          onClick={e => e.preventDefault()}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-5 h-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
          </svg>
        </button>
      </div>
      <span className="text-lg font-semibold text-white mt-3 hover:text-pink-400 transition-colors">
        {artist.name}
      </span>
    </Link>
  );
};

export default ArtistsCard;