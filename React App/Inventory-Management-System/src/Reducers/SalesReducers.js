import ActionTypes from '../Actions/ActionTypes';

const SalesReducers = (state = {
    SalesArray :[],
    SelectedArray: [],
    SaledList: [],
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
      case ActionTypes.SaledListAction:{
          return state={
              ...state,
            SaledList: action.payload  
          };
      }
        default:{}
    }
    return state;
}
export default SalesReducers;
