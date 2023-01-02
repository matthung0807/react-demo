import { useEffect, useState } from "react";
import './App.css';

import * as React from 'react';

function App() {
  return (
    <Message/>
  );
}

const Message = () => {
  const [messages, setMessages] = useState([])
  useEffect(() => {
    fetch("http://localhost:8080/messages")
    .then(response => response.json())
    .then(data => setMessages(data))
  },[])

  return (
    <>
      {
        messages.map((message, i) => {
          return (
          <div key={i}>{message}</div>
          )
        })
      }
    </>
  )
}

export default App;
