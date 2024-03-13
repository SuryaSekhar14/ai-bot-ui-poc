import React from 'react';

const ChatBubble = ({ content, type, link }) => {
  const isUser = type === 'user';
  const bgColor = isUser ? 'bg-blue-400' : 'bg-green-400';
  const textColor = isUser ? '' : 'text-gray-800';
  const label = isUser ? 'You' : 'Bot';
  const labelPosition = isUser ? 'top-right' : 'top-left';
  
  return (
    <div className={`flex ${isUser ? 'justify-start' : 'justify-start'} mb-4 transition-transform transform ease-in-out duration-300`}>
      <div
        className={`max-w-[70%] break-all ${bgColor} ${textColor} p-2 sm:p-4 rounded-lg relative`}
      >
        <div className={`absolute ${labelPosition === 'top-left' ? 'top-0 right-2' : 'top-0 left-2'} top-0 right-0 text-xs text-gray-500`}>{label}</div>
        {content}
        {link && (
          <div className="flex items-center mt-2">
            <button
              className="ml-2 bg-blue-700 text-white px-2 py-1 rounded"
              onClick={() => window.open(link, '_blank')}
            >
              Open Link
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default ChatBubble;
