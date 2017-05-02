import ActionTypes from '../Actions/ActionTypes';

const EditReducers = (state = {
    EditSelectedProduct: [],
}, action) => {
    switch (action.type) {
        case ActionTypes.EditActions: {
            return state = {
                ...state,
                EditSelectedProduct: action.payload
            };
        }
        default: { }
    }
    return state;
}
export default EditReducers;
