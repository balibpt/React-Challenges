import logo from './logo.svg';
import './App.css';
import React from 'react'


class Form extends React.Component {
  seatings = [
    "outdoors",
    "indoors",
    "VIP indoors"
  ]

  smoking = [
    "Smoking",
    "Non-smoking"
  ]

  appetizers = [
    "raw fishes",
    "salad",
    "fried cuttlefish",
    "peanuts"
  ]

  state = {
    firstName: "",
    lastName: "",
    seating: "",
    smoking: "Smoking",
    appetizers: []
  }

  seatingRadioButtons() {
    let options = []
    for(let seating of this.seatings) {
      let e = <div key={seating}>
        <input type="radio" name="seating" value={seating} onChange={this.handleSeatingChange.bind(this)}/>{seating}
      </div>
      options.push(e)
    }
    return options;
  }


  handleFirstNameChange = (event) => {
    this.setState({
      firstName: event.target.value
    })
  }

  handleLastNameChange= (event) => {
    this.setState({
      lastName: event.target.value
    })
  }

  handleSeatingChange = (event) => {
    this.setState({
      seating: event.target.value
    })
  }

  handleSmokingChange = (event) => {
    this.setState({
      smoking: event.target.value
    })
  }

  handleAppetizerChange = (event) => {
    const indexToDelete = this.state.appetizers.indexOf(event.target.value)
    if(this.state.appetizers.includes(event.target.value)) {
      this.setState({
        appetizers: [...this.state.appetizers.splice(0, indexToDelete), ...this.state.appetizers.splice(indexToDelete+1)]
      })
    } else {
      this.setState({
        appetizers: [...this.state.appetizers, event.target.value]
      })
    }
  }

  render() {
    return(
      <React.Fragment>
        <div>
          <label>First Name: </label>
          <input type="text" placeholder='First Name' onChange={this.handleFirstNameChange}/>
          <label>Last Name: </label>
          <input type="text" placeholder='Last Name' onChange={this.handleLastNameChange}/>
        </div>
        <div>
          <label>Seating: </label>
          {this.seatingRadioButtons()}
        </div>
        <div>
          <label>Smoking: </label>
          <select name="smoking" onChange={this.handleSmokingChange.bind(this)}>
          {this.smoking.map(function(smoke) {
            return(
              <option key={smoke} name="smoking" value={smoke}>{smoke}</option>
            )
          })}
          </select>
        </div>
        <div>
          <label>Appetizers: </label>
          {this.appetizers.map((appetizer, index) =>{
            return(
              <div key={index}>
                <input type="checkbox" name="appetizer" value={appetizer} checked={this.state.appetizers.includes(appetizer)} onChange={this.handleAppetizerChange} />
                <label>{appetizer}</label>
              </div>
            )
          })}
        </div>
      </React.Fragment>
    )
  }
}

function App() {
  return (
    <React.Fragment>
      <Form/>
    </React.Fragment>
  );
}

export default App;
