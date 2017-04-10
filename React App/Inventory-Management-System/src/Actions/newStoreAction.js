import ActionTypes from './ActionTypes';
import * as firebase from 'firebase';

export function NewStoreAction(Stores) {
    return dispatch => {
        var user = firebase.auth().currentUser;
        // console.log(user.uid, '----------------------')
        Stores.uId = user.uid;
        Stores.emailId = user.email;
        firebase.database().ref('InventoryStore/').push(Stores)
            .then(() => {
                dispatch(ForNewStore(Stores));
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