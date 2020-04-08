import React, { Component } from 'react';
import { Form, Col, Button, Alert } from 'react-bootstrap';
import PropTypes from 'prop-types';

class NewUserForm extends Component {

  constructor(props) {
    super(props);

    this.state = {
      'firstNameFilled': false,
      'lastNameFilled': false,
      'userNameFilled': false,
      'submitButtonDisabled': true,
    };
  }

  handleChangeFirstName = (event) => {

    const firstNameFilled = event.target.value !== '';
    const submitButtonDisabled = !(firstNameFilled &&
      this.state.lastNameFilled && this.state.userNameFilled);

    this.setState(() => ({
      'firstNameFilled': firstNameFilled,
      'submitButtonDisabled': submitButtonDisabled,
    }));
  }

  handleChangeLastName = (event) => {

    const lastNameFilled = event.target.value !== '';
    const submitButtonDisabled = !(lastNameFilled &&
      this.state.firstNameFilled && this.state.userNameFilled);

    this.setState(() => ({
      'lastNameFilled': lastNameFilled,
      'submitButtonDisabled': submitButtonDisabled
    }));
  }

  handleChangeUserName = (event) => {
    const userNameFilled = event.target.value !== '';
    const submitButtonDisabled = !(userNameFilled &&
      this.state.firstNameFilled && this.state.lastNameFilled);

    this.setState(() => ({
      'userNameFilled': userNameFilled,
      'submitButtonDisabled': submitButtonDisabled
    }));
  }

  render() {

    const { errorMessage, addUser } = this.props;

    return (
      <div className="container mt-4">
        <h3>
          Add User Component
        </h3>
        <Form onSubmit={addUser}>
          <Form.Row className="mt-5">
            <Col md={{ span: 4, offset: 1 }}>
              <Form.Control
                placeholder="First name"
                name="firstname"
                onChange={this.handleChangeFirstName} />
            </Col>
            <Col md={{ span: 4, offset: 1 }}>
              <Form.Control
                placeholder="Last name"
                name="lastname"
                onChange={this.handleChangeLastName} />
            </Col>
          </Form.Row>
          <Form.Row className="mt-3">
            <Col md={{ span: 4, offset: 1 }}>
              <Form.Control
                placeholder="Username"
                name="username"
                onChange={this.handleChangeUserName} />
            </Col>
          </Form.Row>
          <Button variant="primary" type="submit"
            className="mt-4"
            disabled={this.state.submitButtonDisabled}>
            Submit
        </Button>

          {
            errorMessage && (
              <div>
                <Alert variant={'danger'}>
                  Already a User!
                </Alert>
              </div>
            )
          }

        </Form>
      </div>
    );
  }
}

NewUserForm.propTypes = {
  errorMessage: PropTypes.bool.isRequired,
  addUser: PropTypes.func.isRequired,
}

export default NewUserForm;