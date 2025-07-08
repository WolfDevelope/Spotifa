import React, { useState, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import '../assets/styles/main.css';

const Account = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState({
    name: '',
    email: '',
    phone: '',
    about: '',
    genre: ''
  });

  useEffect(() => {
    // Check if user is logged in
    const currentUser = JSON.parse(localStorage.getItem('currentUser') || '{}');
    if (!currentUser.email) {
      navigate('/login');
    } else {
      setUser(currentUser);
    }
  }, [navigate]);

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Update user data
    const updatedUser = { ...user };
    const users = JSON.parse(localStorage.getItem('users') || '[]');
    const userIndex = users.findIndex(u => u.email === user.email);
    
    if (userIndex !== -1) {
      users[userIndex] = updatedUser;
      localStorage.setItem('users', JSON.stringify(users));
      localStorage.setItem('currentUser', JSON.stringify(updatedUser));
      alert('Cập nhật thông tin thành công!');
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleLogout = () => {
    localStorage.removeItem('currentUser');
    navigate('/');
  };

  return (
    <div className="flex min-h-screen bg-gradient-to-b from-[#22172b] to-[#3d2a3f] text-white">
      {/* Sidebar */}
      <aside className="w-64 bg-[#181a2a] flex flex-col py-6 px-4 fixed top-0 left-0 h-full z-30">
        <div className="text-3xl font-extrabold bg-gradient-to-r from-pink-500 to-sky-400 bg-clip-text text-transparent mb-8">
          Melodies
        </div>
        <nav className="flex flex-col gap-2 text-white">
          <div className="mb-2">
            <div className="text-xs text-gray-400 mb-1">Menu</div>
            <Link to="/" className="flex items-center gap-2 py-2 px-3 rounded-lg hover:bg-[#2d2240] font-semibold">
              <span>🏠</span> Home
            </Link>
            <Link to="/account" className="flex items-center gap-2 py-2 px-3 rounded-lg hover:bg-[#2d2240] border border-pink-400 font-semibold text-pink-400">
              <span>👤</span> Account
            </Link>
          </div>
          <div className="mb-2">
            <div className="text-xs text-gray-400 mb-1">General</div>
            <button 
              onClick={handleLogout} 
              className="flex items-center gap-2 py-2 px-3 rounded-lg text-pink-400 hover:bg-[#2d2240] w-full text-left"
            >
              <span>⏻</span> Logout
            </button>
          </div>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 px-8 py-8 ml-64">
        <button 
          onClick={() => navigate(-1)} 
          className="flex items-center gap-2 bg-[#2d2240] hover:bg-pink-400 text-white px-4 py-2 rounded-lg shadow transition"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
          </svg>
          <span>Back</span>
        </button>

        {/* Header */}
        <header className="flex justify-between items-center py-6 px-10">
          <h1 className="text-2xl font-bold">Quản lý tài khoản</h1>
          <span className="inline-block">
            <img 
              src="/assets/images/profile-icon.png" 
              className="w-10 h-10 hover:bg-pink-400 rounded-full" 
              alt="Profile" 
              title="Tài khoản"
            />
          </span>
        </header>

        {/* Account Form */}
        <section className="max-w-2xl mx-auto bg-[#2d2240]/90 rounded-2xl shadow-2xl p-10 mt-6 search-item">
          <h2 className="text-xl font-bold mb-6 text-pink-400">User Information</h2>
          <form onSubmit={handleSubmit} className="space-y-5">
            <div className="search-item">
              <label className="block mb-1 font-semibold">Name</label>
              <input 
                name="name"
                type="text" 
                value={user.name}
                onChange={handleChange}
                className="w-full px-4 py-2 rounded-lg bg-[#3d2a3f] text-white focus:outline-none focus:ring-2 focus:ring-pink-400" 
                required 
              />
            </div>
            <div className="search-item">
              <label className="block mb-1 font-semibold">Email</label>
              <input 
                name="email"
                type="email" 
                value={user.email}
                onChange={handleChange}
                className="w-full px-4 py-2 rounded-lg bg-[#3d2a3f] text-gray-400 focus:outline-none focus:ring-2 focus:ring-pink-400" 
                disabled 
              />
            </div>
            <div className="search-item">
              <label className="block mb-1 font-semibold">Phone</label>
              <input 
                name="phone"
                type="text" 
                value={user.phone}
                onChange={handleChange}
                className="w-full px-4 py-2 rounded-lg bg-[#3d2a3f] text-white focus:outline-none focus:ring-2 focus:ring-pink-400" 
              />
            </div>
            <div className="search-item">
              <label className="block mb-1 font-semibold">About</label>
              <textarea 
                name="about"
                rows="3" 
                value={user.about}
                onChange={handleChange}
                className="w-full px-4 py-2 rounded-lg bg-[#3d2a3f] text-white focus:outline-none focus:ring-2 focus:ring-pink-400"
              ></textarea>
            </div>
            <div className="search-item">
              <label className="block mb-1 font-semibold">Favorite Genre</label>
              <input 
                name="genre"
                type="text" 
                value={user.genre}
                onChange={handleChange}
                className="w-full px-4 py-2 rounded-lg bg-[#3d2a3f] text-white focus:outline-none focus:ring-2 focus:ring-pink-400" 
                placeholder="Pop, Rock, EDM..." 
              />
            </div>
            <div>
              <button 
                type="submit" 
                className="bg-pink-500 hover:bg-pink-600 text-white font-bold px-8 py-2 rounded-lg transition shadow"
              >
                Save Changes
              </button>
            </div>
          </form>
        </section>
      </main>
    </div>
  );
};

export default Account;