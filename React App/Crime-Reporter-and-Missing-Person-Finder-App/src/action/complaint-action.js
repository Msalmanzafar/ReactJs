import actionTypes from '../Reducers/actionTypes'
import {browserHistory} from 'react-router';
import * as firebase from 'firebase';

export function ComplaintsAction(complaintObj){
    return dispatch =>{
        var user= firebase.auth().currentUser;
        // console.log(user.uid, '----------------------')
        
        complaintObj.uId = user.uid;
        complaintObj.emailId = user.email;
         firebase.database().ref('Complaints/').push(complaintObj)
                .then(()=>{
                    dispatch(ForNewComplaints());
                    alert("Complaint has been Rigisterd")
                    // console.log('comaplaint data set');
                    browserHistory.push('/home')
                })
                .catch(()=>{
                    alert('check user email and password')
                })
    }   
}

function ForNewComplaints(payload){
    return{
        type: actionTypes.ForComplaints,
        payload
    }
}
