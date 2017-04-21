import ActionTypes from './ActionTypes';
import * as firebase from 'firebase';


export function ProductsAction(keys) {
    return dispatch => {
        // console.log("keys",keys)
        firebase.database().ref('StoresProducts/').on('child_added', (data) => {
            let obj = data.val();
            obj.objKeys = data.key;
            // console.log("All products data", obj);

            if (keys === obj.StoreKey) {
                console.log("Store products data", obj);
                dispatch(ProductsDispatch(obj));
            }

        })
    }
}


function ProductsDispatch(payload) {
    return {
        type: ActionTypes.AvailbaleProducts,
        payload
    }
}