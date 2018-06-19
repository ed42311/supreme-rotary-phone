import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import ProjNavBar from './ProjNavBar.js';
import Main from './Main.js'
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <ProjNavBar />
        <Main />
      </div>
    );
  }
}

export default App;