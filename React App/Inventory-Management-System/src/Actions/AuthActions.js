import ActionTypes from '../Actions/ActionTypes';
import * as firebase from 'firebase';
import { browserHistory } from 'react-router';

export function LoaderAction() {
    return dispatch => {
        dispatch(LoaderDispatch());
    }
}


export function SignInAction(userLogin) {
    return dispatch => {
        firebase.auth()
            .signInWithEmailAndPassword(userLogin.email, userLogin.password)
            .then((user) => {

                dispatch(LoaderDispatch());
                dispatch(userSignInUpdate(user));
                browserHistory.push('/home');
                var errorMessage = '';
                dispatch(AuthErrors(errorMessage))
            })
            .catch((error) => {
                dispatch(LoaderDispatch());
                var errorMessage = error.message;
                dispatch(AuthErrors(errorMessage))
                // console.log(errorMessage);
            });
    }
}

export function LogOutAction() {
    return dispatch => {
        firebase.auth().signOut()
            .then(() => {
                dispatch(userSignInUpdate())
                browserHistory.push('/LogIn');
                console.log('success');
            }).catch((error) => {
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

function AuthErrors(payload) {
    return {
        type: ActionTypes.AuthErrors,
        payload
    }
}

function LoaderDispatch() {
    return {
        type: ActionTypes.LoaderActions,
    }
}