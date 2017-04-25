import ActionTypes from '../Actions/ActionTypes';

const SalesReducers = (state = {
    SalesArray :[],
} , action) => {
    switch(action.type){
      case ActionTypes.SalesAction:{
          return state={
              ...state,
            SalesArray: action.payload  
          };
      }
     
        default:{}
    }
    return state;
}
export default SalesReducers;
