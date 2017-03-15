import React,{Component} from 'react';
// import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import RaisedButton from 'material-ui/RaisedButton';
import {Link} from 'react-router';
// import * as firebase from 'firebase';


const style = {
  margin: 12,
};
const style2 = {
  margin: 12,
};

class SignUpSignIn extends Component{
  // constructor(props){
  //       super(props);
  //       this.logOut = this.logOut.bind(this);
  //   }
  //   logOut(){
  //       firebase.auth().signOut()
  //       .then((user)=> {
  //           this.props.authentication();
  //       }, (error) =>{
  //           console.log("waiting for internet");
  //       });
  //   }
    render(){
      // const {
      //     auth
      // } = this.props
      return(
          <div>
            <center>
              {/*{(auth === false ) ? (*/}
                <span>
                  <Link to='/signup'>
                    <RaisedButton label="Sign Up" 
                        labelColor="#fcfaf6" 
                        backgroundColor="#00d0ff" 
                        style={style} 
                    />
                  </Link>
                  <Link to='/signin'>
                    <RaisedButton label="Sign In" 
                      labelColor="#fcfaf6" 
                      backgroundColor="#00d0ff" 
                      style={style} 
                    />
                  </Link>
                </span>
                  
                {/*):(*/}
                  <span>
                    <Link to='/'>
                      <RaisedButton label="Log Out" 
                        labelColor="#fcfaf6" 
                        backgroundColor="#00796b" 
                        style={style2} 
                        onClick={this.logOut}
                      />
                  </Link>
                  </span>
                    
                {/*)}*/}
            </center>
          </div>
      )
    }
  
}
  

export default SignUpSignIn;
