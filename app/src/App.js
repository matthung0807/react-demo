import React, {useEffect, useState} from 'react';
import './App.css';

function App() {
  return <Hello name="John" />
}

function Hello(props) {

  const [count, setCount] = useState(0)

  useEffect(() => {
    if (count === 10) {
      document.body.style.backgroundColor = "yellow";
    }
  })

  const addCount = () => {
    setCount(count + 1)
  }

  return <h1 onClick={addCount}>Hello, {props.name}! {`count: ${count}`}</h1>
}

export default App;
