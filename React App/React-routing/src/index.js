import React from 'react';
import ReactDOM from 'react-dom';
// import App from './App';
import './index.css';
import Router from './router';

// ReactDOM.render(
//   <App />,
//   document.getElementById('root')
// );


const mapping = { 
    '#profile': <div >Profile (<a href="#">home</a>)</div>,
    '#accounts': <div >Accounts (<a href="#">home</a>)</div>,
    '*': <div>Dashboard<br/>
            <a href="#profile">Profile</a>
            <br/>
            <a href="#accounts">Accounts</a>
    </div>
}

ReactDOM.render(
<Router mapping = {mapping}/>, 
document.getElementById('content')
)