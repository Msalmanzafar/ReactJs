import ActionTypes from '../Actions/ActionTypes';

const SalesReducers = (state = {
    SalesArray :[],
    SelectedArray: [],
} , action) => {
    switch(action.type){
      case ActionTypes.SalesAction:{
          return state={
              ...state,
            SalesArray: action.payload  
          };
      }
      case ActionTypes.SelectedProducts:{
          return state={
              ...state,
            SelectedArray: action.payload  
          };
      }
        default:{}
    }
    return state;
}
export default SalesReducers;
