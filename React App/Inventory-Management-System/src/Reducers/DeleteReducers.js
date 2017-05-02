import ActionTypes from '../Actions/ActionTypes';

const DeleteReducers = (state = {
    deleteKeys: '',
} , action) => {
    switch(action.type){
      case ActionTypes.DeleteActions:{
          return state={
              ...state,
            deleteKeys: action.payload  
          };
      }
        default:{}
    }
    return state;
}
export default DeleteReducers;
