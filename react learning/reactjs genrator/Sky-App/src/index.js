import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Main from './main-page';
import Signup from './signup'; 
import './index.css';
import { Router, Route, Link, browserHistory } from 'react-router';

ReactDOM.render(
  <App />,
  document.getElementById('root'),
  
);

/*
ReactDOM.render((
  <Router history={browserHistory}>
    <Route path="/" component={App}/>
      
  </Router>
), document.getElementById('root'));*/