import React, {Component} from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import RaisedButton from 'material-ui/RaisedButton';
import injectTapEventPlugin from 'react-tap-event-plugin';
const style = {
  margin: 12,
};

class NavBar extends Component{
    render(){
        return(
            <div>
                <MuiThemeProvider>
                    <div>
                        <AppBar
                            title="Title"
                            iconClassNameRight="muidocs-icon-navigation-expand-more"
                        />
                
                        <RaisedButton label="Primary" primary={true} style={style} />
                        <RaisedButton label="Secondary" secondary={true} style={style} />
                        
                    </div>
                </MuiThemeProvider>
            </div>    
        );
    }
}

export default NavBar