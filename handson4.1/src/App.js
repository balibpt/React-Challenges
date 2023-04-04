import logo from './logo.svg';
import './App.css';
import React from 'react';

class TickleBox extends React.Component {
  state = {
    msg: ""
  }

  tickles = () => {
    this.setState({
      msg: "that tickles!"
    })
  }

  reset = () => {
    this.setState({
      msg: ""
    })
  }

  render() {
    return(
      <div onMouseEnter={this.tickles} onMouseLeave={this.reset} style={{"border": "2px solid black", "padding": "15px 30px"}}>
        <p>{this.state.msg}</p>
      </div>
    )
  }
}

function App() {
  return (
    <TickleBox />
  );
}

export default App;
