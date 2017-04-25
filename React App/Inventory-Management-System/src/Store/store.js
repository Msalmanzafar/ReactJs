import {createStore,combineReducers,applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import AuthReducer from '../Reducers/AuthReducers';
import StoreReducers from '../Reducers/InventReducers'
import ProductsReducers from '../Reducers/ProductsReducers';
import SalesReducers from '../Reducers/SalesReducers';

export default createStore(
    combineReducers({
        AuthReducer,
        StoreReducers,
        ProductsReducers,
        SalesReducers,
    }),{},(applyMiddleware(thunk))
);