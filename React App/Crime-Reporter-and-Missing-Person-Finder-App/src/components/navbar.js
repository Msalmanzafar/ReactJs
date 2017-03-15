import React, {Component} from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';

class NavBar extends Component{
    render(){
        return(
            <div>
                <MuiThemeProvider>
                    <AppBar
                        title="Crime Reporter"
                        /*onTouchTap='salman'*/
                        /*iconClassNameRight="muidocs-icon-navigation-expand-more"*/
                    />
                </MuiThemeProvider>
            </div>
        );
    }
}

export default NavBar;
