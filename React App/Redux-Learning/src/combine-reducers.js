import {combineReducers} from 'redux';
import UserReducers from './database';
import ActionUserReducer from './reducers-active-user';
// import React from 'react';

const allReducers = combineReducers({
    users: UserReducers,
    activeUser: ActionUserReducer
});

export default allReducers;