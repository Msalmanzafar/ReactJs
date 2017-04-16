import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as mat from 'material-ui';
import ActionAssignment from 'material-ui/svg-icons/action/assignment';

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
    },
    Assignment:{
        backgroundColor: 'blue'
    }


}
const heading = {
    height: '45px',

}
class AvailibaleStores extends Component {
    // constructor(props){
    //     super(props);
    //     // this.OpenStore = this.OpenStore.bind(this);
    // }
    OpenStore(val){
        console.log("open store val",val)
        // console.log("open store ev",ev)
        
    }
    render() {
        let AllStatusDispay = Object.keys(this.props.AvailStatus).map((key, index) => {
            let val = this.props.AvailStatus[key];
            return (
                <mat.Paper style={style} zDepth={1} key={index} >
                    <mat.List >
                        <mat.ListItem
                            disabled={true}
                            leftAvatar={
                                <mat.Avatar icon={<ActionAssignment />} style={styles.Assignment} />
                            }
                        >
                            <span ><b>{val.storeName}</b></span><br/><br/>
                            <span >{val.location}</span>
                            
                            <mat.FlatButton
                                label="Open"
                                onClick={this.OpenStore.bind(this,val)}
                                style={styles.FlatButton}
                            />
                        </mat.ListItem>
                    </mat.List>
                </mat.Paper>
            )
        })
        // console.log('All status',this.props.Status);
        return (
            <div>
                <center>
                    <h3 style={heading}>Availibale Stores</h3>
                    {AllStatusDispay}
                </center>
            </div>
        );
    }
}
const mapStateToProps = (state) => {
    return {
        AvailStatus: state.StoreReducers.availibaleStoresArray
    };
}
export default connect(mapStateToProps)(AvailibaleStores);