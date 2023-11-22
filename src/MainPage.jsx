// src/components/Homepage.js
import React, { useState } from 'react';
import TopicSelectionMenu from './TopicSelectionMenu';
import Profile from './picture/ProfileHolder.jpg'

const Homepage = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setMenuOpen(!isMenuOpen);
  };

  return (
    <div className="bg-white min-h-screen relative">
      {/* Navbar */}
      <nav className="bg-primary p-4 text-white">
        <div className="flex justify-between items-center">
          <div className="mr-4 cursor-pointer" onClick={handleMenuToggle}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="h-6 w-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          </div>
          <div className="flex items-center">
            {/* User details */}
            <img
              // src="https://via.placeholder.com/30"
              src = { Profile }
              alt="User Avatar"
              className="rounded-full h-8 w-8 mr-2"
            />
            <span className="text-sm">Aoun Stang</span>
          </div>
        </div>
      </nav>

      {/* Main content */}
      <div className="p-8">
        <h1 className="text-4xl font-bold mb-4">Homepage</h1>
        <p className="text-lg text-gray-700">
          This is some dummy text to fill in the blank on the main page.
        </p>
      </div>

      {/* Topic Selection Menu */}
      {isMenuOpen && <TopicSelectionMenu onClose={() => setMenuOpen(false)} />}
    </div>
  );
};

export default Homepage;
