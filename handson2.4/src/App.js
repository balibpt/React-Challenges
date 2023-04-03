import logo from './logo.svg';
import './App.css';

function Image(props) {
  return <img src={props.img} alt=''/>
}

function App() {
  return (
    <Image img={require('./doodle.png')}/>
  );
}

export default App;
