import ActionTypes from './ActionTypes';
import * as firebase from 'firebase';
import { browserHistory } from 'react-router';

export function LoaderAction() {
    return dispatch => {
        dispatch(LoaderDispatch());
    }
}


export function NewStoreAction(NewStores) {
    return dispatch => {
        var user = firebase.auth().currentUser;
        // console.log(user.uid, '----------------------')
        NewStores.uId = user.uid;
        NewStores.emailId = user.email;
        firebase.database().ref('InventoryStore/').push(NewStores)
            .then(() => {
                dispatch(LoaderDispatch());
                alert('Store Created');
                // console.log('Store Created');
                // browserHistory.push('/home')
            })
            .catch(() => {
                dispatch(LoaderDispatch());
                alert('check user email and password');
            })
    }
}

export function AvailibaleActions() {
    return dispatch => {
        firebase.database().ref('InventoryStore/').once('value', (data) => {
            let obj = data.val();
            // obj.StoreKey = data.key;
            // console.log('AvailibaleActions',obj);
            dispatch(LoaderDispatch());
            dispatch(AvailibaleAction(obj));
        })
    }
}
export function OpenStore(keys) {
    return dispatch => {
        // console.log("open store", keys);
        firebase.database().ref('InventoryStore/').on('child_added', (data) => {
            let obj = data.val();
            obj.objKey = data.key;
            // console.log('my firebase data --------', obj);
            if (keys === obj.objKey) {
                dispatch(LoaderDispatch());
                dispatch(StoreDispatchDispay(obj));
                browserHistory.push('/mystore')

            }
        })
    }
}





export function AddProdutsAction(addProducts) {
    return dispatch => {
        let user = firebase.auth().currentUser;
        // let email = user.email;
        // console.log(user.uid, '----------------------')
        addProducts.uId = user.uid;
        if (user !== null) {
            firebase.database().ref('StoresProducts/').push(addProducts)
                .then(() => {
                    dispatch(LoaderDispatch());
                    alert('Product Created');
                })
                .catch(() => {
                    dispatch(LoaderDispatch());
                    alert('check user email and password');
                })
        } else {
            alert('check user email and password');
        }

    }
}


function StoreDispatchDispay(payload) {
    return {
        type: ActionTypes.OpenStoreData,
        payload
    }
}
function AvailibaleAction(payload) {
    return {
        type: ActionTypes.AvailbaleStoresAction,
        payload
    }
}



function LoaderDispatch() {
    return {
        type: ActionTypes.LoaderActions,
    }
}