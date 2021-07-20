import React from 'react';
import './App.css';

function App() {
  const hello = <Hello name="John" />
  return hello
}

// function Hello(props) {
//   return <h1>Hello, {props.name}!</h1>
// }

class Hello extends React.Component {
  render() {
    return <h1>Hello, {this.props.name}!</h1>
  }
}

export default App;
