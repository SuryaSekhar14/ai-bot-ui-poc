import React, { useEffect, useRef } from 'react';
import ChatBubble from './ChatBubble';

const ChatArea = ({ messages }) => {
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
        <ChatBubble key={index} {...message} />
      ))}
    </div>
  );
};

export default ChatArea;