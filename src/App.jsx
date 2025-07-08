import React, { useState } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import SignUp from './pages/SignUp';
import Discover from './pages/Discover';
import Albums from './pages/Albums';
import Artists from './pages/Artists';
import MusicPlayer from './components/MusicPlayer';
import RequireAuth from './components/RequireAuth';
function App() {
  const [isPlaying, setIsPlaying] = useState(false);
  const location = useLocation();
  const hiddenPlayerRoutes = ['/login', '/signup', '/admin'];
  const isAuthPage = hiddenPlayerRoutes.includes(location.pathname);

  return (
    <>
      
      <div style={{ paddingBottom: isAuthPage ? '0' : '72px' }}>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          {/* Các route yêu cầu đăng nhập */}
          <Route path="/discover" element={<RequireAuth><Discover /></RequireAuth>} />
          <Route path="/albums" element={<RequireAuth><Albums /></RequireAuth>} />
          <Route path="/artists" element={<RequireAuth><Artists /></RequireAuth>} />
        </Routes>        
      </div>

{!isAuthPage && (
      <MusicPlayer 
        isPlaying={isPlaying}
        setIsPlaying={setIsPlaying}
        isAuthPage={isAuthPage}
      />
)}
    </>
  );
}

export default App;
