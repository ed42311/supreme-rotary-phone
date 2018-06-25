import React, { Component } from 'react';
import { Route, Redirect } from 'react-router-dom'

import HomePage from './HomePage.js';
import LoginPage from '../containers/LoginPage.js';
import LogoutFunction from '../containers/LogoutFunction.js';
import SignUpPage from '../containers/SignUpPage.js';
import DashboardPage from '../containers/DashboardPage.js';
import Auth from '../modules/Auth';

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route {...rest} render={props => (
    Auth.isUserAuthenticated() ? (
      <Component {...props} {...rest} />
    ) : (
      <Redirect to={{
        pathname: '/',
        state: { from: props.location }
      }}/>
    )
  )}/>
)

const LoggedOutRoute = ({ component: Component, ...rest }) => (
  <Route {...rest} render={props => (
    Auth.isUserAuthenticated() ? (
      <Redirect to={{
        pathname: '/',
        state: { from: props.location }
      }}/>
    ) : (
      <Component {...props} {...rest} />
    )
  )}/>
)

const PropsRoute = ({ component: Component, ...rest }) => (
  <Route {...rest} render={props => (
    <Component {...props} {...rest} />
  )}/>
)

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      authenticated: false
    }
  };

  componentDidMount() {
    this.toggleAuthenticateStatus()
  }

  toggleAuthenticateStatus() {
    this.setState({ authenticated: Auth.isUserAuthenticated() })
  }

  render() {
    return (
      <main>
        <PropsRoute exact path="/" component={HomePage} toggleAuthenticateStatus={() => this.toggleAuthenticateStatus()} />
        <PrivateRoute path="/dashboard" component={DashboardPage}/>
        <LoggedOutRoute path="/login" component={LoginPage} toggleAuthenticateStatus={() => this.toggleAuthenticateStatus()} />
        <LoggedOutRoute path="/signup" component={SignUpPage}/>
        <Route path="/logout" component={LogoutFunction}/>
      </main>
    );
  }
}

export default Main;
