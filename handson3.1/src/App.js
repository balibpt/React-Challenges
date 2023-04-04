import logo from './logo.svg';
import './App.css';
import React from 'react';

class AlertBox extends React.Component {
  state = {
    msg: ""
  }

  render() {
    return(
      <div style={{"border": "4px solid black"}}>
        <p>{this.state.msg}</p>
      </div>
    )
  }
}

function App() {
  return (
    <AlertBox />
  );
}

export default App;
