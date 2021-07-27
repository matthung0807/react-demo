import React from "react";

import "./App.css";

const CharacterContext = React.createContext(""); // default value is empty string

function App() {
  return (
    <CharacterContext.Provider value='DIO'>
      <Character />
    </CharacterContext.Provider>
  );
}

class Character extends React.Component {
  static contextType = CharacterContext;
  render() {
    return (
      <div>
        <h1>{this.context}</h1>
        <Intro />
      </div>
    );
  }
}

class Intro extends React.Component {
  static contextType = CharacterContext;
  render() {
    return (
      <div>
        <p>{this.context} is the main antagonist of JoJo's Bizarre Part 3.</p>
        <Stand />
      </div>
    );
  }
}

class Stand extends React.Component {
  static contextType = CharacterContext;
  render() {
    return (
      <div>
        {this.context}'s stand is <strong>The World</strong>.
      </div>
    );
  }
}

export default App;
