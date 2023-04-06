import logo from './logo.svg';
import './App.css';
import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';

export default class App extends React.Component {
  state = {
    users: [
      {
        id: 1,
        name: "Flash",
        email: "flash@email.com"
      },
      {
        id: 2,
        name: "Superman",
        email: "superman@email.com"
      },
      {
        id: 3,
        name: "Batman",
        email: "batman@email.com"
      }
    ],

    newUserName: "",
    newUserEmail: "",
    userBeingEdited: null,
    modifiedUserName: "",
    modifiedUserEmail: "",
  }

  updateForm = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  addUser = (event) => {
    event.preventDefault()
    const newId = (this.state.users[this.state.users.length - 1]).id + 1
    this.setState({
      users: [...this.state.users, { id: newId, name: this.state.newUserName, email: this.state.newUserEmail }],
      newUserName: "",
      newUserEmail: ""
    })
  }

  editUser(user) {
    this.setState({
      userBeingEdited: user,
      modifiedUserName: user.name,
      modifiedUserEmail: user.email,
    })
  }

  modifiedUserDetails = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  editUserDetails(user) {
    const indexToEdit = this.state.users.indexOf(user)
    const clone = [...this.state.users]
    clone[indexToEdit].name = this.state.modifiedUserName
    clone[indexToEdit].email = this.state.modifiedUserEmail
    this.setState({
      users: clone,
      modifiedUserName: "",
      modifiedUserEmail: "",
      userBeingEdited: null,
    })
  }

  deleteUser(user) {
    const indexToDelete = this.state.users.indexOf(user)
    const clone = [...this.state.users]
    clone.splice(indexToDelete, 1)
    this.setState({
      users: clone
    })
  }

  render() {
    return(
      <React.Fragment>
        <div className="container mt-4">
          {this.state.users.map((user) => {
            if (!this.state.userBeingEdited || this.state.userBeingEdited !== user ) {
            return (<div key={user.id} className='list-group'>
              <div className='list-group-item mb-4'>
                <h1>{user.name}</h1>
                <h3>{user.email}</h3>
                <button className='btn btn-primary btn-sm me-2' onClick={() => { this.editUser(user) }}>Edit</button>
                <button className='btn btn-primary btn-sm' onClick={() => { this.deleteUser(user) }}>Delete</button>
              </div>
            </div>)
            } else {
              return (<div key={user.id} className='list-group'>
              <div className='list-group-item mb-4'>
                <h1><input type="text" value={this.state.modifiedUserName} name='modifiedUserName' onChange={this.modifiedUserDetails}/></h1>
                <h3><input type="text" value={this.state.modifiedUserEmail} name='modifiedUserEmail' onChange={this.modifiedUserDetails}/></h3>
                <button className='btn btn-primary' onClick={() => { this.editUserDetails(user) }}>Confirm</button>
              </div>
            </div>)
            }
          })}
          <div>
            <form className='d-flex align-items-center w-50' onSubmit={this.addUser}>
              <input type="text" placeholder='Name' name='newUserName' value={this.state.newUserName} className='form-control me-2' onChange={this.updateForm}/>
              <input type="text" placeholder='Email' name="newUserEmail" value={this.state.newUserEmail} className='form-control me-2' onChange={this.updateForm}/>
              <input type='submit' value='Add' className='btn btn-primary' disabled={this.state.newUserName && this.state.newUserEmail ? false : true}/>
            </form>
          </div>
        </div>
      </React.Fragment>
    )
  }
}
