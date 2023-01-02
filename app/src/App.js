import { useEffect, useState } from "react";
import './App.css';

import * as React from 'react';

function App() {
  return (
      <Message/>
  );
}

const ws = new WebSocket('ws://localhost:8080/echo'); // get WebSocket connection object

const Message = () => {
  const [input, setInput] = useState('') // 'input' store data sending to WebScoket Server
  const [message, setMessage] = useState('') // 'message'store data received from WebSocket Server

  const handleChange = (event) => { // when &lt;input&gt; value changing, store the value to 'input' state
    setInput(event.target.value);
  };

  const handleClick = () =>  { // when clicking Send button, send stored value of 'input' to WebSocket Server
    ws.send(input)
  }

  useEffect(() => {
    ws.addEventListener('message', (event) => { // listen WebSocket message event to receive data from WebSocket Server
      setMessage(event.data)
    })
  },[])

  return (
    <div>
      <div>
        <input onChange={handleChange}/>
        <button onClick={handleClick}>Send</button>
      </div>
      <div>{message}</div>
    </div>
  )
}

export default App;
