// pages/Home.jsx
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Sidebar from '../components/Sidebar';
import Header from '../components/Header';
import BillboardSlider from '../components/BillboardSlider';
import WeeklyTopSongs from '../components/WeeklyTopSongs';
import NewReleaseSongs from '../components/NewReleaseSongs';
import TrendingSongsTable from '../components/TrendingSongsTable';
import PopularArtists from '../components/PopularArtists';
import MusicVideo from '../components/MusicVideo';
import TopAlbums from '../components/TopAlbums';
import MoodPlaylists from '../components/MoodPlaylists';
import JoinOurPlatform from '../components/JoinOurPlatform';
import Footer from '../components/Footer';

const Home = () => {
  const [currentUser, setCurrentUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    // Lấy thông tin người dùng từ localStorage nếu có
    const user = JSON.parse(localStorage.getItem('currentUser'));
    if (user) {
      setCurrentUser(user);
    }
  }, []);

  

  return (
    <div className="bg-gradient-to-b from-[#22172b] to-[#3d2a3f] min-h-screen text-white font-sans flex">
      <Sidebar />
      <main className="flex-1 px-8 py-6" style={{ marginLeft: '16rem' }}>
        <Header user={currentUser} />
        
        {/* Welcome Section - Chỉ hiển thị khi đã đăng nhập */}
        {currentUser && (
          <div className="mb-8 bg-gradient-to-r from-purple-900/50 to-pink-900/50 p-6 rounded-xl">
            <h1 className="text-3xl font-bold mb-2">Xin chào, {currentUser.name}!</h1>
            <p className="text-gray-300">Hôm nay bạn muốn nghe gì?</p>
          </div>
        )}
        
        {/* Các thành phần chính của trang Home */}
        <BillboardSlider />
        <WeeklyTopSongs />
        <NewReleaseSongs />
        <TrendingSongsTable />
        <PopularArtists />
        <MusicVideo />
        <TopAlbums />
        <MoodPlaylists />
        
        {/* Chỉ hiển thị JoinOurPlatform khi chưa đăng nhập */}
        {!currentUser && <JoinOurPlatform />}
        
        <Footer />
      </main>
    </div>
  );
};

export default Home;