import React from 'react';
import { Router, Route, hashHistory } from 'react-router';
import NavBar from './components/navigation-bar';
import Signup from './components/signup.js';


module.exports = (
    <Router history={hashHistory}>
        <Route path="/" component={Navbar} >
            <Route path="/signup" component={Signup} />
            <Route path="/login" component={Login} />
        </Route>
    </Router>
)
