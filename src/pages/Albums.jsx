import React from 'react';
import Sidebar from '../components/Sidebar';
import Header from '../components/Header';
import JoinOurPlatform from '../components/JoinOurPlatform';
import Footer from '../components/Footer';
import TopAlbums from '../components/TopAlbums';
import NewAlbums from '../components/NewAlbums';
import PopularAlbums from '../components/PopularAlbums';
import MixAlbums from '../components/MixAlbums';
const Albums = () => {
    return (
        <div className="bg-gradient-to-b from-[#22172b] to-[#3d2a3f] min-h-screen text-white font-sans flex">
      <Sidebar />
      <main className="flex-1 px-8 py-6" style={{ marginLeft: '16rem' }}>
        <Header />
       
        <TopAlbums />
        <NewAlbums />
        <PopularAlbums />
        <MixAlbums />
        
        <JoinOurPlatform />
        <Footer />

      </main>
      
    </div>
    );
};

export default Albums;
