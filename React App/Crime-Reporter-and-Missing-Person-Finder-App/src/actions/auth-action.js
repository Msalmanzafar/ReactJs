import * as firebase from 'firebase';
import actionTypes from '../actions/actonTypes';
import {browserHistory} from 'react-router';

export function signUp(userSignUp){
    return dispatch =>{
        dispatch(newUserCreateAction());
        const newUser = firebase.auth()
            .createUserWithEmailAndPassword(userSignUp.email, userSignUp.password)
            .then((user) => {
                let firebaseData={
                    email: userSignUp.email
                };
                firebase.database().ref('Blood-bank/' + user.uid).set(firebaseData)
                    .then(() => {
                        console.log("SignUp Completed")
                        // console.log(userUth);
                    });
            })
            .catch((error) => {
                var errorCode = error.code;
                var errorMessage = error.message;
            });
            setTimeout(()=>{
                dispatch({
                    type: actionTypes.GetNewUserData,
                    payload: newUser
                })
            },1000);
    }
}

export function signIn(userSignIn){
    return dispatch =>{
        dispatch(GetUserSignIn());
        const Login = firebase.auth()
            .signInWithEmailAndPassword(userSignIn.email, userSignIn.password)
            .then((user) => {
                let userDetail = {
                    email: user.email,
                    uid: user.uid
                }
                browserHistory.push('/home');
            })
            .catch((error) => {
                var errorCode = error.code;
                var errorMessage = error.message;
                // var errorMessage = "The email address or password you entered is not valid";
                console.log(errorMessage);
            });
            setTimeout(()=>{
                dispatch({
                    type: actionTypes.GetLoginData,
                    payload: Login
                })
            },1000);
    }
}

function newUserCreateAction(){
    return{
        type: actionTypes.GetNewUserData
    }
}

function GetUserSignIn(){
    return{
        type: actionTypes.GetLoginData
    }
}