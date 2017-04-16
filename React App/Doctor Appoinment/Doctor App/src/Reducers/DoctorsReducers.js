import ActionTypes from '../Actions/ActionTypes';

const DoctorsReducers = (state = {
    authLogOut: false,
    DoctorsObjs: []
} , action) => {
    switch(action.type){
      case ActionTypes.DoctorsDataAction:{
          return state={
              ...state,
            DoctorsObjs: action.payload  
          };
      }
        default:{}
    }
    return state;
}
export default DoctorsReducers;
