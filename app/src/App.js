import React from 'react';
import './App.css';

const WrappedComponent = props => {
  return <span>{props.name}</span>
}

const higherOrderComponent = (WrappedComponent, props) => {
  return class extends React.Component { // return a Component class
    render() {
      return <h1>Hello, <WrappedComponent name={props.name}/>!</h1>
    }
  }
}

const EnhancedComponent = higherOrderComponent(WrappedComponent, {name: "John"})

function App() {
  return <EnhancedComponent/>
}

export default App;
