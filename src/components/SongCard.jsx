import React from 'react';
import { Link } from 'react-router-dom';
import { findArtistById, findAlbumById } from '../utils/dataProcessor';
import { useMusic } from '../context/MusicContext';

const SongCard = ({ song }) => {
  
  if (!song) {
    return null;
  }

  // Lấy thông tin nghệ sĩ và album dựa vào ID
  const artist = song.artistId ? findArtistById(song.artistId) : null;
  const album = song.albumId ? findAlbumById(song.albumId) : null;
  const { setCurrentTrack, setIsPlaying } = useMusic();

  const handlePlay = (e) => {
    e.stopPropagation(); // Để không trigger click vào Link
    setCurrentTrack(song);
    setIsPlaying(true);
  };

  return (
    <div className="bg-[#2d2240] rounded-lg p-3 w-40 flex flex-col items-center search-item">
      <div className="relative group w-full">
        <Link to={`/song/${song.id}`} >  
          <img
            src={song.cover}
            alt={song.title}
            className="rounded-lg mb-2 w-full aspect-square object-cover"
          />
        </Link>
        {/* Nút play có logic phát nhạc */}
        <button
          className="absolute bottom-3 right-0 bg-purple-500 hover:bg-purple-600 text-white rounded-full w-9 h-9 flex items-center justify-center shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200 play-btn"
          title="Nghe nhạc"
          onClick={handlePlay}
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
        <Link 
          to={`/song/${song.id}`} 
          className="text-sm font-semibold text-white hover:text-pink-400 transition-colors"
        >
          {song.title}
        </Link>
      </div>
      <Link 
        to={artist ? `/artist/${artist.id}` : '#'} 
        className="text-xs text-gray-400 w-full text-left hover:text-white transition-colors"
      >
        {artist ? artist.name : 'Unknown Artist'}
      </Link>
    </div>
  );
};

export default SongCard;