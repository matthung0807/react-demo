import { useEffect, useState } from "react";
import './App.css';

import * as React from 'react'

function App() {
  return (
    <Message/>
  );
}

const ws = new WebSocket('ws://localhost:8080/echo');

const Message = () => {
  const [message, setMessage] = useState([])
  useEffect(() => {
    ws.addEventListener('message', (event) => {
      setMessage(event.data)
    })
  },[])

  return (<div>{message}</div>)
}

export default App;
