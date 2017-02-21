import React, { Component } from 'react';
import * as firebase from 'firebase';
// import TodoList from './todo-list';

class Signin extends Component {
    constructor(props) {
        super(props);
        this.signIn = this.signIn.bind(this);
        this.state = {
            errorStatus: false,
            errormessage: '',
            goodStatus: false,
            goodmessage: ''
        };
    }
    signIn() {
        let email = this.refs.txtEmail.value;
        let password = this.refs.txtPassword.value;
        firebase.auth().signInWithEmailAndPassword(email, password)
            .then((user) => {
                let userDetail = {
                    email: user.email,
                    uid: user.uid
                }
                email = this.refs.txtEmail.value = '';
                password = this.refs.txtPassword.value = '';
                var goodMessage = 'Thanks for Sign In';
                this.toggleGoodMessage();
                this.setState({ goodmessage: goodMessage });
                // console.log(userDetail);
                this.props.router.push('/todo-list');
            })
            .catch((error) => {
                var errorCode = error.code;
                // var errorMessage = error.message;
                var errorMessage = "The email address or password you entered is not valid";
                this.toggleErrorMessage();
                this.setState({ errormessage: errorMessage });
            });
    }
    toggleErrorMessage() {
        this.setState({ errorStatus: !this.state.errorStatus })
    }
    toggleGoodMessage() {
        this.setState({ goodStatus: !this.state.goodStatus })
    }
    render() {
        return (
            <div className="container ">
                <div className="row">
                    <div className="col-md-12 text-center">
                        <h1>Sign In</h1>
                    </div>
                    <div className="col-md-10 col-md-offset-1 ">
                        <form name="myForm" >
                            <div className="form-group ">
                                <label htmlFor="email">Enter email: </label><br />
                                <input className="form-control" ref="txtEmail" type="email" placeholder="Enter Email" />
                            </div>
                            <div className="form-group ">
                                <label htmlFor="password">Enter password: </label><br />
                                <input className="form-control" ref="txtPassword" type="password" placeholder="Enter Password" />
                            </div>
                            <button className="btn btn-success sigup-button" id="btnSignin" onClick={this.signIn} type="button" >Sign In</button>
                        </form>
                    </div>
                    <div className="container text-center">
                        {(this.state.errorStatus) ? <div><h3 className="error">{this.state.errormessage}</h3></div> : ""}
                        {(this.state.goodStatus) ? <div><h3 className="good">{this.state.goodmessage}</h3></div> : ""}
                    </div>
                </div>
            </div>
        );
    }
}

export default Signin;