import ActionTypes from './ActionTypes';
import * as firebase from 'firebase';


export function ProductsAction(keys) {
    return dispatch => {
        // console.log("keys", keys)
        firebase.database().ref('StoresProducts/').on('value', (data) => {
            let obj = data.val();
            let SuposeArray = [];
            let localArray = [];
            for (var prop in obj) {
                SuposeArray.push(obj[prop])
            }
            for (var i = 0; i < SuposeArray.length; i++) {
                if (SuposeArray[i].StoreKey === keys) {
                    localArray.push(SuposeArray[i])
                }
            }
            console.log('out side===',localArray)
                dispatch(ProductsDispatch(localArray));

        })
    }
}


function ProductsDispatch(payload) {
    return {
        type: ActionTypes.AvailbaleProducts,
        payload
    }
}