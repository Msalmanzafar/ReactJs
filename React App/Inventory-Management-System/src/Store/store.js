import {createStore,combineReducers,applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import AuthReducer from '../Reducers/AuthReducers';
import StoreReducers from '../Reducers/InventReducers'
import ProductsReducers from '../Reducers/ProductsReducers'
export default createStore(
    combineReducers({
        AuthReducer,
        StoreReducers,
        ProductsReducers,
    }),{},(applyMiddleware(thunk))
);