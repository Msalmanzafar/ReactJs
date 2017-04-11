import ActionTypes from './ActionTypes';
import * as firebase from 'firebase';

export function NewStoreAction(NewStores) {
    return dispatch => {
        var user = firebase.auth().currentUser;
        // console.log(user.uid, '----------------------')
        NewStores.uId = user.uid;
        NewStores.emailId = user.email;
        firebase.database().ref('InventoryStore/').push(NewStores)
            .then(() => {
                dispatch(ForNewStore(NewStores));
                alert('Store Created');
                console.log('Store Created');
                // browserHistory.push('/home')
            })
            .catch(() => {
                console.log('check user email and password')
            })
    }
}

export function AddProdutsAction(addProducts) {
    return dispatch => {
        console.log(addProducts)
        // var user = firebase.auth().currentUser;
        // // console.log(user.uid, '----------------------')
        // NewStores.uId = user.uid;
        // NewStores.emailId = user.email;
        // firebase.database().ref('InventoryStore/').push(NewStores)
        //     .then(() => {
        //         dispatch(ForNewStore(NewStores));
        //         alert('Store Created');
        //         console.log('Store Created');
        //         // browserHistory.push('/home')
        //     })
        //     .catch(() => {
        //         console.log('check user email and password')
        //     })
    }
}


function ForNewStore(payload) {
    return {
        type: ActionTypes.NewStoreCreate,
        payload
    }
}