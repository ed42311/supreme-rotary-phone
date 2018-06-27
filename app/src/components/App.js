import React, { Component } from 'react';
import './App.css';
import ProjNavBar from './ProjNavBar.js';
import Main from './Main.js'
import Auth from '../modules/Auth'
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false,
      authenticated: false
    }
    this.toggleNav = this.toggleNav.bind(this);
  };

  toggleAuthenticateStatus() {
    this.setState({ authenticated: Auth.isUserAuthenticated() })
  }

  toggleNav() {
    this.setState({ isOpen: !this.state.isOpen });
  }

  componentDidMount() {
    this.toggleAuthenticateStatus()
  }

  render() {
    return (
      <div >
        <ProjNavBar
          toggleNav={this.toggleNav}
          isOpen={this.state.isOpen}
          authenticated={this.state.authenticated}
        />
        <Main
          toggleAuthenticateStatus={() => this.toggleAuthenticateStatus()}
        />
      </div>
    );
  }
}

export default App;
