import React, { Component } from 'react';
import { Link } from 'react-router';
import { Router, Route, browserHistory } from 'react-router';
// import Home from './components/Home.js';
// import Content from './components/Content.js';
import SignIn from '../components/signin';
import Navbar from '../components/navigation-bar';
import SignUp from '../components/signup';
import Routes from './Routes.js';


class App extends Component {
  render() {
    return (
      <Routes />
    );
  }
}

export default App;
