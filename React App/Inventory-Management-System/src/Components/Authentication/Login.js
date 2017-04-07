import React, { Component } from 'react';
import { SignInAction } from '../../Actions/AuthActions';
import { connect } from 'react-redux';
import * as mat from 'material-ui';
// import { Link } from 'react-router';

const styles = {
    card: {
        width: '80%',
        height: 'auto',
        position: 'relative',
        top: '50px'
    },
    login:{
        textAlign: 'left'
    }
}

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
            <div >
                <center>
                    <mat.Card style={styles.card} zDepth={2}>
                        <mat.AppBar style={styles.login} title="Log In" showMenuIconButton={false} />
                        <mat.CardText>
                            <form onSubmit={this.SignIn} style={styles.login}>
                                <div className="form-group " >
                                    <label htmlFor="email">Email address</label>
                                    <input type="email" className="form-control" ref="email" placeholder="Enter email" />
                                </div>
                                <div className="form-group ">
                                    <label htmlFor="password">Enter Password</label>
                                    <input type="password" className="form-control" ref="password" placeholder="Enter password" />
                                </div>
                                <div className="form-group ">
                                    <button type="submit" className="btn btn-success custom-button">Log In</button>
                                </div>
                               
                            </form>
                        </mat.CardText>
                    </mat.Card>
                </center>
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
