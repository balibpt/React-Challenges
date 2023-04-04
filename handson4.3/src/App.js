import logo from './logo.svg';
import './App.css';
import React from 'react';

class Dice extends React.Component {
  state = {
    num: 1
  }

  rollDice = () => {
    this.setState({
      num: Math.floor(Math.random() * 6) + 1
    })
  }

  render() {
    return(
      <div style={{border: "2px solid black", height: "300px", width: "500px"}}>
        <h2 style={{color: this.state.num === 1 ? "red" : this.state.num === 6 ? "green" : "black"}}>{this.state.num}</h2>
        <button onClick={this.rollDice}>Roll Dice</button>
      </div>
    )
  }
}

function App() {
  return (
    <Dice />
  );
}

export default App;
