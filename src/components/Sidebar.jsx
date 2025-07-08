import React from 'react';
import '../assets/styles/main.css';
import { NavLink, Link, useNavigate, useLocation } from 'react-router-dom';
const Sidebar = () => {

  const navigate = useNavigate();
  const location = useLocation();
  const currentUser = JSON.parse(localStorage.getItem('currentUser'));
  const handleLogout = () => {
    localStorage.removeItem('currentUser');
    // Cập nhật lại state trong App component bằng cách tải lại trang
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

return (
<aside className="w-64 bg-[#181a2a] flex flex-col py-6 px-4 fixed top-0 left-0 min-h-screen z-30">
    <div className="text-3xl font-extrabold bg-gradient-to-r from-pink-500 to-sky-400 bg-clip-text text-transparent mb-8">
      Melodies
    </div>
    <nav className="flex flex-col gap-2 text-white">
      {/* Menu group */}
      <div className="mb-2">
        <div className="text-xs text-gray-400 mb-1">Menu</div>
        <NavLink
          to="/"
          className={({ isActive }) =>
            "flex items-center gap-2 py-2 px-3 rounded-lg hover:bg-[#2d2240] font-semibold " +
            (isActive ? "border border-pink-400" : "")
          }
        >
          <span>🏠</span> Home
        </NavLink>
        <NavLink
          to="/discover"
          onClick={() => handleProtectedNavigate('/discover')}
          className={({ isActive }) =>
            "flex items-center gap-2 py-2 px-3 rounded-lg hover:bg-[#2d2240] font-semibold " +
            (isActive ? "border border-pink-400" : "")
          }
        >
          <span>🔍</span> Discover
        </NavLink>
        <NavLink
          to="/albums"
          onClick={() => handleProtectedNavigate('/albums')}
          className={({ isActive }) =>
            "flex items-center gap-2 py-2 px-3 rounded-lg hover:bg-[#2d2240] font-semibold " +
            (isActive ? "border border-pink-400" : "")
          }
        >
          <span>💿</span> Albums
        </NavLink>
        <NavLink
          to="/artists"
          onClick={() => handleProtectedNavigate('/artists')}
          className={({ isActive }) =>
            "flex items-center gap-2 py-2 px-3 rounded-lg hover:bg-[#2d2240] font-semibold " +
            (isActive ? "border border-pink-400" : "")
          }
        >
          <span>👤</span> Artists
        </NavLink>
      </div>
      {/* Library group */}
      <div className="mb-2">
        <div className="text-xs text-gray-400 mb-1">Library</div>
        <a
          href="#"
          className="flex items-center gap-2 py-2 px-3 rounded-lg hover:bg-[#2d2240]"
        >
          <span>🕒</span> Recently Added
        </a>
        <a
          href="#"
          className="flex items-center gap-2 py-2 px-3 rounded-lg hover:bg-[#2d2240]"
        >
          <span>▶️</span> Most played
        </a>
      </div>
      {/* Playlist and favorite group */}
      <div className="mb-2">
        <div className="text-xs text-gray-400 mb-1">Playlist and favorite</div>
        <a
          href="#"
          className="flex items-center gap-2 py-2 px-3 rounded-lg hover:bg-[#2d2240]"
        >
          <span>⭐</span> Your favorites
        </a>
        <a
          href="#"
          className="flex items-center gap-2 py-2 px-3 rounded-lg hover:bg-[#2d2240]"
        >
          <span>🎵</span> Your playlist
        </a>
        <a
          href="#"
          className="flex items-center gap-2 py-2 px-3 rounded-lg hover:bg-[#2d2240]"
        >
          <span className="text-pink-400">＋</span> Add playlist
        </a>
      </div>
      {/* General group */}
      <div className="mb-2">
        <div className="text-xs text-gray-400 mb-1">General</div>
        <a
          href="#"
          className="flex items-center gap-2 py-2 px-3 rounded-lg hover:bg-[#2d2240]"
        >
          <span>⚙️</span> Setting
        </a>
        {/* Phần đăng nhập/đăng xuất */}
      <div className="mt-auto pt-4 border-t border-gray-700">
        {currentUser ? (
          <button
            onClick={handleLogout}
            className="w-full flex items-center gap-2 py-2 px-3 rounded-lg hover:bg-[#2d2240] text-red-400 font-semibold"
          >
            <span>🚪</span> Đăng xuất
          </button>
        ) : (
          <Link
            to="/login"
            className="flex items-center gap-2 py-2 px-3 rounded-lg hover:bg-[#2d2240] font-semibold"
          >
            <span>🔑</span> Đăng nhập
          </Link>
        )}
      </div>
      </div>
    </nav>
  </aside>
)
};  

export default Sidebar;