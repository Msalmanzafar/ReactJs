import actionTypes from "../actions/actonTypes";

const AuthReducer = (state = {
    dummy: 'example@domain.com',
    authSignUp:[],
    authSignIn:[]

} , action) => {
    switch(action.type){
      case actionTypes.GetNewUserData:{
          return state={
              ...state,
              authSignUp: action.payload,
          };
      }   
      case actionTypes.GetLoginData:{
          return state={
              ...state,
             authSignIn: action.payload            
          };
      }
    }
    return state;
}
export default AuthReducer;
