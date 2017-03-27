import actionTypes from '../Reducers/actionTypes'
import * as firebase from 'firebase';


export function MySatatusAction(newStatus) {

    return dispatch => {
        var user = firebase.auth().currentUser;
        firebase.database().ref('Complaints/' + user.uid).on('child_added', (data) => {
            let obj = data.val();
            //  obj.id = data.key;
            let complaint = newStatus.ComplaintsStatus;
            let Crime = newStatus.crimeStatus;
            let Missing = newStatus.missingStatus;

            if (obj.crimeType === 'Complaint Against') {
                complaint = complaint.concat(obj);
                // console.log('complaintAgainst', complaint);
                dispatch(MySatatusOfComplaints(complaint))
            }
            else if (obj.crimeType === 'Crime Report') {
                Crime = Crime.concat(obj);
                dispatch(MySatatusOfCrime(Crime))
            }
             else if (obj.crimeType === 'Missing Report') {
                Crime = Crime.concat(obj);
                dispatch(MySatatusOfMissing(Crime))
            }

        })
    }
}
export function AllSatatusAction() {
    return dispatch => {

        // var user= firebase.auth().currentUser;
        firebase.database().ref('Complaints/').on('child_added', (data) => {
            let obj = data.val();
            dispatch(AllSatatusType(obj))

            //  obj.id = data.key;
            console.log('my firebase data', obj);

        })
        // console.log('my status data',user);
    }
}



function MySatatusOfComplaints(payload) {
    return {
        type: actionTypes.ObjectOfComplaintsData,
        payload
    }
}
function MySatatusOfCrime(payload) {
    return {
        type: actionTypes.ObjectOfCrimeData,
        payload
    }
}
function MySatatusOfMissing(payload){
    return {
        type: actionTypes.ObjectOfMissingData,
        payload
    }
}

function AllSatatusType(payload) {
    return {
        type: actionTypes.AllStatusFire,
        payload
    }
}