import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class Menu extends React.Component {
  render() {
    let menus = [
            'Home',
            'About',
            'Services',
            'Portfolio',
            'Contact us'
      ]
    return React.createElement('div',null,
      menus.map((v, i) => {
        return React.createElement('div',
          {key: i},
          React.createElement(Link, {label: v})
        )
      })
    )
}}

class Link extends React.Component {
  render() {
    const url='pages/' + this.props.label 
        .toLowerCase()
        .trim()
        .replace(' ', '-')
    return React.createElement('div',null,
      React.createElement(
        'a',
        {href: url},
        this.props.label
      ),
      React.createElement('br')
      )
  }
}

export default Menu;
