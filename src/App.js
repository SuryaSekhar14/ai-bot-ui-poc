import React, { useState } from 'react';
import Header from './Header';
import ChatArea from './ChatArea';
import ChatInput from './ChatInput';
import getBotResponse from './api'; // Import the API function

const App = () => {
  const [messages, setMessages] = useState([]);
  const [userInput, setUserInput] = useState('');

  const handleUserInput = (e) => {
    setUserInput(e.target.value);
  };

  const handleSendMessage = async () => {
    if (userInput.trim() === '') return;

    // Add user message to the chat
    const updatedMessages = [...messages, { content: userInput, type: 'user' }];
    setMessages(updatedMessages);
    setUserInput('');

    try {
      // Call the API function
      const botResponse = await getBotResponse(userInput);

      // Add bot response to the chat without modifying the user's messages
      setMessages([...updatedMessages, { content: botResponse.content, link: botResponse.link, type: 'bot' }]);
    } catch (error) {
      // Handle error if needed
      console.error('Error fetching bot response:', error);
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSendMessage();
    }
  };

  return (
    <div className="flex flex-col h-screen bg-gray-100">
      <Header />
      <ChatArea messages={messages} />
      <ChatInput
        userInput={userInput}
        handleUserInput={handleUserInput}
        handleSendMessage={handleSendMessage}
        handleKeyPress={handleKeyPress}
      />
    </div>
  );
};

export default App;