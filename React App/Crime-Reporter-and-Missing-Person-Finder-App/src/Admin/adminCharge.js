import React, { Component } from 'react';
import { connect } from 'react-redux';
import Avatar from 'material-ui/Avatar';
import List from 'material-ui/List/List';
import ListItem from 'material-ui/List/ListItem';
import Paper from 'material-ui/Paper';
import FlatButton from 'material-ui/FlatButton';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';

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
        float: 'right',
    },
    email: {
        color: '#74847c'
    },
    status: {
        float: 'right',
        color: '#74847c'
    },
    customWidth: {
    width: 135,
  },

}
const heading = {
    height: '45px',

}


class AllStatusForAdmin extends Component {
    state = {
        value: 1,
    };

    handleChange = (event, index, value) => this.setState({ value });
    render() {
        // console.log('All status',this.props.Status);
        return (
            <div>
                <center>
                    <h3 style={heading}>All Status for Admin</h3>

                    {this.props.Status.map((v, i) => {
                        return (
                            <Paper style={style} zDepth={1} key={i} >
                                <List >
                                    <ListItem
                                        disabled={true}
                                        leftAvatar={
                                            <Avatar src="" />
                                        }
                                    >
                                        <span ><b>{v.name}</b></span>
                                        <span style={styles.status}>{v.crimeType}</span><br />
                                        <SelectField
                                            style={styles.customWidth}
                                            value={this.state.value}
                                            onChange={this.handleChange}
                                        >
                                            <MenuItem value={1} primaryText={v.status} />
                                            <MenuItem value={2} primaryText="Approved" />
                                        </SelectField>
                                        <span style={styles.email}>{v.email}</span>
                                        <FlatButton
                                            label="Details"
                                            onClick={this.handleClose}
                                            style={styles.FlatButton}
                                        />
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
        Status: state.StatusReducer.AllStatus
    };
}
export default connect(mapStateToProps)(AllStatusForAdmin);