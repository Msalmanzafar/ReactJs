// import {handleActions} from 'redux-actions';
import actionTypes from './actionTypes';

const AuthReducer = (state = {
    dummy: 'example@domain.com',
    authLogOut: false,
    authSignIn:[]

} , action) => {
    switch(action.type){
        
      case actionTypes.SiginUpadte:{
          return state={
              ...state,
            authLogOut: !state.authLogOut    
          };
      }
    }
    return state;
}
export default AuthReducer;
