import React from 'react';
import '../assets/styles/main.css';
import { useNavigate, useLocation, Link } from 'react-router-dom';

const Sidebar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const currentUser = JSON.parse(localStorage.getItem('currentUser'));

  const handleLogout = () => {
    localStorage.removeItem('currentUser');
    window.location.href = '/';
  };

  const protectedLinks = ['/discover', '/albums', '/artists'];

  const handleProtectedNavigate = (path) => {
    if (!currentUser && protectedLinks.includes(path)) {
      navigate('/login', { state: { from: { pathname: path } } });
    } else {
      navigate(path);
    }
  };

  const isActive = (path) => location.pathname === path;

  const getButtonClass = (active) =>
    `w-full text-left flex items-center gap-2 py-2 px-3 rounded-lg font-semibold transition-colors 
     ${active ? 'border border-pink-400' : ''}
     hover:bg-[#2d2240]`;

  return (
    <aside className="w-64 bg-[#181a2a] flex flex-col py-6 px-4 fixed top-0 left-0 min-h-screen z-30">
      <div className="text-3xl font-extrabold bg-gradient-to-r from-pink-500 to-sky-400 bg-clip-text text-transparent mb-8">
        Melodies
      </div>

      <nav className="flex flex-col gap-2 text-white">
        {/* Menu group */}
        <div className="mb-2">
          <div className="text-xs text-gray-400 mb-1">Menu</div>

          <button
            onClick={() => navigate('/')}
            className={getButtonClass(isActive('/'))}
          >
            <span>🏠</span> Home
          </button>

          <button
            onClick={() => handleProtectedNavigate('/discover')}
            className={getButtonClass(isActive('/discover'))}
          >
            <span>🔍</span> Discover
          </button>

          <button
            onClick={() => handleProtectedNavigate('/albums')}
            className={getButtonClass(isActive('/albums'))}
          >
            <span>💿</span> Albums
          </button>

          <button
            onClick={() => handleProtectedNavigate('/artists')}
            className={getButtonClass(isActive('/artists'))}
          >
            <span>👤</span> Artists
          </button>
        </div>

        {/* Library group */}
        <div className="mb-2">
          <div className="text-xs text-gray-400 mb-1">Library</div>

          <button className={getButtonClass(false)}>
            <span>🕒</span> Recently Added
          </button>

          <button className={getButtonClass(false)}>
            <span>▶️</span> Most played
          </button>
        </div>

        {/* Playlist and favorite group */}
        <div className="mb-2">
          <div className="text-xs text-gray-400 mb-1">Playlist and favorite</div>

          <button className={getButtonClass(false)}>
            <span>⭐</span> Your favorites
          </button>

          <button className={getButtonClass(false)}>
            <span>🎵</span> Your playlist
          </button>

          <button className={getButtonClass(false)}>
            <span className="text-pink-400">＋</span> Add playlist
          </button>
        </div>

        {/* General group */}
        <div className="mb-2 mt-auto pt-4 border-t border-gray-700">
          <div className="text-xs text-gray-400 mb-1">General</div>

          <button className={getButtonClass(false)}>
            <span>⚙️</span> Setting
          </button>

          {currentUser ? (
            <button
              onClick={handleLogout}
              className="w-full flex items-center gap-2 py-2 px-3 rounded-lg hover:bg-[#2d2240] text-red-400 font-semibold mt-2"
            >
              <span>🚪</span> Đăng xuất
            </button>
          ) : (
            <Link
              to="/login"
              className="w-full flex items-center gap-2 py-2 px-3 rounded-lg hover:bg-[#2d2240] font-semibold mt-2"
            >
              <span>🔑</span> Đăng nhập
            </Link>
          )}
        </div>
      </nav>
    </aside>
  );
};

export default Sidebar;
