import ActionTypes from '../Actions/ActionTypes';

const AuthReducer = (state = {
    authLogOut: false,
    loader: false,
    authSignIn: [],
    authErrors: '',
}, action) => {
    switch (action.type) {
        case ActionTypes.LoaderActions: {
            return state = {
                ...state,
                loader: !state.loader,
            }
        }
        case ActionTypes.SiginUpadte: {
            return state = {
                ...state,
                authLogOut: !state.authLogOut,
                authSignIn: action.payload
            };
        }
        case ActionTypes.AuthErrors: {
            return state = {
                ...state,
                authErrors: action.payload
            };
        }

        default: { }
    }
    return state;
}
export default AuthReducer;
