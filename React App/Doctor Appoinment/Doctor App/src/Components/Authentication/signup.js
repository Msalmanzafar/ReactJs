import React, { Component } from 'react';
// import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
// import TextField from 'material-ui/TextField';
// import Paper from 'material-ui/Paper';
// import RaisedButton from 'material-ui/RaisedButton';
import { connect } from 'react-redux';
import { SignUp } from '../../Actions/AuthActions';
import * as mat from 'material-ui';
const styles = {
    card: {
        width: '65%',
        height: 'auto',
        position: 'relative',
        top: '50px'
    },
    login: {
        textAlign: 'left'
    }
}


class signup extends Component {
    constructor(props) {
        super(props);
        this.signUpUser = this.signUpUser.bind(this);
    }
    signUpUser(ev) {
        ev.preventDefault();
        let email = this.refs.email.value;
        let password = this.refs.password.value;
        let option = this.refs.option.value;

        let userSignUp = {
            email: email,
            password: password,
            option: option
        }
        this.props.SignUp(userSignUp);
        email = this.refs.email.value = "";
        password = this.refs.password.value = "";
        option = this.refs.option.value = "";
        // console.log(userSignUp);
    }
    render() {
        // console.log('userSignUp',this.props.auth.authSignUp);
        return (
            <div>
                <center>
                    <mat.Card style={styles.card} zDepth={2}>
                        <mat.AppBar style={styles.login} title="Sign Up" showMenuIconButton={false} />
                        <mat.CardText>
                            <form onSubmit={this.signUpUser} style={styles.login}>
                                <div className="form-group " >
                                    <label htmlFor="email">Email address</label>
                                    <input type="email" className="form-control" ref="email" placeholder="Enter email" />
                                </div>
                                <div className="form-group ">
                                    <label htmlFor="password">Enter Password</label>
                                    <input type="password" className="form-control" ref="password" placeholder="Enter password" />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="catagory">Who you are..!</label>
                                    <select ref="option" className="multiselect-ui form-control" >
                                        <option value="default">Select</option>
                                        <option value="Doctor">Doctor</option>
                                        <option value="Patient">Patient</option>
                                        <option value="Admin">Admin</option>
                                    </select>
                                </div>
                                <div className="form-group ">
                                    <button type="submit" className="btn btn-success custom-button">Sign Up</button>
                                </div>

                            </form>
                        </mat.CardText>
                    </mat.Card>
                </center>
            </div>
        )
    }

};
const mapStateToProps = (state) => {
    return {
        auth: state.AuthReducer
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
