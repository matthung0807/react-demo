import { useEffect, useState } from "react";
import './App.css';

import * as React from 'react';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';

import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});

function App() {
  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <Message/>
    </ThemeProvider>
  );
}

const Message = () => {
  const [messages, setMessages] = useState([])
  useEffect(() => {
    fetch("http://localhost:8080/messages")
    .then(response => response.json())
    .then(data => setMessages(data))
  },[])

  return messages.map((message) => {
    return (
      <Box>
        <List>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemText primary={message} />
            </ListItemButton>
          </ListItem>
        </List>
      </Box>
    )
  })
}

export default App;
