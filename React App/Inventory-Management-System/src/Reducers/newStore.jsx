import ActionTypes from '../Actions/ActionTypes';

const newStore = (state = {
    messageFlag: false,
    messageAction: ''
}, action) => {
    switch (action.type) {
        case ActionTypes.MessageFlag: {
            return state = {
                ...state,
                messageFlag: !state.messageFlag,
            }
        }
        case ActionTypes.MessageAction: {
            return state = {
                ...state,
                messageAction: action.payload,
            }
        }

        default: { }
    }
    return state;
}
export default newStore;
