import React, { Component } from 'react';
// import { connect } from 'react-redux';
// import Avatar from 'material-ui/Avatar';
// import List from 'material-ui/List/List';
// import ListItem from 'material-ui/List/ListItem';
// import Paper from 'material-ui/Paper';
import ComplaintStatus from '../Status/complaintStatus';
import CrimeStatus from '../Status/crimesStatus'
import missingStatus from '../Status/missingStatus'

const heading={
    height:'45px'
}

class myStatus extends Component {
    render() {
        return (
            <div>
                <center>
                    <h3 style={heading}>My Status</h3>
                    <ComplaintStatus />
                    <CrimeStatus  />
                    <missingStatus />
                </center>
            </div>
        );
    }
}

export default (myStatus);