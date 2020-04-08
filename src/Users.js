import React, { Component } from 'react';
import { Table } from 'react-bootstrap';
import PropTypes from 'prop-types';
// import { Checkbox } from 'react-bootstrap';

class Users extends Component {


  constructor(props) {
    super(props);

    this.state = {
      showingData: Array(this.props.users.length).fill(false)
    }
  }

  toggleData = (index) => {
    var currentShowingData = this.state.showingData;
    currentShowingData[index] = !currentShowingData[index];

    this.setState(() => ({
      showingData: currentShowingData
    }))
  }

  render() {

    const { users } = this.props;

    return (
      <Table striped hover size="sm">
        <thead>
          <tr>
            <th></th>
            <th>Username</th>
            <th>Games Played</th>
            <th></th>
          </tr>
        </thead>
        <tbody>

          {
            users.map(
              (user, index) => {
                return (<tr key={index}>
                  <td>{index + 1}</td>
                  <td>{user.username}</td>
                  <td>{`${user.username} Played ${this.state.showingData[index] ? '\\*' : '0'} Games`}</td>
                  <th><input type="checkbox" onClick={() => this.toggleData(index)} /></th>
                </tr>)
              }
            )
          }

        </tbody>
      </Table>
    );
  }
}

Users.propTypes = {
  users: PropTypes.array.isRequired,
}

export default Users;