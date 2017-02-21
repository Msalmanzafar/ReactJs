import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import { Route, Router, browserHistory } from 'react-router';
import SignUp from './signup';
import Signin from './signin.js';
import TodoList from './todo-list';
import * as firebase from 'firebase';


// initialize firebase
const config = {
    apiKey: "AIzaSyArVpiyJ0wPxATriQBnPzvbCqjIBVWSppc",
    authDomain: "sky-auth.firebaseapp.com",
    databaseURL: "https://sky-auth.firebaseio.com",
    storageBucket: "sky-auth.appspot.com",
    messagingSenderId: "936918632809"
};
firebase.initializeApp(config);


ReactDOM.render((
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      <Route path="/signup" component={SignUp} />
      <Route path="/signin" component={Signin} />
      <Route path="/todo-list" component={TodoList} />
    </Route>
  </Router>
), document.getElementById('root'));


// ReactDOM.render(
//   <SignUp />,
//   document.getElementById('signup')
// );

