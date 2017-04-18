import React, { Component } from 'react';
// import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import TextField from 'material-ui/TextField';
import Paper from 'material-ui/Paper';
import RaisedButton from 'material-ui/RaisedButton';
import { connect } from 'react-redux';
import { SignIn } from '../../action/auth-action';

const style = {
    height: 'auto',
    width: '60%',
    margin: 20,
    padding: 30,
    textAlign: 'center',
    display: 'inline-block',
};

const style2 = {
    margin: 12,
};

const style3 = {
    width: '90%',
};


class signin extends Component {
    constructor(props) {
        super(props);
        this.signInUser = this.signInUser.bind(this);
    }
    signInUser(ev) {
        ev.preventDefault();
        let email = this.refs.email.getValue();
        let password = this.refs.password.getValue();
        let userSignIn = {
            email: email,
            password: password
        }
        this.props.SignIn(userSignIn);
        // console.log(userSignIn); 
    }
    render() {
        const {
            ErrorMessage,
        } = this.props;
        // console.log('userSignIn',this.props.auth.authSignIn)
        return (
            <div>
                <center>
                    <Paper style={style} zDepth={3} rounded={true} >
                        <h2>Log In</h2>
                        <form onSubmit={this.signInUser}>
                            <TextField
                                hintText="email"
                                type="email"
                                floatingLabelText="Enter your email"
                                style={style3}
                                ref="email"
                            /><br />
                            <TextField
                                hintText="password"
                                type="password"
                                floatingLabelText="Enter your password"
                                style={style3}
                                ref="password"
                            />
                            {(ErrorMessage) ? (
                                <div>
                                    <p className="alert alert-danger">{ErrorMessage}</p>
                                </div>
                            ) : (
                                    <span></span>
                                )}
                            <RaisedButton type="submit" label="Sign In" primary={true}
                                style={style2}
                            />
                        </form>
                    </Paper>
                </center>
            </div>
        )
    }
};

const mapStateToProps = (state) => {
    return {
        auth: state.AuthReducer,
        ErrorMessage: state.AuthReducer.ErrorMess

    };
}
const mapDispatchToProps = (dispatch) => {
    return {
        SignIn: (userSignIn) => {
            dispatch(SignIn(userSignIn));
        }
    };
}
export default connect(mapStateToProps, mapDispatchToProps)(signin);
