import {createStore,combineReducers,applyMiddleware} from 'redux';
import mathReducer from './reducers/math-Reducers';
import userReducer from './reducers/user-Reducers';
import thunk from 'redux-thunk';
import promise from 'redux-promise-middleware';
// const mayLoader = (store) => (next) => (action) =>{
//   console.log('loggle action', action);
//   next(action);
// }
export default createStore(
    combineReducers({
        mathReducer,
        userReducer
    }),
    {},
    applyMiddleware(thunk, promise())
);