import React, { Component } from 'react';
import TextField from 'material-ui/TextField';
import Paper from 'material-ui/Paper';
import RaisedButton from 'material-ui/RaisedButton';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
var injectTapEventPlugin = require("react-tap-event-plugin");
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

class ForMissing extends Component {
    constructor(props){
        super(props);
        this.state = {
            value: null,
        };
    }
    

  handleChange = (event, index, value) => {
      this.setState={
        value
    }
  }

    render() {
        return (
            <div>
                <center>
                    <Paper style={style} zDepth={3} rounded={true} >
                        <div>
                            <h3>Register Missing Report</h3>
                        </div>
                        <TextField
                            hintText="Enter full name.."
                            type="text"
                            floatingLabelText="Your Name"
                            style={style3}
                            ref="fname"
                        />
                        <TextField
                            hintText="Enter your Addresss or contact Number.."
                            type="text"
                            floatingLabelText="Your Addresss"
                            style={style3}
                            ref="location"
                        />
                        <TextField
                            hintText="Enter name of missing person"
                            type="text"
                            floatingLabelText="Person Name"
                            style={style3}
                            ref="location"
                        />
                        <TextField
                            hintText="Enter age of missing person"
                            type="text"
                            floatingLabelText="Person Age"
                            style={style3}
                            ref="fname"
                        />
                        <SelectField
                            floatingLabelText="Ready?"
                            value={this.state.value}
                            onChange={this.handleChange}
                        >
                            <MenuItem value={null} primaryText="" />
                            <MenuItem value={false} primaryText="No" />
                            <MenuItem value={true} primaryText="Yes" />
                        </SelectField>
                        <RaisedButton label="Submit image of missing person if you have" >
                            <input type="file" />
                        </RaisedButton><br /><br /><br />
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

export default ForMissing;