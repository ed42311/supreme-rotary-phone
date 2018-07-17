import React, { Component } from 'react';
import PropTypes from 'prop-types'
import { Provider } from 'react-redux'
import DevTools from './DevTools'
import NavBar from '../components/ProjNavBar'
import Main from '../components/Main'
import 'bootstrap/dist/css/bootstrap.min.css';

const Root = ({ store }) => (
  <Provider store={store}>
    <div>
      <NavBar toggleNav={() => {}} isOpen={false} />
      <Main />
      <DevTools />
    </div>
  </Provider>
)

Root.propTypes = {
  store: PropTypes.object.isRequired,
}

export default Root
