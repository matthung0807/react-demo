import { Component } from 'react'
import './App.css';

function App() {
  return <Block/>
}

class Block extends Component {

  constructor(props) {
    super(props)
    this.state = {inputValue: ''}

    this.receiveValueFromInput = this.receiveValueFromInput.bind(this)
  }

  receiveValueFromInput(valueFromInput) {
    this.setState({inputValue: valueFromInput})
  }

  render() {
    return (
      <div>
        <Input toBlock={this.receiveValueFromInput}/>
        <Display value={this.state.inputValue}/>
      </div>
    )
  }

}

class Input extends Component {

  constructor(props) {
    super(props)
    this.state = {value: ''};
    this.handleChange = this.handleChange.bind(this)
  }

  render() {
    return <input value={this.state.value} onChange={this.handleChange}/>
  }

  handleChange(event) {
    this.setState({value: event.target.value})
    this.props.toBlock(event.target.value)
  }
}

class Display extends Component {

  constructor(props) {
    super(props)
    this.state = {value: ''}
  }

  render() {
    return <p>{this.props.value}</p>
  }
}

export default App;
