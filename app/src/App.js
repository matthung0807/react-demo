import { useEffect, useState } from "react";
import './App.css';
import axios from 'axios';

import * as React from 'react';

function App() {
  return (
    <Message/>
  );
}

const Message = () => {
  const [messages, setMessages] = useState([])
  useEffect(() => {
    axios.get('http://localhost:8080/messages')
      .then(resp => {
        setMessages(resp.data)
      })
      .catch(error => {
        console.log(error)
      })
      .finally(() => {
        console.log('done')
      })
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
