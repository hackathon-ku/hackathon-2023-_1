// src/components/Homepage.js
import React, { useState } from 'react';
import TopicSelectionMenu from '../components/TopicSelectionMenu';
import Profile from '../picture/ProfileHolder.jpg'
import Menu from '../picture/Menu.jpg'
import { useNavigate } from 'react-router';
import Calendar from '../picture/KuEvent.jpg'
import TranScript from '../picture/Transcript.jpg'

const Homepage = () => {
  const navigate = useNavigate();
  const [isMenuOpen, setMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setMenuOpen(!isMenuOpen);
  };

  return (
    <div className="bg-[#383737] min-h-screen relative">
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
      <div className="p-8 bg-[#f8f8f8]">
        <button onClick={() => navigate('/NisitKU/CalendarKU')}>
          <img
          src={Calendar}
          className='h-40 w-40 sm:h-20 sm:w-20'/>
        </button>
        <button onClick={() => navigate('/NisitKU/Newtranscript')}>
          <img
          src={TranScript}
          className='h-40 w-40 sm:h-20 sm:w-20'/>
        </button>
        
      </div>

      {/* Topic Selection Menu */}
      {isMenuOpen && <TopicSelectionMenu onClose={() => setMenuOpen(false)} />}
    </div>
  );
};

export default Homepage;
