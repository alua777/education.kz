import React, { useState, useRef, useEffect } from 'react';
import { Card, CardContent, Typography, TextField, IconButton, Paper } from '@mui/material';
import SendIcon from '@mui/icons-material/Send';

const styles = {
  chatFrame: {
    border: '1px solid #ccc',
    borderRadius: '5px',
    width: '80%', // Set the width to 80% of the container
    margin: '0 auto', // Center the chat window horizontally
    height: '80vh', // Set the height to 80% of the viewport height
    display: 'flex',
    flexDirection: 'column',
  },
  messagesContainer: {
    flex: 1,
    overflowY: 'auto',
    padding: '16px',
  },
  message: {
    marginBottom: '8px',
    padding: '12px',
    borderRadius: '10px',
    marginTop: '20px'
  },
  userMessage: {
    backgroundColor: '#a6bada', // Light blue background color for user messages
    marginLeft: '50px'
  },
  receivedMessage: {
    backgroundColor: '#f0f0f0', // Light gray background color for received messages
    marginRight: '50px'
  },
  messageInfo: {
    fontSize: '0.8rem',
    color: '#888',
    marginTop: '4px',
    display: 'flex',
    justifyContent: 'right'
    
  },
  inputContainer: {
    padding: '16px',
    marginTop: 'auto', // Align input box at the bottom
    display: 'flex', // Use flexbox to align items horizontally
    alignItems: 'center', // Center items vertically
  },
  inputField: {
    flex: 1, // Allow the input field to grow and take up remaining space
    marginRight: '8px',
  },
};

const ChatWindow = () => {
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState('');
  const messagesEndRef = useRef(null);

  useEffect(() => {
    // Scroll to the bottom of the messages container when messages change
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const handleSendMessage = () => {
    if (newMessage.trim() !== '') {
      const userMessage = { 
        text: newMessage, 
        fromUser: true, 
        sender: "You", 
        timestamp: new Date().toLocaleTimeString() 
      };
      const answerMessage = { 
        text: "Hello", 
        fromUser: false, 
        sender: "Answer", 
        timestamp: new Date().toLocaleTimeString() 
      };
      setMessages([...messages, userMessage, answerMessage]);
      setNewMessage('');
    }
  };

  return (
    <Card style={styles.chatFrame}>
      <CardContent style={styles.messagesContainer}>
        
        {messages.map((message, index) => (
          <Paper 
            key={index} 
            elevation={3} 
            style={{ 
              ...styles.message, 
              ...(message.fromUser ? styles.userMessage : styles.receivedMessage) 
            }}
          >
            <Typography variant="body2" color="text.secondary">{message.sender}</Typography>
            <Typography variant="body1">{message.text}</Typography>
            <Typography variant="body2" style={styles.messageInfo}>
              {`${message.timestamp}`}
            </Typography>
          </Paper>
        ))}
        <div ref={messagesEndRef} />
      </CardContent>
      <div style={styles.inputContainer}>
        <TextField
          style={styles.inputField}
          label="Type a message..."
          variant="outlined"
          value={newMessage}
          onChange={(e) => setNewMessage(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === 'Enter') {
              handleSendMessage();
            }
          }}
        />
        <IconButton color="primary" onClick={handleSendMessage}>
          <SendIcon />
        </IconButton>
      </div>
    </Card>
  );
};

export default ChatWindow;
