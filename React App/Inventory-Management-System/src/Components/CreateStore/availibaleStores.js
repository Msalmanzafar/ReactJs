import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as mat from 'material-ui';
import ActionAssignment from 'material-ui/svg-icons/action/assignment';
import {OpenStore} from '../../Actions/newStoreAction';
import {ProductsAction} from '../../Actions/ProductsActions'

const style = {
    height: 'auto',
    width: '90%',
    margin: '20px',
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
    Assignment: {
        backgroundColor: 'blue'
    },
    card: {
        width: '90%',
        height: 'auto',
        position: 'relative',
        top: '50px'
    },
    store: {
        textAlign: 'left'
    }

}
// const heading = {
//     height: '45px',

// }
class AvailibaleStores extends Component {
    
    OpenStore(keys) {
        // console.log("open store val", keys)
        this.props.OpenStore(keys);
        this.props.ProductsAction(keys);
    }
    render() {
        let AllStatusDispay = Object.keys(this.props.AvailStatus).map((key, index) => {
            let val = this.props.AvailStatus[key];
            let keys = key;
            return (
                <mat.Paper style={style} zDepth={1} key={index} >
                    <mat.List >
                        <mat.ListItem
                            disabled={true}
                            leftAvatar={
                                <mat.Avatar icon={<ActionAssignment />} style={styles.Assignment} />
                            }
                        >
                            <span ><b>{val.storeName}</b></span><br /><br />
                            <span >{val.location}</span>

                            <mat.FlatButton
                                label="Open"
                                onClick={this.OpenStore.bind(this, keys)}
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
                    {/*<h3 style={heading}></h3>*/}
                    <mat.Card style={styles.card} zDepth={2}>
                        <mat.AppBar style={styles.store} title="Availibale Stores" showMenuIconButton={false} />
                        <mat.CardText>
                            {AllStatusDispay}
                        </mat.CardText>
                    </mat.Card>
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
const mapDispatchToProps = (dispatch) => {
  return {
    OpenStore: (keys) => {
      dispatch(OpenStore(keys))
    },
    ProductsAction: (keys) => {
      dispatch(ProductsAction(keys))
    },
  };
}
export default connect(mapStateToProps,mapDispatchToProps)(AvailibaleStores);