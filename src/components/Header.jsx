import React from 'react';
import '../assets/styles/main.css';
import { Link } from 'react-router-dom';

const Header = () => (
  <header className="flex justify-between items-center py-6 px-10">
    <input
      id="searchInput"
      type="text"
      placeholder="Search for tracks, artists, albums..."
      className="rounded-lg px-4 py-2 bg-[#2d2240] text-white w-1/3 focus:outline-none focus:ring-2 focus:ring-pink-400"
    />
    <nav className="flex gap-8 items-center">
      <a href="#" className="hover:text-pink-300">
        About
      </a>
      <a href="#" className="hover:text-pink-300">
        Contact
      </a>
      <a href="#" className="hover:text-pink-300">
        Premium
      </a>
      <div className='flex gap-2'>
      <Link to="/login">
        <button className="cursor-pointer w-24 bg-[#2d2240] text-white px-4 py-1 rounded-lg hover:bg-pink-400 hover:text-white">
          Login
        </button>
      </Link>
      <Link to="/signup">
        <button className="cursor-pointer w-24 bg-[#2d2240] text-white px-4 py-1 rounded-lg hover:bg-pink-400 hover:text-white">
          Sign Up
        </button>
      </Link>
      </div>
    </nav>
  </header>
);

export default Header;