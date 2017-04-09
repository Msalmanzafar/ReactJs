import ActionTypes from '../Actions/ActionTypes';
import * as firebase from 'firebase';
import { browserHistory } from 'react-router';


export function SignInAction(userLogin) {
    return dispatch => {
        firebase.auth()
            .signInWithEmailAndPassword(userLogin.email, userLogin.password)
            .then((user) => {
                dispatch(userSignInUpdate(user));
                browserHistory.push('/home');
            })
            .catch((error) => {
                // var errorCode = error.code;
                var errorMessage = error.message;
                // var errorMessage = "The email address or password you entered is not valid";
                console.log(errorMessage);
            });
    }
}

export function LogOutAction() {
    return dispatch => {
       firebase.auth().signOut()
        .then(()=> {
            browserHistory.push('/LogIn');
            console.log('success');
            dispatch(userSignInUpdate());
        }).catch((error)=> {
            console.log(error);
        });
    }
}

function userSignInUpdate(payload) {
    return {
        type: ActionTypes.SiginUpadte,
        payload
    }
}