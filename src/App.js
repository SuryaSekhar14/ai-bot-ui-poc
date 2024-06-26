import React, { useState } from 'react';
import Header from './Header';
import ChatArea from './ChatArea';
import ChatInput from './ChatInput';
import getBotResponse from './api';

const App = () => {
  const [messages, setMessages] = useState([]);
  const [userInput, setUserInput] = useState('');
  const [isBotBusy, setIsBotBusy] = useState(false);

  const handleUserInput = (e) => {
    setUserInput(e.target.value);
  };

  const handleSendMessage = async () => {
    if (userInput.trim() === '' || isBotBusy) {
      return;
    }
    setIsBotBusy(true);
    setMessages((prevMessages) => [...prevMessages, { content: userInput, type: 'user' }]);
    setUserInput('');

    try {
      const botResponse = await getBotResponse(userInput);
      setMessages((prevMessages) => [...prevMessages, { ...botResponse, type: 'bot' }]);
    } catch (error) {
      console.error('Error fetching bot response:', error);
    } finally {
      setIsBotBusy(false);
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSendMessage();
    }
  };

  return (
    <div className="flex flex-col h-screen">
      <Header />
      <ChatArea messages={messages} />
      <ChatInput
        userInput={userInput}
        handleUserInput={handleUserInput}
        handleSendMessage={handleSendMessage}
        handleKeyPress={handleKeyPress}
        isBotBusy={isBotBusy}
      />
    </div>
  );
};

export default App;
