// import {handleActions} from 'redux-actions';
import actionTypes from './actionTypes';

const StatusReducer = (state = {
    MyStatus:{}

} , action) => {
    switch(action.type){
      case actionTypes.MyStatusFire:{
          return state={
              ...state,
              MyStatus: action.payload
          };
      }
    }
    return state;
}
export default StatusReducer;
