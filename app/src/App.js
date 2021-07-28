import React, {useState} from "react";
import "./App.css";

function App() {
  const HelloWithLike = withLike(Hello, {name: "John"});
  const HiWithLike = withLike(Hi, {name: "Mary"});
  return (
    <div>
      <HelloWithLike />
      <HiWithLike />
    </div>
  );
}

const withLike = (Component, props) => {
  return () => (
    <Like>
      {(handleLike, count) => (
        <Component {...props} like={handleLike} count={count} />
      )}
    </Like>
  );
};

const Like = (props) => {
  const [count, setCount] = useState(0);

  const handleLike = () => {
    setCount(count + 1);
  };

  return <div>{props.children(handleLike, count)}</div>;
};

const Hello = (props) => {
  return (
    <div>
      <h1 onClick={props.like}>Hello, {props.name}</h1>
      <span>Like:{props.count}</span>
    </div>
  );
};

const Hi = (props) => {
  return (
    <div>
      <h1 onClick={props.like}>Hi, {props.name}</h1>
      <span>Like:{props.count}</span>
    </div>
  );
};

export default App;
