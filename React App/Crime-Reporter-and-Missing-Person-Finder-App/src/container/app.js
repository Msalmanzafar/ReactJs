import React,{Component} from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import NavBar from '../components/navBar';
import SignUpSignIn from '../components/navbar-child';



class App extends Component{
    constructor(props){
        super()
        this.SignUp = this.SignUp.bind(this);
        this.SignIn = this.SignIn.bind(this);        
    }
    SignUp(){
        // this.context.router.push("/login");
        console.log("SignUp Working")
    }
    SignIn(){
        console.log("SignIn Working")
    }
    render(){
        return(
            <div >
               <MuiThemeProvider>
                    <NavBar />
                </MuiThemeProvider>
                <MuiThemeProvider>
                    <SignUpSignIn />
                </MuiThemeProvider>
                <MuiThemeProvider>
                    {this.props.children}
                </MuiThemeProvider>
            </div>
        )
    }
}

export default App;