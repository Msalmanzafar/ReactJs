import ActionTypes from '../Actions/ActionTypes';

const DoctorsInfoReducers = (state = {
    authLogOut: false,
    DoctorsInfoObj: []
} , action) => {
    switch(action.type){
      case ActionTypes.DoctorsInfoAction:{
          return state={
              ...state,
            DoctorsInfoObj: action.payload  
          };
      }
        default:{}
    }
    return state;
}
export default DoctorsInfoReducers;
