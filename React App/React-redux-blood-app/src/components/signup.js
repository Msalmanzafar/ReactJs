import React, { Component } from 'react';
import SignUpForm from './signupForm';
import * as firebase from 'firebase';

class SignUp extends Component {
    constructor(props) {
        super(props);
        this.SignUp = this.SignUp.bind(this);
    }

    SignUp(userUth) {
        // console.log(userUth);
        firebase.auth().createUserWithEmailAndPassword(userUth.email, userUth.password)
            .then((user) => {
                userUth.email = user.email;
                userUth.uid = user.uid;
                firebase.database().ref('doners/' + user.uid).set(userUth)
                    .then(() => {
                        console.log("SignUp Completed")
                        // console.log(userUth);
                    });

            })
            .catch((error) => {
                // var errorCode = error.code;
                // var errorMessage = error.message;

            });
    }

    render() {
        return (
            <div className="container ">
                <div className="row">
                    <div className="col-md-12 ">
                        <h1 className='heading-1 text-center'>Sign Up</h1>
                        <SignUpForm formhandler={this.SignUp} />
                    </div>
                </div>
            </div>
        )
    }
}

export default SignUp;