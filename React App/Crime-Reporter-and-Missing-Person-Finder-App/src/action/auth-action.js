import actionTypes from '../Reducers/actionTypes'
import * as firebase from 'firebase';
import { browserHistory } from 'react-router';


export function SignUp(userSignUp) {
    return dispatch => {

        firebase.auth()
            .createUserWithEmailAndPassword(userSignUp.email, userSignUp.password)
            .then((user) => {
                let firebaseData = {
                    email: userSignUp.email
                };
                firebase.database().ref('CrimeAppUsers/' + user.uid).set(firebaseData)
                    .then(() => {
                        alert("SignUp Completed")
                        browserHistory.push('/signin');
                    });
            })
            .catch((error) => {
                // var errorCode = error.code;
                var errorMessage = error.message;
                // alert(errorMessage);
                dispatch(ErrorMessageDispatch(errorMessage))
                // console.log(errorMessage);
            });
    }
}



export function SignIn(userSignIn) {
    return dispatch => {
        firebase.auth()
            .signInWithEmailAndPassword(userSignIn.email, userSignIn.password)
            .then((user) => {
                // console.log('userSignIn',user.email);
                if (user.email === 'admin@gmail.com') {
                    browserHistory.push('/AdminPage');
                    dispatch(signInUpdate(user));
                } else {
                    browserHistory.push('/home');
                    dispatch(signInUpdate(user));
                }
            })
            .catch((error) => {
                // var errorCode = error.code;
                var errorMessage = error.message;
                dispatch(ErrorMessageDispatch(errorMessage))

            });
    }
}

export function LogOutAction() {
    return dispatch => {

        firebase.auth().signOut()
            .then(function () {
                dispatch(signInUpdate());
                dispatch(ErrorMessageDispatch())
                browserHistory.push('/signin');
            }).catch(function (error) {
                setTimeout(function () {
                    alert("Check your internt")
                }, 3000);
                console.log('Server error');
            });
    }
}


function signInUpdate(payload) {
    return {
        type: actionTypes.SiginUpadte,
        payload
    }
}

function ErrorMessageDispatch(payload) {
    return {
        type: actionTypes.ErrorMessages,
        payload
    }
}