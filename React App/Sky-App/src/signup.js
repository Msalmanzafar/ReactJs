import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class Signup extends Component {
  render() {
    return (
        <div className="container">
        <div className="row mid">
            <div className="col-md-10 col-md-offset-1 ">
                 <form name="myForm" >
                     <div className="form-group sign-form">
                         <label for="name">Enter name: </label><br/>
                         <div id="checkName"></div>
                         <input id="name" type="text" className="form-control" placeholder="Enter Name"  onkeypress="keyPress()"/>
                     </div>
                     <div className="form-group sign-form">
                         <label for="email">Enter email: </label><br/>
                         <div id="checkEmail"></div>
                         <input className="form-control" id="email" name="email" type="email" placeholder="Enter Email"  onkeypress="keyPress()"/>
                     </div>
                     <div className="form-group sign-form">
                         <label for="password">Enter password: </label><br/>
                         <div id="checkPassword"></div>
                         <input className="form-control" id="password" type="password" placeholder="Enter Password"  onkeypress="keyPress()"/><br/>
                     </div>
                     <button className="btn btn-info signup" onclick="userForm()" type="button">Sign Up</button>
                 </form>
            </div>
        </div>
        </div>        
    );
  }
}
export default Signup;