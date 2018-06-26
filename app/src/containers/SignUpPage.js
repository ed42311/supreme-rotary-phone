import React from 'react';
import PropTypes from 'prop-types';
import SignUpForm from '../components/SignUpForm';

class SignUpPage extends React.Component {

  constructor(props, context) {
    super(props, context);

    this.state = {
      errors: {},
      user: {
        email: '',
        name: '',
        password: ''
      }
    };

    this.processForm = this.processForm.bind(this);
    this.changeUser = this.changeUser.bind(this);
  }

  /**
   *
   * @param {object} event - the JavaScript event object
   */
  processForm(event) {

    event.preventDefault();
    const data = {
      name: this.state.user.name,
      email: this.state.user.email,
      password: this.state.user.password
    }

    fetch('/auth/signup', {
      method: 'POST',
      headers: {
        'Accept' : 'application/json',
        'Content-Type' : 'application/json',
      },
      body: JSON.stringify(data)
    })
    .then ( res => res.json() )
    .then ( ( data ) => {
      console.log(data);
      if (data.status) {
        this.setState({
          errors: {}
        });

        localStorage.setItem('successMessage', data.message);
        this.props.history.push('/login');
      } else {
        console.log("not working");
      }
    })
  }



  /**
   *
   * @param {object} event - the JavaScript event object
   */
  changeUser(event) {
    const field = event.target.name;
    const user = this.state.user;
    user[field] = event.target.value;

    this.setState({
      user
    });
  }

  render() {
    return (
      <SignUpForm
        onSubmit={this.processForm}
        onChange={this.changeUser}
        errors={this.state.errors}
        user={this.state.user}
      />
    );
  }
}

SignUpPage.contextTypes = {
  router: PropTypes.object.isRequired
};

export default SignUpPage;
