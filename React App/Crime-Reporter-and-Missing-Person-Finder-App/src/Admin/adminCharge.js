import React, { Component } from 'react';
import { connect } from 'react-redux';
import Avatar from 'material-ui/Avatar';
import List from 'material-ui/List/List';
import ListItem from 'material-ui/List/ListItem';
import Paper from 'material-ui/Paper';
import FlatButton from 'material-ui/FlatButton';
import AllDeatilsReport from './detailBox'
import Dialog from 'material-ui/Dialog';
// import {tempDataAction} from '../action/firebaseData'


const style = {
    height: 100,
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
        color: '#74847c'
    },
    customWidth: {
        width: 90,
    },

}
const heading = {
    height: '45px',

}


class AllStatusForAdmin extends Component {
    state = {
        open: false,
    };    
    constructor(props) {
        super(props);
    }
    Details(val){
        this.setState({ open: true });
         console.log('adsdasdas',val);
         let tempData={
             email: val.email,
             type: val.crimeType
         }
        //  this.props.tempDataAction(tempData);
        //  console.log('temp obj', tempData)
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
            <FlatButton
                label="Save"
                primary={true}
                keyboardFocused={true}
                onTouchTap={this.handleClose}
            />,
        ];
        // let keys = Object.keys(this.props.Status);
        
        let adminAlldata = Object.keys(this.props.Status).map((key, index) => {
            let val = this.props.Status[key];
            // console.log('All key', index);
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
                            <span style={styles.status}>{val.status}</span>
                            <span style={styles.email}>{val.emailId}</span><br />
                            <FlatButton
                                label="Details"
                                style={styles.FlatButton}
                                onClick={this.Details.bind(this,val)}
                            />
                        </ListItem>
                    </List>
                </Paper>
            )
        })
        // console.log('All status',this.props.Status);
        // console.log('All status', this.props.keys);
        return (
            <div>
                <center>
                    <h3 style={heading}>All Status for Admin</h3>
                    {adminAlldata}
                    <div>
                        <Dialog
                            title="Details"
                            actions={actions}
                            modal={false}
                            open={this.state.open}
                            onRequestClose={this.handleClose}
                        >
                            <AllDeatilsReport/>
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
// const mapDispatchToProps =(dispatch) =>{
//     return{
//         tempDataAction: (tempData) =>{
//             dispatch(tempDataAction(tempData));
//         }
//     };
// }
export default connect(mapStateToProps)(AllStatusForAdmin);