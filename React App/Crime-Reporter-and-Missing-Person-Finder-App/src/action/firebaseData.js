import actionTypes from '../Reducers/actionTypes'
import * as firebase from 'firebase';


export function MySatatusAction(){
    return dispatch=>{
        dispatch(MySatatusType())
        var user= firebase.auth().currentUser;
        firebase.database().ref('CrimeAppUsers/' + user.uid).on('child_added', (data) => {
            let obj = data.val();
            //  obj.id = data.key;
            console.log('my firebase data',obj);
             
        })
        console.log('my status data',user);
    }
}

function MySatatusType(){
    return{
        type: actionTypes.MyStatusFire,
    }
}