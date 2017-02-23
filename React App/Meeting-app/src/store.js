import {createStore, applyMiddleware} from 'redux';
import thunk from 'react-redux';
import rootReducer from './root-reducers';

const store = createStore(
    rootReducer,{},applyMiddleware(thunk)
);

export default store;