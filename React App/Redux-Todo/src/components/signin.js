import React, { Component } from 'react';
import MyForm from './myform';
import { connect } from 'react-redux';
import {authentication} from '../modules/todo-redux.js';
import * as firebase from 'firebase';
// import { browserHistory } from 'react-router';

class SignIn extends Component{
    constructor(props){
        super(props);
        this.SignIn = this.SignIn.bind(this);
        const{
            auth
        } = this.props
        console.log(auth, 'user authentication');
    }

    SignIn(userUth){
        firebase.auth().signInWithEmailAndPassword(userUth.email, userUth.password)
        .then((user)=>{
            this.props.authentication();
            this.props.router.push('/home');
        })
        .catch((error)=>{
          console.log("working");
          
        })
    }

    render() {
    return (
        <div className="container ">
              <div className="row">
                  <div className="col-md-12 ">
                      <h2 className='heading-2 text-center'>Sign In</h2>
                      <MyForm formhandler={this.SignIn} />
                  </div>
              </div>
        </div>
    );
  }
}


module.exports = connect(state => ({
  auth: state.todo.authenticated
}), {
    authentication
  })(SignIn)