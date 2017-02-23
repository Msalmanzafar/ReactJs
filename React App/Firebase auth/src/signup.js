import React, { Component } from 'react';

import * as firebase from 'firebase';
// initialize firebase



class SignUp extends Component {
    // constructor(){
    //     super();
    //     this.state ={
    //         speed: 14
    //     }
    // }
    // componentDidMount(){
    //     const rootRef = firebase.database().ref().child('sky-auth'); // don't need this line...
    //     // main code 
    //     const speedRef = firebase.database().ref();
    //     speedRef.on('value', snap => {
    //         console.log(snap.val());
    //         var currentspeed = snap.val();
    //          this.setState({
    //              speed: currentspeed.speed
    //             // speed : 25
    //          });
    //         //  console.log(this.state.speed, 'haider');
    //     });
    // }
    constructor(props) {
        super(props);
        this.signUp = this.signUp.bind(this);
        this.toggleErrorMessage = this.toggleErrorMessage.bind(this);
        this.state = {
            errorStatus: false,
            errormessage: ''
        };
    }
    signUp() {
        let name = this.refs.txtName.value;
        let email = this.refs.txtEmail.value;
        let password = this.refs.txtPassword.value;
        console.log(email,password,"*****************");
        firebase.auth().createUserWithEmailAndPassword(email, password)
            .then((user) => {
                let userDetail = {
                    username: name,
                    useremail: user.email,
                    useruid: user.uid
                }
                // console.log(userDetail);
                name = this.refs.txtName.value = '';
                email = this.refs.txtEmail.value = '';
                password = this.refs.txtPassword.value = ''; 
                firebase.database().ref('users/' + user.uid).set(userDetail)
                .then(() => console.log("SignUp Completed"));
            })
            .catch((error) => {
                var errorCode = error.code;
                var errorMessage = error.message;
                this.toggleErrorMessage();
                this.setState({ errormessage: errorMessage });
            });
    }
    toggleErrorMessage() {
        this.setState({ errorStatus: !this.state.errorStatus })
    }
    render() {
        return (
            <div className="container ">
                {/*<div>{this.state.speed}</div>*/}
                <div className="row mid ">
                    <div className="col-md-12 text-center">
                        <h1>Sign Up</h1>
                    </div>
                    <div className="col-md-10 col-md-offset-1 ">
                        <form name="myForm" >
                            <div className="form-group ">
                                <label htmlFor="name">Enter name: </label><br />
                                <input type="text" className="form-control" ref="txtName" placeholder="Enter Name" />
                            </div>
                            <div className="form-group ">
                                <label htmlFor="email">Enter email: </label><br />
                                <input className="form-control" ref="txtEmail" type="email" placeholder="Enter Email" />
                            </div>
                            <div className="form-group ">
                                <label htmlFor="password">Enter password: </label><br />
                                <input className="form-control" type="password" ref="txtPassword" placeholder="Enter Password" />
                            </div>
                            <button className="btn btn-info sigup-button" type="button" onClick={this.signUp} id="btnSignup">Sign Up</button>
                        </form>
                    </div>

                    <div className="container text-center">
                        {(this.state.errorStatus) ? <div>{this.state.errormessage}</div> : ""}
                    </div>
                </div>
            </div>
        );
    }
}

export default SignUp;