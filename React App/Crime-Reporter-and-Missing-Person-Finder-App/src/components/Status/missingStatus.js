import React, { Component } from 'react';
import { connect } from 'react-redux';
import Avatar from 'material-ui/Avatar';
import List from 'material-ui/List/List';
import ListItem from 'material-ui/List/ListItem';
import Paper from 'material-ui/Paper';
// import FlatButton from 'material-ui/FlatButton';



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
        fontSize: '13px'

    }
}

class MissingStatus extends Component {
    render() {
        // console.log('my status file', this.props.Status)
        return (
            <div>
                <center>
                    {this.props.Status.map((v, i) => {
                        return (
                            <Paper style={style} zDepth={1} key={i}>
                                <List >
                                    <ListItem
                                        disabled={true}
                                        leftAvatar={
                                            <Avatar src="" />
                                        }
                                    >
                                        <span ><b>{v.name}</b></span>
                                        <span style={styles.status}>{v.crimeType}</span><br />
                                        <span style={styles.email}>{v.emailId}</span>
                                        <span style={styles.status}>{v.status}</span><br />
                                        
                                    </ListItem>
                                </List>
                            </Paper>

                        )
                    }
                    )}
                </center>
            </div>
        );
    }
}
const mapStateToProps = (state) => {
    return {
        Status: state.StatusReducer.missingStatus
    };
}
export default connect(mapStateToProps)(MissingStatus);