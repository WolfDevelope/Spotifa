import React from 'react';
import Sidebar from '../components/Sidebar';
import Header from '../components/Header';
import NewReleaseSongs from '../components/NewReleaseSongs';
import PopularArtists from '../components/PopularArtists';
import MusicVideo from '../components/MusicVideo';
import MoodPlaylists from '../components/MoodPlaylists';
import JoinOurPlatform from '../components/JoinOurPlatform';
import Footer from '../components/Footer';
import MusicGenres from '../components/MusicGenres';
import NewAlbums from '../components/NewAlbums';
const Discover = () => {
    return (
        <div className="bg-gradient-to-b from-[#22172b] to-[#3d2a3f] min-h-screen text-white font-sans flex">
      <Sidebar />
      <main className="flex-1 px-8 py-6" style={{ marginLeft: '16rem' }}>
        <Header />
       
        <MusicGenres />
        <MoodPlaylists />
        <PopularArtists />
        <MusicVideo />
        <NewReleaseSongs />
        <NewAlbums />
        
        
        <JoinOurPlatform />
        <Footer />

      </main>
      
    </div>
    );
};

export default Discover;
