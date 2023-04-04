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
        <p>{this.props.msg}</p>
      </div>
    )
  }
}

function App() {
  return (
    <AlertBox msg="Hello"/>
  );
}

export default App;
