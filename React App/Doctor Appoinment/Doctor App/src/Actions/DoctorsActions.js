import ActionTypes from './ActionTypes';
import * as firebase from 'firebase';

export function DoctorsActions() {
    return dispatch => {
        var user = firebase.auth().currentUser;
        console.log('all doctor data')
        if (user !== null) {
            firebase.database().ref('DoctorsDetails/').once('value', (data) => {
                let obj = data.val();
                console.log('All data', obj);
                dispatch(DoctorsActionData(obj))
            })
        } else {
            console.log('Plesae Login ')
        }

    }
}

function DoctorsActionData(payload) {
    return {
        type: ActionTypes.DoctorsDataAction,
        payload
    }
}