import { combineReducers } from 'redux';
const {
    reducer: todo
} = require('./todo-redux')

module.exports = combineReducers({
    todo
});
