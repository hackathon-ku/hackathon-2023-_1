// src/components/TopicSelectionMenu.js
import React from 'react';
import { useNavigate } from 'react-router-dom';

const TopicSelectionMenu = ({ onClose }) => {
  const navigate = useNavigate();

  const handleTopicSelect = (topic) => {
    console.log(`Selected topic: ${topic}`);

    switch (topic) {
      case 'Topic 1':
        navigate('/NisitKU');
        break;
      case 'KU Transcript':
        navigate('/NisitKU/Newtranscript');
        break;
      case 'Topic 2':
        navigate('/NisitKU');
        break;
      case 'KU Calendar':
        navigate('/NisitKU/CalendarKU');
        break;
      default:
        break;
    }
    onClose();
  };

  return (
    <div className="fixed top-0 left-0 flex items-center justify-center">
      <div className="bg-white p-4 rounded shadow-md relative">
        <button
          className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
          onClick={onClose}
        >
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
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
        <button
          className="block px-4 py-2 text-sm text-gray-800 hover:bg-gray-200 w-full text-left mb-2"
          onClick={() => handleTopicSelect('Topic 1')}
        >
          Topic 1
        </button>
        <button
          className="block px-4 py-2 text-sm text-gray-800 hover:bg-gray-200 w-full text-left mb-2"
          onClick={() => handleTopicSelect('KU Transcript')}
        >
          KU Transcript
        </button>
        <button
          className="block px-4 py-2 text-sm text-gray-800 hover:bg-gray-200 w-full text-left mb-2"
          onClick={() => handleTopicSelect('Topic 3')}
        >
          Topic 2
        </button>
        <button
          className="block px-4 py-2 text-sm text-gray-800 hover:bg-gray-200 w-full text-left"
          onClick={() => handleTopicSelect('KU Calendar')}
        >
          KU Calendar
        </button>
      </div>
    </div>
  );
};

export default TopicSelectionMenu;
