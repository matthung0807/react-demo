import React, {useState} from "react";
import "./App.css";

function App() {
  return (
    <div>
      <Hello name='John' />
      <Hi name='Mary' />
    </div>
  );
}

const useLike = () => {
  const [count, setCount] = useState(0);

  return [
    () => {
      setCount(count + 1);
    },
    count,
  ];
};

const Hello = (props) => {
  const [handleLike, count] = useLike();

  return (
    <div>
      <h1 onClick={handleLike}>Hello, {props.name}</h1>
      <span>Like:{count}</span>
    </div>
  );
};

const Hi = (props) => {
  const [handleLike, count] = useLike();
  return (
    <div>
      <h1 onClick={handleLike}>Hi, {props.name}</h1>
      <span>Like:{count}</span>
    </div>
  );
};

export default App;
