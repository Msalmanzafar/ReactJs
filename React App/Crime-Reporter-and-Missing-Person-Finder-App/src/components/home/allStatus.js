import React, { Component } from 'react';
import { connect } from 'react-redux';
import Avatar from 'material-ui/Avatar';
import List from 'material-ui/List/List';
import ListItem from 'material-ui/List/ListItem';
import Paper from 'material-ui/Paper';
import FlatButton from 'material-ui/FlatButton';
import Dialog from 'material-ui/Dialog';
import { AllSatatusActionForComperison } from '../../action/firebaseData'
import AllDeatilsComponents from './allDetails'

const style = {
    height: 'auto',
    width: '80%',
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

    },
    dialog: {
        width:'99%',
        height: 'auto'
    }

}
const heading = {
    height: '45px',

}
class AllStatusComponent extends Component {
    state = {
        open: false,
    };

    Details(keys) {
        this.setState({ open: true });
        // console.log('adsdasdas', keys);
        this.props.AllSatatusActionForComperison(keys);
        // console.log('temp obj', tempData)
    };

    handleClose = () => {
        this.setState({ open: false });
    };
    render() {
        const actions = [
            <FlatButton
                label="Cancel"
                primary={true}
                onTouchTap={this.handleClose}
            />,
        ];
        let AllStatusDispay = Object.keys(this.props.Status).map((key, index) => {
            let val = this.props.Status[key];
            let keys = key;
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
                                onClick={this.Details.bind(this, keys)}
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
                    <div>
                        <Dialog
                            title="Details"
                            actions={actions}
                            modal={false}
                            open={this.state.open}
                            onRequestClose={this.handleClose}
                            style={styles.dialog}
                        >
                            <AllDeatilsComponents />
                        </Dialog>
                    </div>
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
const mapDispatchToProps = (dispatch) => {
    return {

        AllSatatusActionForComperison: (keys) => {
            dispatch(AllSatatusActionForComperison(keys));
        }
    };
}
export default connect(mapStateToProps, mapDispatchToProps)(AllStatusComponent);