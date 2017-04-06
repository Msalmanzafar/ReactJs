import ActionTypes from '../Actions/ActionTypes';

const AuthReducer = (state = {
    authLogOut: false,
    authSignIn: []
} , action) => {
    switch(action.type){
      case ActionTypes.SiginUpadte:{
          return state={
              ...state,
            authLogOut: !state.authLogOut,
            authSignIn: action.payload  
          };
      }
        default:{}
    }
    return state;
}
export default AuthReducer;
