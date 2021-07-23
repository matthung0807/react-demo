import React, {useState} from 'react';
import './App.css';

function App() {
  return <Hello name="John" />
}

function Hello(props) {
  // 宣告state變數name並設定初值"John"，回傳name及更新name的函式setName()
  const [name, setName] = useState("John") // useState is a 'Hook'

  // 點擊<h1>時呼叫setName()更新state變數name的值
  return <h1 onClick={() => setName("Mary")}>Hello, {name}!</h1>
}

export default App;
