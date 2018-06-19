import React from 'react';
import Home from './Home.js'
import Test from './Test.js'
import { Switch, Route } from 'react-router-dom';

const Main = () => (
  <main>
    <Switch>
      <Route exact path='/' component={Home}/>
      <Route path='/test' component={Test}/>
    </Switch>
  </main>
)

export default Main;
