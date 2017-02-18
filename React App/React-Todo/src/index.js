import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
// import List from './list-layout';

import { Route, Router, browserHistory, IndexRoute} from 'react-router';

ReactDOM.render((
  <Router history = {browserHistory}>
      <Route path = "/" component = {App}>
         {/*<IndexRoute component = {SignUp} />*/}
      </Route>
   </Router>
), document.getElementById('root'));


// ReactDOM.render(
//   <SignUp />,
//   document.getElementById('signup')
// );

