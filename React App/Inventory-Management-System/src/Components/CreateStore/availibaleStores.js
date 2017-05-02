import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as mat from 'material-ui';
import ActionAssignment from 'material-ui/svg-icons/action/assignment';
import { OpenStore } from '../../Actions/newStoreAction';
import { ProductsAction } from '../../Actions/ProductsActions'
import { DeleteStores, DeleteKeys } from '../../Actions/deleteActions';
import {AvailibaleActions} from '../../Actions/newStoreAction';

const style = {
    height: 'auto',
    width: '90%',
    margin: '20px',
    paddingBottom: '15px',
    textAlign: 'left',
    display: 'block',
    marginTop: '-10px',
    backgroundColor: '#d9d9d9',
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
        backgroundColor: '#1273de'
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
    state = {
        open: false,
    };

    handleOpen = (keys) => {
        this.setState({ open: true });
        // console.log("Delete store ", keys)
        this.props.DeleteKeys(keys);
    };
    deleteStore = () => {
        var key = this.props.deleteKey;
        this.props.DeleteStores(key);
        // console.log("delete confirm",key)
        this.setState({ open: false });
        this.props.AvailibaleActions();
        let keys = '';
        this.props.DeleteKeys(keys);
    };
    handleClose = () => {
        this.setState({ open: false });
    };
    OpenStore(keys) {
        // console.log("open store val", keys)
        this.props.OpenStore(keys);
        this.props.ProductsAction(keys);
    }
    render() {
        const actions = [
            <mat.FlatButton
                label="Cancel"
                primary={true}
                onTouchTap={this.handleClose}
            />,
            <mat.FlatButton
                label="Yes"
                primary={true}
                keyboardFocused={true}
                onTouchTap={this.deleteStore}
            />,
        ];
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
                            <span ><b>{val.storeName}</b></span><br />
                            <span >{val.location}</span><br /><br />

                            <mat.FlatButton
                                label="Delete"
                                onClick={this.handleOpen.bind(this, keys)}
                                style={styles.FlatButton}
                            />
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

                    <div>
                        <mat.Dialog
                            title="Warning.!"
                            actions={actions}
                            modal={false}
                            open={this.state.open}
                            onRequestClose={this.handleClose}
                            
                        >
                            <center>
                                <p>First you need to Delete All Prducts then delete Store</p>
                            </center>
                        </mat.Dialog>
                    </div>
                </center>
            </div>
        );
    }
}
const mapStateToProps = (state) => {
    return {
        AvailStatus: state.StoreReducers.availibaleStoresArray,
        deleteKey: state.DeleteReducers.deleteKeys
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
        DeleteKeys: (keys) => {
            dispatch(DeleteKeys(keys))
        },
        DeleteStores: (key) => {
            dispatch(DeleteStores(key))
        },
        AvailibaleActions: () => {
            dispatch(AvailibaleActions())
        },
    };
}
export default connect(mapStateToProps, mapDispatchToProps)(AvailibaleStores);