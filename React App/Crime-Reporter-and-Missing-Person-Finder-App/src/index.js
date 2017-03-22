
import React from 'react';
import {render} from 'react-dom';
// import App from './container/app';
import {Provider} from 'react-redux';
import store from './Store/store';
import Routes from './Routes'

render(
    <Provider store={store}>
      <Routes />
    </Provider>,
    window.document.getElementById('app')
)
