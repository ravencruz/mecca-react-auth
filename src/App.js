import logo from './logo.svg';
import './App.css';

import { Route } from "react-router-dom";
import Home from './Home'
import Profile from './Profile'
import { Component } from 'react';

import Nav from "./Nav";

class App extends Component {

  render() {
    return (
      <>
        <Nav />
        <div className="body">
          <Route path='/' exact component={Home}></Route>
          <Route path='/profile' component={Profile}></Route>
        </div>
        
      </>
    )
  } 
}

export default App;
