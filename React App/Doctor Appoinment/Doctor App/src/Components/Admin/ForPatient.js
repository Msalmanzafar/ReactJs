import React, { Component } from 'react'
import { connect } from 'react-redux';
import * as mat from 'material-ui';
import {DoctorsActions} from '../../Actions/DoctorsActions'
// import { Link } from 'react-router';


class PatintForAdmin extends Component {
    
    render() {
        return (
            <div>
                <table>
                    <tr>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Contact</th>
                        <th>Address</th>
                    </tr>
                    <tr>
                        <td>Salman</td>
                        <td>salman@gmail.com</td>
                        <td>032145646</td>
                        <td>karachi nazimabad</td>
                    </tr>
                </table>
            </div>
        )
    }
}


export default PatintForAdmin;