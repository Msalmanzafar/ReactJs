import ActionTypes from './ActionTypes';
import * as firebase from 'firebase';

export function NewStoreAction(Store) {
    return dispatch => {
        var user = firebase.auth().currentUser;
        // console.log(user.uid, '----------------------')
        Store.uId = user.uid;
        Store.emailId = user.email;
        firebase.database().ref('InventoryStore/').push(Store)
            .then(() => {
                dispatch(ForNewStore(Store));
                alert('Store Created');
                console.log('Store Created');
                // browserHistory.push('/home')
            })
            .catch(() => {
                console.log('check user email and password')
            })
    }
}


function ForNewStore(payload) {
    return {
        type: ActionTypes.NewStoreCreate,
        payload
    }
}