import React,{Component} from 'react';
// import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import TextField from 'material-ui/TextField';
import Paper from 'material-ui/Paper';
import RaisedButton from 'material-ui/RaisedButton';
import {connect} from 'react-redux';
import {signIn} from '../actions/auth-action';

const style = {
  height: 350,
  width: 500,
  margin: 20,
  padding: 30,
  textAlign: 'center',
  display: 'inline-block',
};

const style2 = {
  margin: 12,
};

const style3 = {
  width: 400,
};


class signin extends Component{
    constructor(props){
        super(props);
        this.signInUser = this.signInUser.bind(this);
    }
    signInUser(ev){
        ev.preventDefault();
        let email = this.refs.email.getValue();
        let password = this.refs.password.getValue();
        let userSignIn={
            email: email,
            password: password
        }
        this.props.signIn(userSignIn);
        console.log(userSignIn); 
    }
    render(){
        console.log('userSignIn',this.props.auth.authSignIn)
        return(
            <div>
                <center>
                    <Paper style={style} zDepth={3} rounded={true} >
                        <h2>Sign In</h2>
                        <form onSubmit={this.signInUser}>
                            <TextField
                                hintText="email"
                                type="email"
                                floatingLabelText="Enter your email"
                                style={style3}
                                ref="email"
                            /><br/>
                            <TextField
                                hintText="password"
                                type="password"
                                floatingLabelText="Enter your password"
                                style={style3}
                                ref="password"
                            /><br/><br/>
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

const mapStateToProps =(state) =>{
    return{
        auth: state.AuthReducer
    };
}
const mapDispatchToProps =(dispatch) =>{
    return{
        signIn: (userSignIn) =>{
            dispatch(signIn(userSignIn));
        }
    };
}
export default connect(mapStateToProps , mapDispatchToProps)(signin);
