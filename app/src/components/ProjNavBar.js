import React from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink
 } from 'reactstrap';
import { Link } from 'react-router-dom';

export default class ProjNavBar extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false,
    };
  }

  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  render() {
    return (
      <div>
        <Navbar color="light" light expand="md">
          <NavbarBrand tag={Link} to="/">Sweet Project</NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink tag={Link} to="/">Home</NavLink>
              </NavItem>
              {this.state.authenticated ? (
                <div>
                  <NavItem>
                    <NavLink tag={Link} to="/dashboard">Dashboard</NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink tag={Link} to="/logout">Logout</NavLink>
                  </NavItem>
                </div>
                  ) : (
                <div>
                  <NavItem>
                    <NavLink tag={Link} to="/login">Login</NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink tag={Link} to="/signup">Sign up</NavLink>
                  </NavItem>
                </div>
              )}
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}
