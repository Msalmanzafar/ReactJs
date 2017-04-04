import React, { Component } from 'react';
import { connect } from 'react-redux';
import Avatar from 'material-ui/Avatar';
import List from 'material-ui/List/List';
import ListItem from 'material-ui/List/ListItem';
import Paper from 'material-ui/Paper';
import FlatButton from 'material-ui/FlatButton';


const style = {
    height: 110,
    width: 450,
    margin: 20,
    textAlign: 'left',
    display: 'inline-block',
    marginTop: '-15px'
};
const styles = {
    FlatButton: {
        float: 'right'
    },
    email: {
        color: '#74847c'
    },
    status: {
        float: 'right',
        color: '#74847c',
        fontSize: '13px',

    }

}
const heading = {
    height: '45px',

}
class AllStatusComponent extends Component {
    render() {
        let AllStatusDispay = Object.keys(this.props.Status).map((key, index) => {
            let val = this.props.Status[key];
            return (
                <Paper style={style} zDepth={1} key={index} >
                    <List >
                        <ListItem
                            disabled={true}
                            leftAvatar={
                                <Avatar src="" />
                            }
                        >
                            <span ><b>{val.name}</b></span>
                            <span style={styles.status}>{val.crimeType}</span><br />
                            <span style={styles.email}>{val.emailId}</span>
                            <span style={styles.status}>{val.status}</span><br />

                            <FlatButton
                                label="Details"
                                onClick={this.handleClose}
                                style={styles.FlatButton}
                            />
                        </ListItem>
                    </List>
                </Paper>
            )
        })
        // console.log('All status',this.props.Status);
        return (
            <div>
                <center>
                    <h3 style={heading}>All Status</h3>
                    {AllStatusDispay}
                </center>
            </div>
        );
    }
}
const mapStateToProps = (state) => {
    return {
        Status: state.StatusReducer.AllStatus
    };
}
export default connect(mapStateToProps)(AllStatusComponent);