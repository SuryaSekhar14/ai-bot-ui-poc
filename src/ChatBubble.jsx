import React from 'react';

const ChatBubble = ({ content, type, links }) => {
  const isUser = type === 'user';
  const bgColor = isUser ? 'bg-blue-400' : 'bg-customBrown';
  const textColor = isUser ? '' : 'text-gray-800';
  const label = isUser ? 'You' : 'Bot';
  const labelPosition = isUser ? 'top-right' : 'top-left';

  return (
    <div className={`flex ${isUser ? 'justify-start' : 'justify-start'} mb-4 transition-transform transform ease-in-out duration-300`}>
      <div
        className={`max-w-[70%] ${bgColor} ${textColor} p-2 sm:p-4 rounded-lg relative`}
        style={{wordBreak: 'keep-all' }}
      >
        <div className={`absolute ${labelPosition === 'top-left' ? 'top-0 right-2' : 'top-0 left-2'} top-0 right-0 text-xs text-gray-700`}>{label}</div>
        <div style={{ display: 'inline-block' }}>
          {content}
        </div>

        {links && (
          <div className="flex mt-2">
            {links.map((link, index) => (
              <button key={index} onClick={() => window.open(link.link, '_blank')} className="ml-2 bg-blue-700 text-white px-2 py-1 rounded p-4">
                {link.name}
              </button>
            ))}
          </div>
        )}
        
      </div>
    </div>
  );
};

export default ChatBubble;
