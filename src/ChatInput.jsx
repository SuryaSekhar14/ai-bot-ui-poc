import React, { useState, useRef, useEffect } from 'react';
import { IoSend } from 'react-icons/io5';

const ChatInput = ({ userInput, handleUserInput, handleSendMessage, handleKeyPress, isBotBusy }) => {
  const inputRef = useRef();
  const [isLoading, setIsLoading] = useState(false);

  const handleSendMessageWithLoading = async () => {
    if (!isLoading) {
      setIsLoading(true);
      await handleSendMessage();
      setIsLoading(false);
    }
  };

  useEffect(() => {
    if (isBotBusy) {
      inputRef.current.blur();
    } else {
      inputRef.current.focus();
    }
  }, [isBotBusy]);

  return (
    <div className="p-4 flex" style={{ backgroundColor: '#C88858' }}>
      <input
        ref={inputRef}
        type="text"
        className="flex-1 border rounded-l p-2"
        placeholder={isBotBusy ? "Bot is typing..." : "Type your message..."}
        value={userInput}
        onChange={handleUserInput}
        onKeyPress={handleKeyPress}
        disabled={isBotBusy || isLoading}
      />
      <button
        className={`bg-blue-500 text-white p-2 rounded-r ${isLoading ? 'opacity-50 cursor-not-allowed' : ''}`}
        onClick={handleSendMessageWithLoading}
        disabled={isLoading}
      >
        <IoSend size={24} />
      </button>
    </div>
  );
};

export default ChatInput;
