import {createStore,combineReducers,applyMiddleware} from 'redux';
// import {createStore,combineReducers} from 'redux';
import AuthReducer from './reducers/auth-reducer'
import thunk from 'redux-thunk';
// import promise from 'redux-promise-middleware';
// import * as firebase from 'firebase';


export default createStore(
    combineReducers({
        AuthReducer
    }),{},(applyMiddleware(thunk))
);