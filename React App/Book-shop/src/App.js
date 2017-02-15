import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';

class Header extends Component {
  render() {
    return (
     <nav className="navbar navbar-inverse">
        <div className="container-fluid">
          <div className="navbar-header">
            <a className="navbar-brand" href="{{JavaScript:void(0)}}">Cloud Books Store</a>
        </div>
      </div>
    </nav>
    );
  }
}

export default Header;
