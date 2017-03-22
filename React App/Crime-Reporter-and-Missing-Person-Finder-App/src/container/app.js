import React,{Component} from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import NavBar from '../components/navbar/navBar';
// import SignUpSignIn from '../components/navbar-child';



class App extends Component{
    render(){
        return(
            <div >
               <MuiThemeProvider>
                    <NavBar />
                </MuiThemeProvider>
                <MuiThemeProvider>
                    {this.props.children}
                </MuiThemeProvider>
            </div>
        )
    }
}

export default App;