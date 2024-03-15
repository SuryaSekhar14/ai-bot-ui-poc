// LinkPopup.js

import React, { useState, useEffect } from 'react';
import { MdClose } from 'react-icons/md';

const LinkPopup = ({ link, onClose }) => {
  const [iframeKey, setIframeKey] = useState(0);

  useEffect(() => {
    // Increment the key to force remounting of the iframe when the link changes
    setIframeKey(prevKey => prevKey + 1);
  }, [link]);

  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <div className="p-4 fixed top-0 right-0 bottom-0 left-0 flex items-end justify-end bg-black bg-opacity-10 sm:bg-opacity-5" onClick={handleOverlayClick}>
      <div className="bg-white rounded-t-lg shadow-md p-6 w-full h-full lg:w-3/5 lg:h-full rounded-b-lg">
        <div className="flex justify-end pb-3">
          <button
            className="text-gray-600 hover:text-gray-800"
            onClick={onClose}
          >
            <MdClose size={24} />
          </button>
        </div>
        <div className="flex">
          {link.endsWith('.pdf') ? (
            <iframe
              key={iframeKey}
              title="PDF Viewer"
              src={`https://docs.google.com/gview?url=${link}&embedded=true`}
              className="w-full h-full"
              style={{ height: '87vh' }}
              frameBorder="0"
            />
          ) : (
            <p className="text-gray-800">Error loading the PDF File. File is not a PDF.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default LinkPopup;