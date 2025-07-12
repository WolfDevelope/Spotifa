import React from 'react';
import { Link } from 'react-router-dom';
import { findArtistById } from '../utils/dataProcessor';

const AlbumCard = ({ album }) => {
  if (!album) {
    return null;
  }

  const artist = album.artistId ? findArtistById(album.artistId) : null;

  return (
    <Link 
      to={`/album/${album.id}`} 
      className="bg-[#2d2240] rounded-lg p-3 w-40 h-60 flex flex-col justify-between items-center overflow-hidden search-item hover:bg-[#3a2d52] transition-colors"
    >
      <div className="w-full flex flex-col items-center group">
        <div className="relative w-32 h-32 mb-2">
          <img
            src={album.cover}
            alt={album.name}
            className="rounded-lg w-full h-full object-cover bg-gray-700 group-hover:opacity-90 transition-opacity"
          />
          {/* Optional: Add play button on hover */}
          <button
            className="absolute bottom-1 right-1 bg-pink-500 text-white rounded-full w-8 h-8 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity"
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              // TODO: Add play album functionality
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-4 h-4"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M8 5v14l11-7z" />
            </svg>
          </button>
        </div>
        <span className="text-base font-semibold text-white text-center line-clamp-2 hover:text-pink-400 transition-colors">
          {album.name}
        </span>
      </div>
      {artist ? (
        <Link 
          to={`/artist/${artist.id}`}
          className="text-center text-gray-400 hover:text-white text-xs transition-colors"
          onClick={(e) => e.stopPropagation()}
        >
          {artist.name}
        </Link>
      ) : (
        <span className="text-center text-gray-400 text-xs">Unknown Artist</span>
      )}
    </Link>
  );
};

export default AlbumCard;