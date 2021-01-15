import logo from './logo.svg';
import './App.css';

import { Route } from "react-router-dom";
import Home from './Home'
import Profile from './Profile'
import { Component } from 'react';

class App extends Component {

  render() {
    return (
      <>
        <Route path='/' exact component={Home}></Route>
        <Route path='/profile' component={Profile}></Route>
      </>
    )
  } 
}

export default App;
