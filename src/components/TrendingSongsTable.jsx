import React from 'react';
import data from '../data';
import { findSongById, findAlbumById, findArtistById } from '../utils/dataProcessor';

const { trendingSongs } = data;

const TrendingSongsTable = () => {
  // Get full song objects from IDs
  const songs = trendingSongs.map(id => findSongById(id)).filter(Boolean);

  return (
    <section className="mb-8" id="trendingSongsList">
      <h2 className="text-2xl font-bold mb-3">
        Trending <span className="text-pink-400">Songs</span>
      </h2>
      <div className="overflow-x-auto">
      <table className="min-w-full bg-[#232026] rounded-lg">
        <thead>
          <tr className="text-left text-white">
            <th className="py-2 px-4">#</th>
            <th className="py-2 px-4">Cover</th>
            <th className="py-2 px-4">Title</th>
            <th className="py-2 px-4">Artist</th>
            <th className="py-2 px-4">Album</th>
            <th className="py-2 px-4">Year</th>
          </tr>
        </thead>
        <tbody>
          {songs.map((song, idx) => {
            const album = song.albumId ? findAlbumById(song.albumId) : null;
            const artist = song.artistId ? findArtistById(song.artistId) : null;
            return (
              <tr key={song.id} className="border-t border-[#333] text-gray-200 hover:bg-[#2d2240]">
                <td className="py-2 px-4">{idx + 1}</td>
                <td className="py-2 px-4">
                  <img
                    src={song.cover}
                    alt={song.title}
                    className="release-img"
                    style={{ width: 40, height: 40, borderRadius: 8, objectFit: 'cover' }}
                  />
                </td>
                <td className="py-2 px-4">{song.title}</td>
                <td className="py-2 px-4">{artist ? artist.name : 'Unknown'}</td>
                <td className="py-2 px-4">{album ? album.name : 'Unknown'}</td>
                <td className="py-2 px-4">{album ? album.year : ''}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
    </section>
  );
};

export default TrendingSongsTable;