import React, {Component} from 'react';
import TextField from 'material-ui/TextField';
import Paper from 'material-ui/Paper';
import RaisedButton from 'material-ui/RaisedButton';

const style = {
  height: 'auto',
  width: 500,
  margin: 20,
  padding: 30,
  textAlign: 'center',
  display: 'inline-block',
};
const style3 = {
  width: 400,
  textAlign: 'left',
  fontSize: 15
};
const style2 = {
  marginTop: 15,
};

class ForCrimes extends Component{
    render(){
        return(
            <div>
                <center>
                    <Paper style={style} zDepth={3} rounded={true} >
                        <div>
                            <h3>Register Crime Report</h3>
                        </div>
                        <TextField 
                            hintText="Enter full name.."
                            type="text"
                            floatingLabelText="Complain Against"
                            style={style3}
                            ref="fname"
                        />
                        <TextField 
                            hintText="Enter your email.."
                            type="text"
                            floatingLabelText="Your Email"
                            style={style3}
                            ref="fname"
                        />
                        <TextField 
                            hintText="Your complain must be contain 140 or above character.."
                            type="text"
                            floatingLabelText="Enter your Complain"
                            style={style3}
                            ref="fname"
                            multiLine={true}
                        />
                        <RaisedButton 
                            label="Submit" 
                            labelColor="#fcfaf6" 
                            backgroundColor="#00796b" 
                            onClick={this.logOut}
                            style={style2}
                        />
                        
                    </Paper>
                </center>
            </div>
        );
    }
}

export default ForCrimes;