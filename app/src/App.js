import React from 'react'

import './App.css';

const names = ["John", "Mary"]

const Hello = props => {
  return <h1>Hello, {names[3].toLowerCase()}!</h1> // TypeError: Cannot read property 'toLowerCase' of undefined
}

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {hasError: false}
  }
  static getDerivedStateFromError(error) {
    return { hasError: true }; // return a value to update state
  }

  componentDidCatch(error, info) {
    console.log(`Cause:${error}\nStacktace:${info.componentStack}`)
  }

  render() {
    if (this.state.hasError) {
      return <h1>Error!!</h1>
    }

    return <Hello/>
  }
}

export default App;