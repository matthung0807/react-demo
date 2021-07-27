import React from "react";
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

function withLike(Component, props) {
  return class extends React.Component {
    render() {
      return (
        <Like>
          {(handleLike, count) => (
            <Component {...props} like={handleLike} count={count} />
          )}
        </Like>
      );
    }
  };
}

class Like extends React.Component {
  constructor(props) {
    super(props);
    this.state = {count: 0};

    this.handleLike = this.handleLike.bind(this);
  }

  handleLike = () => {
    let count = this.state.count;
    this.setState({count: ++count});
  };

  render() {
    return <div>{this.props.children(this.handleLike, this.state.count)}</div>;
  }
}

class Hello extends React.Component {
  render() {
    return (
      <div>
        <h1 onClick={this.props.like}>Hello, {this.props.name}</h1>
        <span>Like:{this.props.count}</span>
      </div>
    );
  }
}

class Hi extends React.Component {
  render() {
    return (
      <div>
        <h1 onClick={this.props.like}>Hi, {this.props.name}</h1>
        <span>Like:{this.props.count}</span>
      </div>
    );
  }
}

export default App;
