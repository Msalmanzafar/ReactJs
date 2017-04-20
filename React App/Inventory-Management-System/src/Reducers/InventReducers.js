import ActionTypes from '../Actions/ActionTypes';

const StoreReducers = (state = {
    newStore: [],
    addNewProducts: [],
    availibaleStoresArray: [],
    StoreKeys: [],
}, action) => {
    switch (action.type) {
        // case ActionTypes.NewStoreCreate: {
        //     return state = {
        //         ...state,
        //         newStore: action.payload
        //     };
        // }
        case ActionTypes.AvailbaleStoresAction: {
            return state = {
                ...state,
                availibaleStoresArray: action.payload
            };
        }
        case ActionTypes.NewProdutsAction: {
            return state = {
                ...state,
                addNewProducts: action.payload
            };
        }
        case ActionTypes.OpenStoreData: {
            return state = {
                ...state,
                StoreKeys: action.payload
            };
        }
        default: { }
    }
    return state;
}
export default StoreReducers;
