 const mathReducer = (state = {
    number: 1,
    lastValue: [],
} , action) => {
    switch(action.type){
      case "ADD":
          state={
              ...state,
              number: state.number + action.payload,
              lastValue: [...state.lastValue, action.payload]
          };
          break;
      case 'SUBTRACT':
          state={
              ...state,
              number: state.number - action.payload,
              lastValue: [...state.lastValue, action.payload]              
          };
          break;
    }
    return state;
}
export default mathReducer;