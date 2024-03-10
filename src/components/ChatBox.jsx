import React, { useState } from 'react';
import ChatInput from './ChatInput';
import ChatArea from './ChatArea';

const ChatBox = () => {
  const [messages, setMessages] = useState([]);

  const sendMessage = (message) => {

    const response = {
      botMessage: 'This is a sample response from the chatbot. Sometimes I also return a sample file!',
      link: Math.random() > 0.5 ? 'https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf' : null
    };
    setMessages([...messages, { message, link: null, isUser: true }, { message: response.botMessage, link: response.link, isUser: false }]);
  };

return (
    <div 
    style={{
        display: 'flex',
        flexDirection: 'column',
        height: '100vh',
        width: '100%',
        position: 'fixed',
        backgroundColor: '#c2c2c2',
        borderRadius: '10px',
        }}
        className='chatbox-container'
    >
        <h1 style={{ 
            textAlign: 'center', 
            marginTop: '0px',
            borderBottom: '1px solid black',  
            backgroundColor: 'white', 
            zIndex: '1000',
            paddingTop: '0px',
            paddingBottom: '5px',
            }}>
            AI Chatbot
        </h1>

        <ChatArea messages={messages} />
        <ChatInput 
            onSendMessage={sendMessage} 
            style={{ position: 'relative', bottom: 0 }}
            className='chatbox-input'
        />
    </div>
);
};

export default ChatBox;