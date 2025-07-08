import React from 'react';
import Sidebar from '../components/Sidebar';
import Header from '../components/Header';
import JoinOurPlatform from '../components/JoinOurPlatform';
import Footer from '../components/Footer';
import PopularArtists from '../components/PopularArtists';
import EmergingPopArtists from '../components/EmergingPopArtists';
import RisingAlternativeIndieArtists from '../components/RisingAlternativeIndieArtists';
import RecentlyViralArtists from '../components/RecentlyViralArtists';
const Artists = () => {
    return (
        <div className="bg-gradient-to-b from-[#22172b] to-[#3d2a3f] min-h-screen text-white font-sans flex">
      <Sidebar />
      <main className="flex-1 px-8 py-6" style={{ marginLeft: '16rem' }}>
        <Header />
       
        <PopularArtists />
        <EmergingPopArtists />
        <RisingAlternativeIndieArtists />
        <RecentlyViralArtists />
        <JoinOurPlatform />
        <Footer />

      </main>
      
    </div>
    );
};

export default Artists;
