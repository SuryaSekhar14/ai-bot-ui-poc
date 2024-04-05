import React, { useState, useEffect, useRef } from 'react';
import ChatBubble from './ChatBubble';

const ChatArea = ({ messages }) => {
  const [hasFirstMessage, setHasFirstMessage] = useState(false);

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
        backgroundImage: hasFirstMessage ? 'none' : `url('logo512.png')`,
        backgroundSize: 'contain',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      {messages.map((message, index) => (
        <ChatBubble key={index} {...message} />
      ))}
    </div>
  );
};

export default ChatArea;
