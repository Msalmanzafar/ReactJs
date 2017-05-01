// import ActionTypes from './ActionTypes';
import * as firebase from 'firebase';
// import { browserHistory } from 'react-router';

export function DeleteProduct(keys) {
    return dispatch => {
        // console.log("---Delete---", keys);
        // var user = firebase.auth().currentUser;
        firebase.database().ref('/StoresProducts/').child(keys).remove();
    }
}

export function DeleteSalesProduct(keys) {
    return dispatch => {
        // console.log("---DeleteSalesProduct---", keys);
        // var user = firebase.auth().currentUser;
        firebase.database().ref('/SaledProducts/').child(keys).remove();
    }
}