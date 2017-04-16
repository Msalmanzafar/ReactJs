import ActionTypes from '../Actions/ActionTypes';

const StoreReducers = (state = {
    newStore: []
} , action) => {
    switch(action.type){
      case ActionTypes.NewStoreCreate:{
          return state={
              ...state,
            newStore: action.payload  
          };
      }
        default:{}
    }
    return state;
}
export default StoreReducers;
