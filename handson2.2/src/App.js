import logo from './logo.svg';
import './App.css';

function Shout(props) {
  return(
    <p>{props.msg.toUpperCase()}</p>
  )
}


function App() {
  return(
    <Shout msg="hello"/>
  )
}

export default App;
