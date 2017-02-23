import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
// import SignUp from './signup';
import { Link } from 'react-router';


class App extends Component {
  render() {
    return (
      <div>
        <nav className="navbar bg-primary">
          <div className="container-fluid ">
            <div className="navbar-header heading">
              <h1>React Todo App</h1>
            </div>
          </div>
        </nav>
        <div className="container box1">
          <div className="row">
            <div className="col-md-12 text-center">
              <Link to='/signup'><button className="btn btn-info btn-new">Sign Up</button></Link>
              <Link to='/signin'><button className="btn btn-success btn-new">Sign In</button></Link>
            </div>
          </div>
        </div>
        {/*<div className="container">
          <div className="row">
            <div className="col-md-9 text-center">
                <h1>Home Page</h1>
            </div>
          </div>
        </div>*/}
        {this.props.children}
      </div>
    );
  }
}

export default App;
