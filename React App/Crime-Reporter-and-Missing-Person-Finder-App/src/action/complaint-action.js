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
                })
                .catch(()=>{
                    console.log('check user email and password')
                })
    }   
}
export function CrimeAction(crimeObj){
    return dispatch =>{
        var user= firebase.auth().currentUser;
        console.log(user.uid, '----------------------')
         firebase.database().ref('Crimes/' + user.uid).push(crimeObj)
                .then(()=>{
                    dispatch(ForNewCrimes());
                    console.log('crime data set');
                })
                .catch(()=>{
                    console.log('check user email and password')
                })
    }   
}

export function missingAction(missingDetails){
    return dispatch =>{
        var user= firebase.auth().currentUser;
        console.log(user.uid, '----------------------')
         firebase.database().ref('Missing/' + user.uid).push(missingDetails)
                .then(()=>{
                    dispatch(ForNewMissing());
                    console.log('crime data set');
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
function ForNewCrimes(payload){
    return{
        type: actionTypes.ForCrimes,
        payload
    }
}
function ForNewMissing(payload){
    return{
        type: actionTypes.ForMissing,
        payload
    }
}