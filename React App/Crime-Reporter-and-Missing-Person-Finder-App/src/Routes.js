
import React, { Component } from 'react';
import { Router, Route, browserHistory, IndexRoute } from 'react-router';
import App from './container/app';
import signup from './components/authentication/signup'
import signin from './components/authentication/signin'
import * as firebase from 'firebase';
import Home from './components/home/home';
import ForComplaint from './components/complain/forComplaints';
import ForCrimes from './components/complain/forCrimes';
import ForMissing from './components/complain/forMissing';
import myStatus from './components/home/myStatus';
import AllStatusComponent from './components/home/allStatus';
import AllStatusForAdmin from './Admin/adminCharge';
import adminHome from './Admin/adminHome';
import AllDeatilsReport from './Admin/detailBox';
import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();

var config = {
    apiKey: "AIzaSyCtVU5s6t8jexNgIzKkna1JqqB5DF1hubM",
    authDomain: "sky-crimeapp.firebaseapp.com",
    databaseURL: "https://sky-crimeapp.firebaseio.com",
    projectId: "sky-crimeapp",
    storageBucket: "sky-crimeapp.appspot.com",
    messagingSenderId: "788008637883"
  };
  firebase.initializeApp(config);




export default class Routes extends Component {
    render() {
        return (
            <Router history={browserHistory}>
                <Route path="/" component={App} >
                    <IndexRoute component={signin} />
                    <Route path="/signup" component={signup} />
                    <Route path="/signin" component={signin} />
                    <Route path="/home" component={Home}>
                        <Route path="/forComplaints" component={ForComplaint} />
                        <Route path="/forCrimes" component={ForCrimes} />
                        <Route path="/forMissing" component={ForMissing} />
                        <Route path="/myStatus" component={myStatus} />
                        <Route path="/allStatus" component={AllStatusComponent} />
                    </Route>
                    <Route path="/AdminPage" component={adminHome}>
                        <Route path="/forComplaints" component={ForComplaint} />
                        <Route path="/forCrimes" component={ForCrimes} />
                        <Route path="/forMissing" component={ForMissing} />
                        <Route path="/myStatus" component={myStatus} />
                        <Route path="/AllStatusAdmin" component={AllStatusForAdmin} />
                        <Route path="/ReportDetails" component={AllDeatilsReport} />
                    </Route>
                </Route>
            </Router>
        )
    }

}
