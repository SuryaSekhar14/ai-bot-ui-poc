// LinkPopup.js

import React from 'react';
import { MdClose } from 'react-icons/md';

const LinkPopup = ({ link, onClose }) => {
  const handleOverlayClick = (e) => {
    // Close the overlay if the user clicks outside the popup
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <div className="p-4 fixed top-0 right-0 bottom-0 left-0 flex items-end justify-end bg-black bg-opacity-10 sm:bg-opacity-5" onClick={handleOverlayClick}>
      <div className="bg-white rounded-t-lg shadow-md p-6 w-full h-full lg:w-3/5 lg:h-full rounded-b-lg">
        <div className="flex justify-end">
          <button
            className="text-gray-600 hover:text-gray-800"
            onClick={onClose}
          >
            <MdClose size={24} />
          </button>
        </div>
        <div className="flex-grow overflow-y-auto">
          <p className="text-gray-800">Popup Content</p>
          <a
            className="text-blue-500 underline"
            href={link}
            target="_blank"
            rel="noopener noreferrer"
          >
            Open Link
          </a>
        </div>
      </div>
    </div>
  );
};

export default LinkPopup;
