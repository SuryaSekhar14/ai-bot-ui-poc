import React from 'react';
import logo from './logo.jpg'; // Import your logo image

const Header = () => {
  return (
    <div 
      className="bg-blue-900 p-4 text-white flex items-center justify-center"
      style={{ backgroundColor: '#000000' }}
    >
      <img src={logo} alt="Logo" className="h-6 mr-2" />
      <span className="text-2xl">AI Chatbot</span>
    </div>
  );
};

export default Header;
