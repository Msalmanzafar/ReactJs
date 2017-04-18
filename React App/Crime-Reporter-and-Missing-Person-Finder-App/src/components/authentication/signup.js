import React, { Component } from 'react';
// import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import TextField from 'material-ui/TextField';
import Paper from 'material-ui/Paper';
import RaisedButton from 'material-ui/RaisedButton';
import { connect } from 'react-redux';
import { SignUp } from '../../action/auth-action';

const style = {
    height: "auto",
    width: '80%',
    margin: 20,
    padding: 30,
    textAlign: 'center',
    display: 'inline-block',
};

const style2 = {
    margin: 12,
};

const style3 = {
    width: '95%',
};

class signup extends Component {
    constructor(props) {
        super(props);
        this.signUpUser = this.signUpUser.bind(this);
    }
    signUpUser(ev) {
        ev.preventDefault();
        let email = this.refs.email.getValue();
        let password = this.refs.password.getValue();
        let userSignUp = {
            email: email,
            password: password
        }
        this.props.SignUp(userSignUp);
        // console.log(userSignUp);
    }
    render() {
        const {
            ErrorMessage,
        } = this.props;
        // console.log('userSignUp',this.props.auth.authSignUp);
        return (
            <div>
                <center>
                    <Paper style={style} zDepth={3} rounded={true} >
                        <h2>Sign Up</h2>
                        <form onSubmit={this.signUpUser}>
                            <TextField
                                hintText="email"
                                type="email"
                                floatingLabelText="Enter your email"
                                style={style3}
                                ref="email"
                            /*value={this.props.auth.dummy}*/
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
                                
                            <RaisedButton type="submit" label="Sign Up" primary={true}
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
        SignUp: (userSignUp) => {
            dispatch(SignUp(userSignUp));
        }
    };
}
export default connect(mapStateToProps, mapDispatchToProps)(signup);
