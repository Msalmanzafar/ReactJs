import {createStore,combineReducers,applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import AuthReducer from '../Reducers/AuthReducers';
import StoreReducers from '../Reducers/InventReducers'
import DoctorsReducers from '../Reducers/DoctorsReducers'
export default createStore(
    combineReducers({
        AuthReducer,
        StoreReducers,
        DoctorsReducers,
    }),{},(applyMiddleware(thunk))
);