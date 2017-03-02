import { combineReducers } from 'redux';
const {
    reducer: doner
} = require('./doner-redux')

module.exports = combineReducers({
    doner
});
