// ChatArea.js

import React, { useState, useEffect, useRef } from 'react';
import ChatBubble from './ChatBubble';
import LinkPopup from './LinkPopup';

const ChatArea = ({ messages }) => {
  // State to manage the popup visibility and link
  const [isPopupOpen, setPopupOpen] = useState(false);
  const [link, setLink] = useState('');

  // Function to open the popup
  const openPopup = (link) => {
    setPopupOpen(true);
    setLink(link);
  };

  // Function to close the popup
  const closePopup = () => {
    setPopupOpen(false);
    setLink('');
  };

  const chatAreaRef = useRef();
  useEffect(() => {
    // Scroll to the bottom with smooth animation
    chatAreaRef.current.scrollTo({
      top: chatAreaRef.current.scrollHeight,
      behavior: 'smooth',
    });
  }, [messages]);

  return (
    <div ref={chatAreaRef} className="flex-1 overflow-y-auto p-4 transition-all duration-300 bg-gray-300">
      {messages.map((message, index) => (
        <ChatBubble key={index} {...message} openPopup={openPopup} closePopup={closePopup} />
      ))}

      {isPopupOpen && (
        <LinkPopup
          link={link}
          onClose={closePopup}
        />
      )}
    </div>
  );
};

export default ChatArea;
