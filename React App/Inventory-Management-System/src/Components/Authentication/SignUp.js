import React, { Component } from 'react';
import { SignUpAction } from '../../Actions/AuthActions';
import { connect } from 'react-redux';
import { Link } from 'react-router';

// import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
// import Paper from 'material-ui/Paper';

// const style = {
//     height: 'auto',
//     width: '80%',
//     margin: 20,
//     // textAlign: 'center',
//     display: 'inline-block',
// };


class SignUp extends Component {
    constructor(props) {
        super(props);
        this.SignUp = this.SignUp.bind(this)
    }
    SignUp(ev) {
        ev.preventDefault();
        let email = this.refs.email.value;
        let password = this.refs.password.value;
        if (email === '' || email === ' ' || password === '' || password === ' ') {
            alert("Please Write your email and password");
        } else {
            let userSignUp = {
                email: email,
                password: password
            }
            this.props.SignUpAction(userSignUp);
            email = this.refs.email.value = '';
            password = this.refs.password.value = '';
        }

    }
    render() {
        return (
            <div className="container">

                <div className="text-center col-md-12">
                    <h2>Sign Up</h2>
                </div>
                <form onSubmit={this.SignUp}>
                    <div className="form-group col-md-10 col-md-offset-1">
                        <label htmlFor="email">Email address</label>
                        <input type="email" className="form-control" ref="email" placeholder="Enter email" />
                    </div>
                    <div className="form-group col-md-10 col-md-offset-1">
                        <label htmlFor="password">Enter Password</label>
                        <input type="password" className="form-control" ref="password" placeholder="Enter password" />
                    </div>
                    <div className="form-group col-md-10 col-md-offset-1">
                        <button type="submit" className="btn btn-primary custom-button">Sign Up</button>
                    </div>
                </form>
                <div className="form-group col-md-10 col-md-offset-1">
                    <p>You have an account! <Link to="/LogIn">Sign In Here</Link></p>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        auth: state.AuthReducer
    };
}
const mapDispatchToProps = (dispatch) => {
    return {
        SignUpAction: (userSignUp) => {
            dispatch(SignUpAction(userSignUp));
        }
    };
}
export default connect(mapStateToProps, mapDispatchToProps)(SignUp);