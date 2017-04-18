import React, { Component } from 'react';
import TextField from 'material-ui/TextField';
import Paper from 'material-ui/Paper';
import RaisedButton from 'material-ui/RaisedButton';
import { connect } from 'react-redux';
import { ComplaintsAction } from '../../action/complaint-action';
// import * as firebase from 'firebase'
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

class ForComplaint extends Component {
    constructor(props) {
        super(props);
        this.complaints = this.complaints.bind(this);

    }
    complaints() {
        // console.log('for complain');
        let complaintObj = {
            name: this.refs.userName.getValue(),
            againstName: this.refs.againstName.getValue(),
            complain: this.refs.message.getValue(),
            crimeType: 'Complaint Against',
            status: 'Panding'
        }
        // console.log(complaint);
        this.props.ComplaintsAction(complaintObj);
    }
    render() {
        // console.log('complaints reducer',this.props.complain)
        return (
            <div>
                <center>
                    <Paper style={style} zDepth={3} rounded={true} >
                        <div>
                            <h3>Register Complaint</h3>
                        </div>
                        <TextField
                            hintText="Enter full name.."
                            type="text"
                            floatingLabelText="Your name"
                            style={style3}
                            ref="userName"
                        />
                        <TextField
                            hintText="Enter full name.."
                            type="text"
                            floatingLabelText="Complain Against"
                            style={style3}
                            ref="againstName"
                        />
                        <TextField
                            hintText="Your complain must be contain 140 or above character.."
                            type="text"
                            floatingLabelText="Enter your Complain.."
                            style={style3}
                            ref="message"
                            multiLine={true}
                        />

                        <RaisedButton
                            label="Submit"
                            labelColor="#fcfaf6"
                            backgroundColor="#00796b"
                            onClick={this.complaints}
                            style={style2}
                        />

                    </Paper>
                </center>
            </div>
        );
    }
};

const mapStateToProps = (state) => {
    return {
        complain: state.ComplaintReducers
    };
}
const mapDispatchToProps = (dispatch) => {
    return {
        ComplaintsAction: (complaintObj) => {
            dispatch(ComplaintsAction(complaintObj))
        }
    };
}
export default connect(mapStateToProps, mapDispatchToProps)(ForComplaint);

