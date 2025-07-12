// src/pages/SongDetail.jsx
import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { findSongById, findArtistById, findAlbumById } from '../utils/dataProcessor';

const SongDetail = () => {
  const { id } = useParams();
  const [song, setSong] = useState(null);
  const [artist, setArtist] = useState(null);
  const [album, setAlbum] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    setError(null);

    const foundSong = findSongById(id);

    if (foundSong) {
      setSong(foundSong);
      if (foundSong.artistId) {
        setArtist(findArtistById(foundSong.artistId));
      }
      if (foundSong.albumId) {
        setAlbum(findAlbumById(foundSong.albumId));
      }
    } else {
      setError('Không tìm thấy bài hát.');
    }
    setLoading(false);
  }, [id]);

  if (loading) return <div>Đang tải thông tin bài hát...</div>;
  if (error) return <div>Lỗi: {error}</div>;
  if (!song) return <div>Không có thông tin bài hát.</div>;

  return (
    <div style={{ padding: '20px' }}>
      <h1>{song.title}</h1>
      <p>
        <strong>Nghệ sĩ:</strong>
        {artist ? (
          <Link to={`/artist/${artist.id}`}> {artist.name}</Link>
        ) : (
          ` ${song.artist || 'Không rõ'}` // Fallback nếu dữ liệu song không có artistId hoặc artist đó không tìm thấy
        )}
      </p>
      {album && <p>
        <strong>Album:</strong>
        <Link to={`/album/${album.id}`}> {album.name}</Link>
      </p>}
      {song.duration && <p><strong>Thời lượng:</strong> {song.duration}</p>}
      {song.releaseDate && <p><strong>Ngày phát hành:</strong> {song.releaseDate}</p>}
      <h3>Lời bài hát:</h3>
      <p style={{ whiteSpace: 'pre-wrap' }}>{song.lyrics || "Chưa có lời bài hát cho bài này."}</p>
      {song.cover && <img src={song.cover} alt={song.title} style={{ width: '200px', height: '200px', objectFit: 'cover', marginTop: '20px' }} />}
      {song.src && (
        <div style={{ marginTop: '20px' }}>
          <audio controls src={song.src}>
            Trình duyệt của bạn không hỗ trợ phát âm thanh.
          </audio>
        </div>
      )}
    </div>
  );
};

export default SongDetail;