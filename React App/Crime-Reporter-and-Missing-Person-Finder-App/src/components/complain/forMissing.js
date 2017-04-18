import React, { Component } from 'react';
import TextField from 'material-ui/TextField';
import Paper from 'material-ui/Paper';
import RaisedButton from 'material-ui/RaisedButton';
// import SelectField from 'material-ui/SelectField';
// import MenuItem from 'material-ui/MenuItem';
// import injectTapEventPlugin from "react-tap-event-plugin";
import {ComplaintsAction} from '../../action/complaint-action';
import {connect} from 'react-redux';


const style = {
    height: 'auto',
    width: '60%',
    margin: 20,
    padding: 30,
    textAlign: 'center',
    display: 'inline-block',
};
const style3 = {
    width: '90%',
    textAlign: 'left',
    fontSize: 15
};
const style2 = {
    marginTop: 15,
};

class ForMissing extends Component {
    constructor(props){
        super(props);
        this.missing = this.missing.bind(this);
    }
    missing(){
        let missingDetails={
            name: this.refs.fname.getValue(),
            location: this.refs.location.getValue(),
            missName: this.refs.missName.getValue(),
            age: this.refs.age.getValue(),
            // picture: this.refs.picture.getValue(),
            crimeType: 'Missing Report',
            status: 'Panding',
        }
        // console.log('missingDetails',missingDetails)
        this.props.ComplaintsAction(missingDetails);
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
                            ref="missName"
                        />
                        <TextField
                            hintText="Enter age of missing person"
                            type="number"
                            floatingLabelText="Person Age"
                            style={style3}
                            ref="age"
                        />
                        {/*<SelectField
                            floatingLabelText="Ready?"
                            value={this.state.value}
                            onChange={this.handleChange}
                        >
                            <MenuItem value={null} primaryText="" />
                            <MenuItem value={false} primaryText="No" />
                            <MenuItem value={true} primaryText="Yes" />
                        </SelectField>*/}
                        {/*<RaisedButton label="Submit image of missing person" >
                            <input type="file" ref="picture"/>
                        </RaisedButton><br /><br /><br />*/}
                        <RaisedButton
                            label="Submit"
                            labelColor="#fcfaf6"
                            backgroundColor="#00796b"
                            onClick={this.missing}
                            style={style2}
                        />

                    </Paper>
                </center>
            </div>
        );
    }
}

const mapStateToProps =(state) =>{
    return{
        complain: state.ComplaintReducers
    };
}
const mapDispatchToProps =(dispatch) =>{
    return{
        ComplaintsAction: (missingDetails) =>{
            dispatch(ComplaintsAction(missingDetails))
        }
    };
}
export default connect(mapStateToProps,mapDispatchToProps)(ForMissing);