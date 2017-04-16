import ActionTypes from '../Actions/ActionTypes';
import * as firebase from 'firebase';
import { browserHistory } from 'react-router';

export function SignUp(userSignUp) {
    return dispatch => {
        // console.log("actiontype userSignUp",userSignUp)
        firebase.auth()
            .createUserWithEmailAndPassword(userSignUp.email, userSignUp.password)
            .then((user) => {
                let firebaseData = {
                    email: userSignUp.email,
                    type: userSignUp.option
                };
                firebase.database().ref('DoctorApp/' + user.uid).set(firebaseData)
                    .then(() => {
                        browserHistory.push('/LogIn')
                        console.log("SignUp Completed")
                        // console.log(userUth);
                    });
            })
            .catch((error) => {
                // var errorCode = error.code;
                var errorMessage = error.message;
                console.log(errorMessage);
            });
    }
}

export function SignInAction(userLogin) {
    return dispatch => {
        // console.log(userLogin.option)

        firebase.auth()
            .signInWithEmailAndPassword(userLogin.email, userLogin.password)
            .then((user) => {
                if (userLogin.option === 'Patient') {
                    dispatch(userSignInUpdate(userLogin));
                    browserHistory.push('/home');
                }
                if (userLogin.option === 'Doctor') {
                    dispatch(userSignInUpdate(userLogin));
                    browserHistory.push('/appoinment');
                }
                if (userLogin.option === 'Admin') {
                    dispatch(userSignInUpdate(userLogin));
                    browserHistory.push('/Adminhome');
                }
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
            .then(() => {
                browserHistory.push('/LogIn');
                console.log('success');
                dispatch(userSignInUpdate());
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