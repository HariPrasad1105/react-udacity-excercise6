import React, { Component } from 'react';
import Users from './Users';
import PropTypes from 'prop-types';

class ListUsers extends Component {

  render() {

    return (
      <div className="container mt-4">
        <h3>
          Users Component
        </h3>
        <Users users={this.props.users} />
      </div>
    );
  }
}

ListUsers.propTypes = {
  users: PropTypes.array.isRequired,
}

export default ListUsers;