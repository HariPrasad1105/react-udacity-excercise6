import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import NewUserForm from './NewUserForm';
import ListUsers from './ListUsers';



class App extends Component {

  constructor() {
    super();

    this.state = {
      users: [],
      errorMessage: false,
    };
  }

  isAlreadyUser(username) {
    return this.state.users.filter(
      user => user['username'] === username
    ).length > 0;
  }

  addUser = (event) => {
    event.preventDefault();

    const firstname = event.target.firstname.value;
    const lastname = event.target.lastname.value;
    const username = event.target.username.value;

    if (this.isAlreadyUser(username)) {
      this.setState({
        errorMessage: true
      })
    } else {
      this.setState(() => ({
        users: [...this.state.users, {
          'firstname': firstname,
          'lastname': lastname,
          'username': username,
          'numberOfGames': 0
        }]
      }));
    }
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">ReactND - Coding Practice</h1>
        </header>

        <NewUserForm errorMessage={this.state.errorMessage} addUser={this.addUser} />
        <ListUsers users={this.state.users} />

      </div>
    );
  }
}

export default App;
