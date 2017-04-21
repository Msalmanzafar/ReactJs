import ActionTypes from '../Actions/ActionTypes';

const ProductsReducers = (state = {
    ProductsArray :[],
} , action) => {
    switch(action.type){
      case ActionTypes.AvailbaleProducts:{
          return state={
              ...state,
            ProductsArray: action.payload  
          };
      }
     
        default:{}
    }
    return state;
}
export default ProductsReducers;
