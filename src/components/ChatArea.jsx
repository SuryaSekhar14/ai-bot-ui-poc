import React, {useEffect, useRef} from 'react';
import ChatBubble from './ChatBubble';

const ChatArea = ({messages}) => {

  const el = useRef(null);
  useEffect(() => {
    el.current.scrollIntoView({ block: "end", behavior: "smooth" });
  });

  return (
    <div 
      className='chatarea'
      style={{flex: 1, overflow: 'auto', padding: '10px', flexDirection: 'column-reverse'}}
    >
                
      {messages.map((message, index) => (
        <ChatBubble
        key={index}
        message={message.message}
        link={message.link}
        isUser={message.isUser}
        />
      ))}
      <div id={"el"} ref={el} />
    </div>
  );
};

export default ChatArea;