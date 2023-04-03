import logo from './logo.svg';
import './App.css';

function SumOfTwo(props) {
  return(
    <p>{Number(props.props1) + Number(props.props2)}</p>
  )
}

function App() {
  return (
    <SumOfTwo props1="2" props2="4"/>
  );
}

export default App;
