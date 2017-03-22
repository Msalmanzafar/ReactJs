import actionTypes from '../Reducers/actionTypes'
import * as firebase from 'firebase';


export function MySatatusAction(){
    return dispatch=>{
        dispatch(MySatatusType())
        console.log('my status data');
    }
}

function MySatatusType(){
    return{
        type: actionTypes.MyStatusFire,
    }
}