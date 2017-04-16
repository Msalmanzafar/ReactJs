import React from 'react';
import {render} from 'react-dom';
import Routes from './Routes';
import {Provider} from 'react-redux';
import store from './Store/store'

render(
  <Provider store={store}>
    <Routes />
  </Provider>,
  document.getElementById('app')
);
