import ActionTypes from './ActionTypes';
import * as firebase from 'firebase';
// import { browserHistory } from 'react-router';


export function LoaderAction() {
    return dispatch => {
        dispatch(LoaderDispatch());
    }
}


export function DeleteProduct(keys) {
    return dispatch => {
        // console.log("---Delete Product---", keys);
        // var user = firebase.auth().currentUser;
        firebase.database().ref('/StoresProducts/').child(keys).remove();
        // dispatch(LoaderDispatch());

    }
}

export function DeleteSalesProduct(data) {
    return dispatch => {
        // console.log("---DeleteSalesProduct---", data);
        // var user = firebase.auth().currentUser;
        dispatch(LoaderDispatch());
        let productDetails;
        let total;
        firebase.database().ref('StoresProducts/').once('value', (snap) => {
            let allData = snap.val();
            // console.log(allData, 'allData')
            for (var prop in allData) {
                // console.log(allData[prop], "allData[key].productName")
                if (allData[prop].Prokey === data.proKey) {
                    productDetails = allData[prop]
                }
            }
            console.log(productDetails)
            total = Number(productDetails.quantity) + Number(data.quantity)
            // console.log(total, 'total')
            firebase.database().ref('StoresProducts/' + productDetails.Prokey + '/').child('quantity').set(total)
            firebase.database().ref('/SaledProducts/').child(data.uid).remove();
            dispatch(LoaderDispatch());
        })
    }
}

export function DeleteStores(key) {
    return dispatch => {
        // console.log("---DeleteStores---", key);
        firebase.database().ref('/InventoryStore/').child(key).remove();
        dispatch(LoaderDispatch());

    }
}

export function deleteSoldData(val, key) {
    return dispatch => {
        // console.log("---DeleteKeys++++", val, key);
        val.uid = key
        dispatch(DeleteDispatch(val))
        dispatch(LoaderDispatch());
    }
}
function DeleteDispatch(payload) {
    return {
        type: ActionTypes.DeleteActions,
        payload
    }
}
function LoaderDispatch() {
    return {
        type: ActionTypes.LoaderActions,
    }
}
