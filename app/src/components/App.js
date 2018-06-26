import React, { Component } from 'react';
import './App.css';
import NavBarMeta from '../containers/NavBarMeta.js';
import Main from './Main.js'
import Auth from '../modules/Auth'
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends Component {
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
      <div >
        <NavBarMeta
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
