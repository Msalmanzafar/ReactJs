import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import SignUp from './signup';


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
        <SignUp />
       </div> 
    );
  }
}

export default App;
