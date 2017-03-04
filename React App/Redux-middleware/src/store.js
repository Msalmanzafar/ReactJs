import {createStore,combineReducers} from 'redux';
import mathReducer from './reducers/math-Reducers';
import userReducer from './reducers/user-Reducers';
const mayLoader = (store) => (next) => (action) =>{
  console.log('loggle action', action);
  next(action);
}
export default createStore(
    combineReducers({
        mathReducer,
        userReducer
    })
);