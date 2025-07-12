// src/pages/AlbumDetail.jsx
import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { findAlbumById, findArtistById, findSongById } from '../utils/dataProcessor';

const AlbumDetail = () => {
  const { id } = useParams();
  const [album, setAlbum] = useState(null);
  const [artist, setArtist] = useState(null);
  const [tracks, setTracks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    setError(null);
    const foundAlbum = findAlbumById(id);

    if (foundAlbum) {
      setAlbum(foundAlbum);
      if (foundAlbum.artistId) {
        setArtist(findArtistById(foundAlbum.artistId));
      }
      // Lấy thông tin chi tiết của từng bài hát trong album
      const albumTracks = foundAlbum.songIds.map(songId =>
        findSongById(songId)
      ).filter(Boolean); // Lọc bỏ các giá trị undefined nếu không tìm thấy bài hát
      setTracks(albumTracks);

    } else {
      setError('Không tìm thấy album.');
    }
    setLoading(false);
  }, [id]);

  if (loading) return <div>Đang tải thông tin album...</div>;
  if (error) return <div>Lỗi: {error}</div>;
  if (!album) return <div>Không có thông tin album.</div>;

  return (
    <div style={{ padding: '20px' }}>
      <h1>{album.name}</h1>
      {artist && <p>
        <strong>Nghệ sĩ:</strong>
        <Link to={`/artist/${artist.id}`}> {artist.name}</Link>
      </p>}
      {album.year && <p><strong>Năm phát hành:</strong> {album.year}</p>}
      {album.description && <p><strong>Mô tả:</strong> {album.description}</p>}
      {album.cover && <img src={album.cover} alt={album.name} style={{ width: '200px', height: '200px', objectFit: 'cover', marginTop: '20px' }} />}
      <h3>Các bài hát:</h3>
      <ul>
        {tracks.length > 0 ? (
          tracks.map((track) => (
            <li key={track.id}>
              <Link to={`/song/${track.id}`}>{track.title}</Link> - {track.duration || 'N/A'}
            </li>
          ))
        ) : (
          <li>Không có bài hát nào trong album này.</li>
        )}
      </ul>
    </div>
  );
};

export default AlbumDetail;