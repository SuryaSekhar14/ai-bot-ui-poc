import React, { useState, useEffect, useRef } from 'react';
import ChatBubble from './ChatBubble';
import LinkPopup from './LinkPopup';

const ChatArea = ({ messages }) => {
  const [isPopupOpen, setPopupOpen] = useState(false);
  const [link, setLink] = useState('');
  const [hasFirstMessage, setHasFirstMessage] = useState(false); // New state to track if the first message is received

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

  useEffect(() => {
    if (messages.length > 0 && !hasFirstMessage) {
      setHasFirstMessage(true);
    }
  }, [messages, hasFirstMessage]);

  const chatAreaRef = useRef();
  useEffect(() => {
    chatAreaRef.current.scrollTo({
      top: chatAreaRef.current.scrollHeight,
      behavior: 'smooth',
    });
  }, [messages]);

  return (
    <div
      ref={chatAreaRef}
      className="flex-1 overflow-y-auto p-4 transition-all duration-300 bg-gray-300"
      style={{
        backgroundImage: hasFirstMessage ? 'none' : `url('logo.jpg')`,
        backgroundSize: 'contain',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
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
