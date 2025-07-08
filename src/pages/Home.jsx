import React from 'react';
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
 

  return (
    <div className="bg-gradient-to-b from-[#22172b] to-[#3d2a3f] min-h-screen text-white font-sans flex">
      <Sidebar />
      <main className="flex-1 px-8 py-6" style={{ marginLeft: '16rem' }}>
        <Header />
       
        <BillboardSlider />
        <WeeklyTopSongs />
        <NewReleaseSongs />
        <TrendingSongsTable />
        <PopularArtists />
        <MusicVideo />
        <TopAlbums />
        <MoodPlaylists />
        <JoinOurPlatform />
        <Footer />

      </main>
      
    </div>
    
  );
};

export default Home;