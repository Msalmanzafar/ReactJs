import React, {Component} from 'react';
import TextField from 'material-ui/TextField';
import Paper from 'material-ui/Paper';

const style = {
  height: 350,
  width: 500,
  margin: 20,
  padding: 30,
  textAlign: 'center',
  display: 'inline-block',
};
const style3 = {
  width: 400,
};

class ForComplaint extends Component{
    render(){
        return(
            <div>
                <center>
                    <Paper style={style} zDepth={3} rounded={true} >
                        <TextField 
                            hintText="Enter your full name.."
                            type="text"
                            floatingLabelText="Full Name"
                            style={style3}
                            ref="fname"
                        />
                        <TextField 
                            hintText="Enter your Email.."
                            type="text"
                            floatingLabelText="Email"
                            style={style3}
                            ref="fname"
                        />
                    </Paper>
                </center>
            </div>
        );
    }
}

export default ForComplaint;