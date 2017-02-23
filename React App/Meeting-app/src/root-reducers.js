import React from 'react';
import {combineReducers} from 'redux';
import inviteReducer from './invite-reducer';

const rootReducer = combineReducers({
    invite: inviteReducer
});

export default rootReducer;