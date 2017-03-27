import actionTypes from '../Reducers/actionTypes'
import {browserHistory} from 'react-router';
import * as firebase from 'firebase';

export function ComplaintsAction(complaintObj){
    return dispatch =>{
        var user= firebase.auth().currentUser;
        console.log(user.uid, '----------------------')
        
         firebase.database().ref('Complaints/' + user.uid).push(complaintObj)
                .then(()=>{
                    dispatch(ForNewComplaints());
                    console.log('comaplaint data set');
                    browserHistory.push('/home')
                })
                .catch(()=>{
                    console.log('check user email and password')
                })
    }   
}

function ForNewComplaints(payload){
    return{
        type: actionTypes.ForComplaints,
        payload
    }
}
