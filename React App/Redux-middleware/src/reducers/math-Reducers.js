 const mathReducer = (state = {
    result: 1,
    lastValue: [],
} , action) => {
    switch(action.type){
      case "ADD":
          state={
              ...state,
              result: state.result + action.payload,
              lastValue: [...state.lastValue, action.payload]
          };
          break;
      case 'SUBTRACT':
          state={
              ...state,
              result: state.result - action.payload,
              lastValue: [...state.lastValue, action.payload]              
          };
          break;
    }
    return state;
}
export default mathReducer;