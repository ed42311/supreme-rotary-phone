import React, { Component } from 'react';
import './App.css';
import ProjNavBar from './ProjNavBar.js';
import Main from './Main.js'
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends Component {
  render() {
    return (
      <div >
        <ProjNavBar />
        <Main />
      </div>
    );
  }
}

export default App;
