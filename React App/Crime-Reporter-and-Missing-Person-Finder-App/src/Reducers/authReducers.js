// import {handleActions} from 'redux-actions';
import actionTypes from './actionTypes';

const AuthReducer = (state = {
    // dummy: 'example@domain.com',
    authLogOut: false,
    authSignIn: [],
	ErrorMess: '',
} , action) => {
    switch(action.type){
      case actionTypes.SiginUpadte:{
          return state={
              ...state,
            authLogOut: !state.authLogOut,
            authSignIn: action.payload  
          };
      }
      case actionTypes.ErrorMessages:{
          return state={
              ...state,
            ErrorMess: action.payload  
          };
      }
      default:{}
    }
    return state;
}
export default AuthReducer;
