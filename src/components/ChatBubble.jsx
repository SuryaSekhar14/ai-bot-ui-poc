import React from 'react';
import { Box, Typography, Stack, Button, IconButton } from '@mui/material';
import FileDownloadOutlinedIcon from '@mui/icons-material/FileDownloadOutlined';


const ChatBubble = ({ message, link, isUser }) => {
  const styles = {
    userBubble: {
      backgroundColor: isUser ? '#87CEFA' : '#FFFFFF',
      borderRadius: '10px',
      padding: '10px',
      margin: '5px',
      wordWrap: 'break-word',
      maxWidth: '60%', // Allow text wrapping and limit width
      border: '1px solid',
    },
    button: {
      marginTop: '10px',
      marginBottom: '5px',
      justifyContent: 'flex-start', // Align icon and text
    },
  };

  const hasLink = link; // Replace with the extracted link object

  return (
    <Stack direction={isUser ? 'row-reverse' : 'row'}>
      <Box sx={styles.userBubble}>
        <Typography variant="body1">{message}</Typography>
        {hasLink && (
          <Button
            variant="outlined"
            size="small"
            sx={styles.button}
            startIcon={<FileDownloadOutlinedIcon />}
            target="_blank" // Open link in new tab
            href={link} // Use the extracted link object
          >
            View file
          </Button>
        )}
      </Box>
    </Stack>
  );
};

export default ChatBubble;