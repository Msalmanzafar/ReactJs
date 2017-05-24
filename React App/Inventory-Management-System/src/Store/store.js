import {createStore,combineReducers,applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import AuthReducer from '../Reducers/AuthReducers';
import StoreReducers from '../Reducers/InventReducers'
import ProductsReducers from '../Reducers/ProductsReducers';
import SalesReducers from '../Reducers/SalesReducers';
import DeleteReducers from '../Reducers/DeleteReducers';
import EditReducers from '../Reducers/EditReducers';

export default createStore(
    combineReducers({
        AuthReducer,
        StoreReducers,
        ProductsReducers,
        SalesReducers,
        DeleteReducers,
        EditReducers,
    }),{},(applyMiddleware(thunk))
);