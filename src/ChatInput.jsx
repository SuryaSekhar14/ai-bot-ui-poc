// ChatInput.js

import React from 'react';

const ChatInput = ({ userInput, handleUserInput, handleSendMessage, handleKeyPress }) => {
  return (
    <div className="p-4 flex">
      <input
        type="text"
        className="flex-1 border rounded-l p-2"
        placeholder="Type your message..."
        value={userInput}
        onChange={handleUserInput}
        onKeyPress={handleKeyPress}
      />
      <button
        className="bg-blue-500 text-white p-2 rounded-r"
        onClick={handleSendMessage}
      >
        Send
      </button>
    </div>
  );
};

export default ChatInput;
