import ActionTypes from '../Actions/ActionTypes';
import * as firebase from 'firebase';
import { browserHistory } from 'react-router';


export function SignUpAction(userSignUp) {
    return dispatch => {
        firebase.auth()
            .createUserWithEmailAndPassword(userSignUp.email, userSignUp.password)
            .then((user) => {
                let firebaseData = {
                    email: userSignUp.email
                };
                firebase.database().ref('BusinessStoreUsers/' + user.uid).set(firebaseData)
                    .then(() => {
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
        firebase.auth()
            .signInWithEmailAndPassword(userLogin.email, userLogin.password)
            .then((user) => {
                dispatch(userSignInUpdate(user));
                browserHistory.push('/home');

                // console.log('userSignIn',user.email);
                // if(user.email === 'admin@gmail.com'){
                //     browserHistory.push('/AdminPage');
                //     dispatch(signInUpdate(user));
                // }else{
                //      browserHistory.push('/home');
                //      dispatch(signInUpdate(user));
                // }
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
            browserHistory.push('/SignUp');
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