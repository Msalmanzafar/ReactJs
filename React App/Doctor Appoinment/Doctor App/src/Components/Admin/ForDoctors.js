import React, { Component } from 'react'
import { connect } from 'react-redux';
import * as mat from 'material-ui';
import {DoctorsActions} from '../../Actions/DoctorsActions'
// import { Link } from 'react-router';
const styles = {
    card: {
        width: '65%',
        height: 'auto',
        position: 'relative',
        top: '50px'
    },
    store: {
        textAlign: 'left'
    }
}
const style = {
    margin: 12,
};

class DoctorsForAdmin extends Component {
    
    render() {
         let DoctorObj = Object.keys(this.props.DoctorsDetails).map((key, index) => {
            let val = this.props.DoctorsDetails[key];
            return (
                <mat.Paper style={style} zDepth={1} key={index} >
                    <mat.List >
                        <mat.ListItem
                            disabled={true}
                            leftAvatar={
                                <mat.Avatar src="" />
                            }
                        >
                            <span ><b>{val.name}</b></span>
                            <span style={styles.status}>{val.hosp}</span><br />
                            <span style={styles.email}>{val.email}</span>
                            <span style={styles.status}>{val.number}</span><br />

                            
                        </mat.ListItem>
                    </mat.List>
                </mat.Paper>
            )
        })
        return (
            <div>
                <h3>For Doctors</h3>
                {DoctorObj}
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        DoctorsDetails: state.DoctorsReducers.DoctorsObjs
    };
}

export default connect( mapStateToProps)(DoctorsForAdmin);