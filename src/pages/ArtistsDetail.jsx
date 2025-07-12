// src/pages/ArtistsDetail.jsx
import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { findArtistById, findSongById, findAlbumById } from '../utils/dataProcessor';

const ArtistsDetail = () => {
  const { id } = useParams();
  const [artist, setArtist] = useState(null);
  const [songs, setSongs] = useState([]);
  const [albums, setAlbums] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    setError(null);
    const foundArtist = findArtistById(id);

    if (foundArtist) {
      setArtist(foundArtist);
      // Lấy thông tin chi tiết của các album và bài hát của nghệ sĩ
      const artistSongs = foundArtist.songIds.map(songId =>
        findSongById(songId)
      ).filter(Boolean);
      setSongs(artistSongs);

      const artistAlbums = foundArtist.albumIds.map(albumId =>
        findAlbumById(albumId)
      ).filter(Boolean);
      setAlbums(artistAlbums);

    } else {
      setError('Không tìm thấy nghệ sĩ.');
    }
    setLoading(false);
  }, [id]);

  if (loading) return <div>Đang tải thông tin nghệ sĩ...</div>;
  if (error) return <div>Lỗi: {error}</div>;
  if (!artist) return <div>Không có thông tin nghệ sĩ.</div>;

  return (
    <div style={{ padding: '20px' }}>
      <h1>{artist.name}</h1>
      {artist.avatar && <img src={artist.avatar} alt={artist.name} style={{ width: '150px', height: '150px', borderRadius: '50%', objectFit: 'cover', marginBottom: '20px' }} />}
      <h3>Tiểu sử:</h3>
      <p>{artist.bio || "Chưa có tiểu sử cho nghệ sĩ này."}</p>
      <h3>Albums:</h3>
      <ul>
        {albums.length > 0 ? (
          albums.map((album) => (
            <li key={album.id}>
              <Link to={`/album/${album.id}`}>{album.name}</Link> ({album.year || 'N/A'})
            </li>
          ))
        ) : (
          <li>Không có album nào.</li>
        )}
      </ul>
      <h3>Các bài hát nổi bật:</h3>
      <ul>
        {songs.length > 0 ? (
          songs.map((song) => (
            <li key={song.id}>
              <Link to={`/song/${song.id}`}>{song.title}</Link> - {song.duration || 'N/A'}
            </li>
          ))
        ) : (
          <li>Không có bài hát nổi bật nào.</li>
        )}
      </ul>
    </div>
  );
};

export default ArtistsDetail;