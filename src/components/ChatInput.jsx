import React, { useState } from 'react';
import { TextField, Button, Paper } from '@mui/material';

const ChatInput = ({ onSendMessage }) => {
  const [message, setMessage] = useState('');

  const handleChange = (event) => {
    setMessage(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (message.trim() !== '') {
      onSendMessage(message);
      setMessage('');
    }
  };

  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      handleSubmit(event);
    }
  };

  return (
    <Paper sx={{ display: 'flex', alignItems: 'center', padding: '10px' }}>
      <TextField
        label="Type your message"
        value={message}
        onChange={handleChange}
        onKeyPress={handleKeyPress}
        fullWidth
        sx={{ marginRight: '10px' }}
      />
      <Button type="submit" variant="contained" onClick={handleSubmit}>
        Send
      </Button>
    </Paper>
  );
};

export default ChatInput;