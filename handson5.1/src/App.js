import logo from './logo.svg';
import './App.css';
import React from 'react'

class ContactUs extends React.Component {
  state = {
    firstName: "",
    lastName: "",
    enquiries: "",
    country: "Singapore",
    fruits: []
  }

  handleSubmit = (e) => {
    e.preventDefault()
    const { firstName, lastName, enquiries, country, fruits } = this.state
    alert(`First Name: ${firstName}, Last Name: ${lastName}, Enquiry: ${enquiries}, Country: ${country}, Fruits: ${fruits}` )
  }

  handleFirstNameChange = (e) => {
    this.setState({
      firstName: e.target.value
    })
  }

  handleLastNameChange = (e) => {
    this.setState({
      lastName: e.target.value
    })
  }

  handleEnquiryChange = (e) => {
    this.setState({
      enquiries: e.target.value
    })
  }

  handleSelectChange = (e) => {
    this.setState({
      country: e.target.value
    })
  }

  handleFruitsChange = (e) => {
    if(this.state.fruits.includes(e.target.value)) {
      const indexToDelete = this.state.fruits.indexOf(e.target.value)
      this.setState({
        fruits: [...this.state.fruits.splice(0, indexToDelete), ...this.state.fruits.splice(indexToDelete + 1)]
      })
    } else {
      this.setState({
        fruits: [...this.state.fruits, e.target.value]
      })
    }
  }

  render() {
    const {firstName, lastName, enquiries, country} = this.state;

    return(
      <React.Fragment>
      <form onSubmit={this.handleSubmit}>
        <div>
          <label>First Name:</label>
          <input type="text" placeholder='First Name' onChange={this.handleFirstNameChange} />
          <label>Last Name:</label>
          <input type="text" placeholder='First Name' onChange={this.handleLastNameChange}/>
        </div>
        <div>
          <label>Enquiries:</label>
          <label>Support</label>
          <input type="radio" name="enquiry" value="Support" onChange={this.handleEnquiryChange}/>
          <label>Sales</label>
          <input type="radio" name="enquiry" value="Sales" onChange={this.handleEnquiryChange}/>
          <label>Marketing</label>
          <input type="radio" name="enquiry" value="Marketing"  onChange={this.handleEnquiryChange}/>
        </div>
        <div>
          <label>Country:</label>
          <select onChange={this.handleSelectChange}>
            <option value="Singapore">Singapore</option>
            <option value="Malaysia">Malaysia</option>
            <option value="Thailand">Thailand</option>
          </select>
        </div>
        <div>
          <label>Fruits: </label>
          <input type="checkbox" checked={this.state.fruits.includes('apple')} onChange={this.handleFruitsChange} name="fruits" value="apple"/>Apple
          <input type="checkbox" checked={this.state.fruits.includes('orange')} onChange={this.handleFruitsChange} name="fruits" value="orange"/>Orange
          <input type="checkbox" checked={this.state.fruits.includes('pineapple')} onChange={this.handleFruitsChange} name="fruits" value="pineapple"/>Pineapple
          <input type="checkbox" checked={this.state.fruits.includes('durian')} onChange={this.handleFruitsChange} name="fruits" value="durian"/>Durian
        </div>
        <div>
          <input type="submit" disabled={ (firstName && lastName && enquiries && country) ? false : true}/>
        </div>
      </form>
      </React.Fragment>
    )
  }
}


function App() {
  return (
    <ContactUs />
  );
}

export default App;
