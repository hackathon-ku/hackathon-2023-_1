// src/components/Homepage.js
import React, { useState } from 'react';
import TopicSelectionMenu from '../components/TopicSelectionMenu';
import Profile from '../picture/ProfileHolder.jpg'
import Menu from '../picture/Menu.jpg'

const Homepage = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setMenuOpen(!isMenuOpen);
  };

  return (
    <div className="bg-white min-h-screen relative">
      {/* Navbar */}
      <nav className="bg-[#07665e] p-4 text-white">
        <div className="flex justify-between items-center">
          <div className="mr-4 cursor-pointer" onClick={handleMenuToggle}>
            <img 
            src={Menu}
            className='h-8 w-auto'
            />
          </div>
          <div className="flex items-center">
            {/* User details */}
            <img
              // src="https://via.placeholder.com/30"
              src = { Profile }
              alt="User Avatar"
              className="rounded-full h-8 w-8 mr-2"
            />
            <span className="text-sm">Thanaporn Kitworakiat</span>
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
