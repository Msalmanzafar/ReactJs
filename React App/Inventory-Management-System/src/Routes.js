
import React, { Component } from 'react';
import { Router, Route, browserHistory ,IndexRoute} from 'react-router';
import * as firebase from 'firebase';
import NavBar from './Components/Navigation/navbar'
import LogIn from './Components/Authentication/Login';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Home from './Components/Home/home';
import LogoPage from './Components/Home/LogoPage';
import FrontLogo from './Components/Home/frontLogo'
import CreateNewStore from './Components/CreateStore/newStore'
import AvailibaleStores from './Components/CreateStore/availibaleStores'
import MyStore from './Components/AddNewPro/StoreHome'
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
                        <IndexRoute component={LogoPage}/>
                        <Route path="/LogIn" component={LogIn} />
                        <Route path="/home" component={Home}>
                            <IndexRoute component={FrontLogo}/>
                            <Route path="/newstore" component={CreateNewStore} />
                            <Route path="/availstores" component={AvailibaleStores} />
                            <Route path="/mystore" component={MyStore} />
                        </Route>
                    </Route>
                </Router>
            </MuiThemeProvider>
        )
    }
}
