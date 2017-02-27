import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {Link} from "react-router";

class App extends Component {
  render() {
    return (
      <nav className="navbar header navbar-fixed-top" id="my-navbar">
            <div className="container">
                <div className="navbar-header">
                    <button type="button" className="navbar-toggle " data-toggle="collapse" data-target="#navbar-collapse">
                        <span className="icon-color icon-bar"></span>
                        <span className="icon-color icon-bar"></span>
                        <span className="icon-color icon-bar"></span>
                    </button>
                    <a href="JavaScript:void(0)" className="navbar-brand" id="logo"><h3>ReactJs Quiz App</h3></a>
                </div>
                <div className="collapse navbar-collapse" id="navbar-collapse">
                    <ul className="nav link1 navbar-nav">
                        <li className="active"><a id="link" >Home</a></li>
                        <Link><li><a id="link" >Template</a></li>
                        <li><a id="link" >Project</a></li>
                        <li><a id="link" >Courses</a></li>
                        <li><a id="link" >Contact Us</a></li>
                    </ul>
            </div>
            </div>
        </nav>
        
    );
  }
}

export default App;