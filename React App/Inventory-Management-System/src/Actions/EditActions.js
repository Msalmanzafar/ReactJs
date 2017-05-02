import ActionTypes from './ActionTypes';
import * as firebase from 'firebase';


export function EditProduct(keys) {
    return dispatch => {
        // console.log("Edit Product Action ", keys)
        firebase.database().ref('/StoresProducts/').on("child_added", (data) => {
            let obj = data.val();
            obj.ProKey = data.key;
            if (keys === obj.ProKey) {
                // console.log("firebase data==== ", obj)
                dispatch(EditDispatch(obj));
            }

        })
    }
}

function EditDispatch(payload) {
    return {
        type: ActionTypes.EditActions,
        payload
    }
}


export function UpdateEditProduct(UpdateProduct) {
    return dispatch => {
        // console.log("Updated==========",UpdateProduct);
        let ProId = UpdateProduct.Prokey;
        delete UpdateProduct['ProKey'];

        firebase.database().ref('/StoresProducts/' + ProId + '/').set(UpdateProduct)
            .then(() => {
                alert('Product Updated');
                // console.log('Product Updated');
            })
            .catch(() => {
                alert('check user email and password');
            })
    }
}