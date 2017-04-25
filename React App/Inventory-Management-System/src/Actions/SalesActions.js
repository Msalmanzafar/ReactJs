import ActionTypes from './ActionTypes';
import * as firebase from 'firebase';


export function SalesProductsAction(keys) {
    return dispatch => {
        // console.log("keys", keys)
        firebase.database().ref('StoresProducts/').on('value', (data) => {
            let obj = data.val();
           
                dispatch(SalesActionDispatch(obj));

        })
    }
}


function SalesActionDispatch(payload) {
    return {
        type: ActionTypes.SalesAction,
        payload
    }
}