import React, { Component } from 'react';

import ComplaintStatus from '../Status/complaintStatus';
import CrimeStatus from '../Status/crimesStatus'
import MissingStatus from '../Status/missingStatus'

const heading = {
    height: '45px'
}


class myStatus extends Component {
    render() {
        return (
            <div>
                <center>
                    <h3 style={heading}>My Status</h3>
                    <ComplaintStatus />
                    <MissingStatus />
                    <CrimeStatus />
                </center>
            </div>
        );
    }
}

export default myStatus;