import React, { Component } from 'react';
import { SignInAction } from '../../Actions/AuthActions';
import { connect } from 'react-redux';
// import shops from '../../images/store.jpg'
import { Link } from 'react-router';

// const styles = {
//     img: {
//         width: '450px',
//         height: 'auto'
//     }
// }

class LogIn extends Component {
    constructor(props) {
        super(props);
        this.SignIn = this.SignIn.bind(this)
    }
    SignIn(ev) {
        ev.preventDefault();
        let email = this.refs.email.value;
        let password = this.refs.password.value;
        if (email === '' || email === ' ' || password === '' || password === ' ') {
            alert("Please Write your email and password");
        } else {
            let userLogin = {
                email: email,
                password: password
            }
            this.props.SignInAction(userLogin);
            email = this.refs.email.value = '';
            password = this.refs.password.value = '';
        }
    }
    render() {
        return (
            <div className="container">

                <div className="text-center col-md-12">
                    <h2>Log In</h2>
                </div>
                <form onSubmit={this.SignIn}>
                    <div className="form-group col-md-10 col-md-offset-1">
                        <label htmlFor="email">Email address</label>
                        <input type="email" className="form-control" ref="email" placeholder="Enter email" />
                    </div>
                    <div className="form-group col-md-10 col-md-offset-1">
                        <label htmlFor="password">Enter Password</label>
                        <input type="password" className="form-control" ref="password" placeholder="Enter password" />
                    </div>
                    <div className="form-group col-md-10 col-md-offset-1">
                        <button type="submit" className="btn btn-success custom-button">Log In</button>
                    </div>
                    <div className="form-group col-md-10 col-md-offset-1">
                        <p>Don't have an account! <Link to="/SignUp">Sign Up Here</Link></p>
                    </div>
                </form>


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
        SignInAction: (userLogin) => {
            dispatch(SignInAction(userLogin));
        }
    };
}
export default connect(mapStateToProps, mapDispatchToProps)(LogIn);