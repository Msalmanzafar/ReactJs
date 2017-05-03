
import React, { Component } from 'react';
import { Router, Route, browserHistory ,IndexRoute} from 'react-router';
import * as firebase from 'firebase';
import NavBar from './Components/Navigation/navbar'
import LogIn from './Components/Authentication/Login';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Home from './Components/Home/home';
import LogoPage from './Components/Home/LogoPage';
import FrontLogo from './Components/Home/frontLogo';
import CreateNewStore from './Components/CreateStore/newStore';
import AvailibaleStores from './Components/CreateStore/availibaleStores';
import MyStore from './Components/AddNewPro/StoreHome';
import SaleProducts from './Components/SaleProducts/saleProducts';
import SaledDetails from './Components/SaleProducts/saledData';
import AppTheme from "./Apptheme";
import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();


var config = {
    apiKey: "AIzaSyAz-OClI43ywtTv7fMKdCJnc3-LcpZWTcE",
    authDomain: "inventory-store-2720b.firebaseapp.com",
    databaseURL: "https://inventory-store-2720b.firebaseio.com",
    projectId: "inventory-store-2720b",
    storageBucket: "inventory-store-2720b.appspot.com",
    messagingSenderId: "190443387553"
  };
  firebase.initializeApp(config);




export default class Routes extends Component {
    render() {
        return (
            <MuiThemeProvider muiTheme={AppTheme}>
                <Router history={browserHistory}>
                    <Route path="/" component={NavBar}>
                        <IndexRoute component={LogoPage}/>
                        <Route path="/LogIn" component={LogIn} />
                        <Route path="/home" component={Home}>
                            <IndexRoute component={FrontLogo}/>
                            <Route path="/newstore" component={CreateNewStore} />
                            <Route path="/availstores" component={AvailibaleStores} />
                            <Route path="/saleproduct" component={SaleProducts} />
                            <Route path="/mystore" component={MyStore} />
                            <Route path="/salesdetails" component={SaledDetails} />
                        </Route>
                    </Route>
                </Router>
            </MuiThemeProvider>
        )
    }
}
