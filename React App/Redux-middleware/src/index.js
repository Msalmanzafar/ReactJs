
// import {createStore, combineReducers, applyMiddleware} from 'redux';
// import logger from 'redux-logger';
import React from 'react';
import {render} from 'react-dom';
import App from './container/app';
import {Provider} from 'react-redux';
import store from './store';

render(
    <Provider store={store}>
      <App />
    </Provider>,
    window.document.getElementById('app')
)





// store.subscribe(()=>{
//   console.log("Store Update", store.getState());
// });

// store.dispatch({
//     type: 'ADD',
//     payload: 100
// });
// store.dispatch({
//     type: 'ADD',
//     payload: 22
// });
// store.dispatch({
//     type: 'SUBTRACT',
//     payload: 80
// });
// store.dispatch({
//     type: 'SET_NAME',
//     payload: 'SALMAN ZAFAR'
// });
// store.dispatch({
//     type: 'SET_AGE',
//     payload: 30
// });

