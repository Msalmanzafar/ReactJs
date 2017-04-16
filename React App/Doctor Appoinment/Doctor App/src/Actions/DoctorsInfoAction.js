import ActionTypes from './ActionTypes';
import * as firebase from 'firebase';

export function DocotrsInfoData(DoctorDetails) {
    return dispatch => {
         var user = firebase.auth().currentUser;
        // console.log(user.uid, '----------------------')
        DoctorDetails.uId = user.uid;
        firebase.database().ref('DoctorsDetails/').push(DoctorDetails)
            .then(() => {
                dispatch(DoctorsActionDataSet(DoctorDetails));
                console.log('Docotr info create');
                // browserHistory.push('/home')
            })
            .catch(() => {
                console.log('check user email and password')
            })
            
    }
}

function DoctorsActionDataSet(payload) {
    return {
        type: ActionTypes.DoctorsInfoAction,
        payload
    }
}