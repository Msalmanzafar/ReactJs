import React from 'react';
import ReactDOM from 'react-dom';
// import App from './App';
import './index.css';
import {Provider} from 'react-redux';
import InviteContainer from './invite_container';
import store from './store';

// ReactDOM.render(
//   <App />,
//   document.getElementById('root')
// );

const main = (
  <Provider store={store}>
    <InviteContainer />
  </Provider>
);
ReactDOM.render(main, document.getElementById("root"));