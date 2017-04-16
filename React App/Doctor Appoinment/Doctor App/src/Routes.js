
import React, { Component } from 'react';
import { Router, Route, browserHistory } from 'react-router';
import * as firebase from 'firebase';
import NavBar from './Components/Navigation/navbar'
import LogIn from './Components/Authentication/Login';
import signup from './Components/Authentication/signup';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Home from './Components/Home/home';
import DoctorInfo from './Components/Doctors/DoctorInfo'
import CreateNewStore from './Components/Doctors/newStore'
import PatintForAdmin from './Components/Admin/ForPatient'
import DoctorsForAdmin from './Components/Admin/ForDoctors'
import AdminHome from './Components/Admin/AdminHome'

import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();


var config = {
    apiKey: "AIzaSyArVpiyJ0wPxATriQBnPzvbCqjIBVWSppc",
    authDomain: "sky-auth.firebaseapp.com",
    databaseURL: "https://sky-auth.firebaseio.com",
    storageBucket: "sky-auth.appspot.com",
    messagingSenderId: "936918632809"
};
firebase.initializeApp(config);


export default class Routes extends Component {
    render() {
        return (
            <MuiThemeProvider>
                <Router history={browserHistory}>
                    <Route path="/" component={NavBar}>
                        <Route path="/signup" component={signup} />
                        <Route path="/LogIn" component={LogIn} />
                        <Route path="/home" component={Home}/>
                        <Route path="/appoinment" component={CreateNewStore} />
                        <Route path="/DoctorInfo" component={DoctorInfo} />
                        <Route path="/Adminhome" component={AdminHome} />
                        <Route path="/PatintForAdmin" component={PatintForAdmin} />
                        <Route path="/DoctorsForAdmin" component={DoctorsForAdmin} />
                        
                    </Route>
                </Router>
            </MuiThemeProvider>
        )
    }
}
