import logo from './logo.svg';
import './App.css';
import React from 'react'

class NumberBox extends React.Component {
  state = {
    count: 0
  }

  increase = () => {
    this.setState({
      count: this.state.count + 1
    })
  }

  decrease = () => {
    this.setState({
      count: this.state.count - 1
    })
  }

  render() {
    return(
      <div style={{border: "2px solid black", height: "200px", width: "400px"}}>
        <h1>{this.state.count}</h1>
        <button onClick={this.increase}>Increase</button>
        <button onClick={this.decrease}>Decrease</button>
      </div>
    )
  }
}

function App() {
  return (
    <NumberBox />
  );
}

export default App;
