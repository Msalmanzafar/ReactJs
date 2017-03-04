
import React from 'react';
import { Router, Route, browserHistory } from 'react-router';
// import Home from './components/home.js';
// import SignIn from './components/signin';
import Navbar from './components/navbar';
// import SignUp from './components/signup';
import * as firebase from 'firebase';

var config = {
    apiKey: "AIzaSyArVpiyJ0wPxATriQBnPzvbCqjIBVWSppc",
    authDomain: "sky-auth.firebaseapp.com",
    databaseURL: "https://sky-auth.firebaseio.com",
    storageBucket: "sky-auth.appspot.com",
    messagingSenderId: "936918632809"
  };
  firebase.initializeApp(config);

module.exports = (
    <Router history={browserHistory}>
        <Route path="/" component={Navbar} >
            {/*<Route path="/signup" component={SignUp} />
            <Route path="/signin" component={SignIn} />
            <Route path="/home" component={Home} />*/}
        </Route>

    </Router>
)
