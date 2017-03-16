
import React,{Component} from 'react';
import { Router, Route, browserHistory } from 'react-router';
import App from './container/app';
import signup from'./components/signup'
import signin from'./components/signin'
import * as firebase from 'firebase';
import Home from './components/home/home';
import ForComplaint from './components/home/forComplaints';
import ForCrimes from './components/home/forCrimes';
import ForMissing from './components/home/forMissing';


// import {Provider} from 'react-redux';
// import store from './store';
var config = {
    apiKey: "AIzaSyArVpiyJ0wPxATriQBnPzvbCqjIBVWSppc",
    authDomain: "sky-auth.firebaseapp.com",
    databaseURL: "https://sky-auth.firebaseio.com",
    storageBucket: "sky-auth.appspot.com",
    messagingSenderId: "936918632809"
  };
  firebase.initializeApp(config);

export default class Routes extends Component{
    render(){
        return(
            <Router history={browserHistory}>
                <Route path="/" component={App} >
                    <Route path="/signup" component={signup}/>
                    <Route path="/signin" component={signin}/>
                    <Route path="/home" component={Home}>
                        <Route path="/forComplaints" component={ForComplaint}/>
                        <Route path="/forCrimes" component={ForCrimes}/>
                        <Route path="/forMissing" component={ForMissing}/>
                    </Route>
                </Route>
            </Router>
        )
    }
    
}
