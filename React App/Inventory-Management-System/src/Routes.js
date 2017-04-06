
import React,{Component} from 'react';
import { Router, Route, browserHistory, IndexRoute} from 'react-router';
import * as firebase from 'firebase';
import NavBar from './Components/Navigation/navbar'
import LogIn from './Components/Authentication/Login';
import SignUp from './Components/Authentication/SignUp';
import Home from './Components/Home/home'

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
                <Route path="/" component={NavBar}>
                    <IndexRoute component={LogIn}/>
                    <Route path="/LogIn" component={LogIn}/>
                    <Route path="/SignUp" component={SignUp}/>
                    <Route path="/home" component={Home}>
                    </Route>
                </Route>
            </Router>
        )
    }
}
