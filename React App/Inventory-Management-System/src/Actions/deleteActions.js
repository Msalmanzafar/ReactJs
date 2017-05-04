import ActionTypes from './ActionTypes';
import * as firebase from 'firebase';
// import { browserHistory } from 'react-router';
export function LoaderAction() {
    return dispatch => {
        dispatch(LoaderDispatch());
    }
}
function LoaderDispatch() {
    return {
        type: ActionTypes.LoaderActions,
    }
}
export function DeleteProduct(keys) {
    return dispatch => {
        // console.log("---Delete Product---", keys);
        // var user = firebase.auth().currentUser;
        firebase.database().ref('/StoresProducts/').child(keys).remove();
        dispatch(LoaderDispatch());
        
    }
}

export function DeleteSalesProduct(key) {
    return dispatch => {
        // console.log("---DeleteSalesProduct---", keys);
        // var user = firebase.auth().currentUser;
        firebase.database().ref('/SaledProducts/').child(key).remove();
        //dispatch(LoaderDispatch());        
    }
}

export function DeleteStores(key) {
    return dispatch => {
        // console.log("---DeleteStores---", key);
        firebase.database().ref('/InventoryStore/').child(key).remove();
        dispatch(LoaderDispatch());
        
    }
}

export function DeleteKeys(keys){
    return dispatch => {
        // console.log("---DeleteKeys++++", keys);
        dispatch(DeleteDispatch(keys))
        dispatch(LoaderDispatch());
        
    }
}
function DeleteDispatch(payload){
    return{
        type: ActionTypes.DeleteActions,
        payload
    }
}