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
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Auth from '../modules/Auth';

const ProjNavBar = ({
  isOpen,
  toggleNav
}) => (
    <div>
      <Navbar color="light" light expand="md">
        <NavbarBrand tag={Link} to="/">Sweet Project</NavbarBrand>
        <NavbarToggler onClick={toggleNav} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="ml-auto" navbar>
            {Auth.isUserAuthenticated() ? (
              <NavItem>
                <NavLink tag={Link} to="/profile">Profile</NavLink>
              </NavItem>
            ) : (
              <NavItem>
                <NavLink tag={Link} to="/">Home</NavLink>
              </NavItem>
            )}
            {Auth.isUserAuthenticated() ? (
              <NavItem>
                <NavLink tag={Link} to="/dashboard">Dashboard</NavLink>
              </NavItem>
            ) : (
              <NavItem>
                <NavLink tag={Link} to="/signup">Sign up</NavLink>
              </NavItem>
            )}
            {Auth.isUserAuthenticated() ? (
              <NavItem>
                <NavLink tag={Link} to="/logout">Logout</NavLink>
              </NavItem>
            ) : (
              <NavItem>
                <NavLink tag={Link} to="/login">Login</NavLink>
              </NavItem>
            )}
          </Nav>
        </Collapse>
      </Navbar>
    </div>
);


ProjNavBar.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  toggleNav: PropTypes.func.isRequired
};

export default ProjNavBar;
