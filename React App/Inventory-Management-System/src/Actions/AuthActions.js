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
                var errorMessage = error.message;
                dispatch(AuthErrors(errorMessage))
                console.log(errorMessage);
            });
    }
}

export function LogOutAction() {
    return dispatch => {
       firebase.auth().signOut()
        .then(()=> {
            dispatch(userSignInUpdate())
            browserHistory.push('/LogIn');
            console.log('success');
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

function AuthErrors(payload){
    return {
        type: ActionTypes.AuthErrors,
        payload
    }
}