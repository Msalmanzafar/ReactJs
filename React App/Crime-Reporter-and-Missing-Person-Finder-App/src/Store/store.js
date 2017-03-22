import {createStore,combineReducers,applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import AuthReducer from '../Reducers/authReducers';
import ComplaintReducers from '../Reducers/complaint-reducers'
import StatusReducer from '../Reducers/dataReducers'
export default createStore(
    combineReducers({
        AuthReducer,
        ComplaintReducers,
        StatusReducer
    }),{},(applyMiddleware(thunk))
);