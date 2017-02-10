import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {  Link } from 'react-router';

class Main extends Component {
  render() {
    return (
      <div className="container">
        <div className="row mid">
            <div className="col-md-12 box1">
              <div className="main-page">
                <Link to="">Sign Up</Link>
                <a className="btn btn-success" >Sign In</a>
              </div>
            </div>
        </div>
      </div>
    );
  }
}


export default Main;