import {createStore,combineReducers,applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import AuthReducer from '../Reducers/AuthReducers';

export default createStore(
    combineReducers({
        AuthReducer,
    }),{},(applyMiddleware(thunk))
);