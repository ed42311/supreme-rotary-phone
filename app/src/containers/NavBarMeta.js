import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ProjNavBar from '../components/ProjNavBar';
import Auth from '../modules/Auth';

export default class NavBarMeta extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isOpen: false,
      authenticated: false
    };
    this.toggleNav = this.toggleNav.bind(this);
  }

  toggleNav() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  componentDidMount() {
    const authenticated = Auth.isUserAuthenticated();
    console.log(authenticated);
    this.setState({
      authenticated
    });
  }

  render() {
    return (
      <ProjNavBar
        toggleNav={this.toggleNav}
        isOpen={this.state.isOpen}
        authenticated={this.state.authenticated}
        user={this.state.user}
      />
    );
  }
}


NavBarMeta.contextTypes = {
  router: PropTypes.object.isRequired
};
