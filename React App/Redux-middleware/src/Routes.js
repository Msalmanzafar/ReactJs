
import React from 'react';
import { Router, Route, browserHistory } from 'react-router';
import App from './container/app';

module.exports = (
    <Router history={browserHistory}>
        <Route path="/" component={App} >
        </Route>
    </Router>
)
