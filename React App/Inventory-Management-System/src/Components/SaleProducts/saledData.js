
import React, { Component } from 'react';
import * as mat from 'material-ui';
import { connect } from 'react-redux';
import FaTrashO from 'react-icons/lib/fa/trash-o';
import { DeleteSalesProduct, DeleteKeys } from '../../Actions/deleteActions';

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
        // color: '#ff5722',
        // backgroundColor: '#d9d9d9',
    },
    card: {
        width: '90%',
        height: 'auto',
        position: 'relative',
        top: '50px'
    },
    store: {
        textAlign: 'left'
    },
    heading: {
        // color: '#ff5722',
        fontSize: '1em'
    },
    delete: {
        fontSize: '1.7em',
        cursor: 'pointer',
    },
}

class SaledDetails extends Component {

    state = {
        open: false,
    };

    Delete = (keys) => {
        this.setState({ open: true });
        // console.log("Delete Product ", keys)
        this.props.DeleteKeys(keys);
    };
    deleteStore = () => {
        var key = this.props.deleteKey;
        // console.log("delete confirm",key)
        this.props.DeleteSalesProduct(key);
        this.setState({ open: false });
    };
    handleClose = () => {
        this.setState({ open: false });
    };
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
        let Header = () => {
            return (
                <div>
                    <mat.Table style={styles.Assignment}>
                        <mat.TableHeader>
                            <mat.TableRow>
                                <mat.TableHeaderColumn style={styles.heading}>Product Name</mat.TableHeaderColumn>
                                <mat.TableHeaderColumn style={styles.heading}>Quantity</mat.TableHeaderColumn>
                                <mat.TableHeaderColumn style={styles.heading}>Sales Date</mat.TableHeaderColumn>
                                <mat.TableHeaderColumn style={styles.heading}>Total Price</mat.TableHeaderColumn>
                                <mat.TableHeaderColumn style={styles.heading}>Delete</mat.TableHeaderColumn>
                            </mat.TableRow>
                        </mat.TableHeader>
                    </mat.Table>
                </div>
            )
        };
        // console.log("AllAvailibale", this.props.Products)
        let SalesDetails = Object.keys(this.props.List).map((key, index) => {
            let val = this.props.List[key];
            let keys = key;
            return (
                <mat.Table style={styles.Assignment} key={index}>
                    <mat.TableBody >
                        <mat.TableRow>
                            <mat.TableRowColumn style={styles.heading}>{val.productName}</mat.TableRowColumn>
                            <mat.TableRowColumn style={styles.heading}>{val.quantity}</mat.TableRowColumn>
                            <mat.TableRowColumn style={styles.heading}>{val.SaleDates}</mat.TableRowColumn>
                            <mat.TableRowColumn style={styles.heading}>{val.TotalPrice}</mat.TableRowColumn>
                            <mat.TableRowColumn style={styles.heading}>
                                <FaTrashO style={styles.delete} onClick={this.Delete.bind(this, keys)} />
                            </mat.TableRowColumn>
                        </mat.TableRow>
                    </mat.TableBody>
                </mat.Table>
            )
        })

        return (
            <div>
                <center>
                    <mat.Card style={styles.card} zDepth={2}>
                        <mat.AppBar style={styles.store} title="Sales Products" showMenuIconButton={false} />
                        <mat.CardText>
                            <Header />
                            {SalesDetails}
                        </mat.CardText>
                    </mat.Card>
                </center>
                <div>
                    <mat.Dialog
                        title="Warning.!"
                        actions={actions}
                        modal={false}
                        open={this.state.open}
                        onRequestClose={this.handleClose}
                    >
                        <center>
                            <p>Are you sure want to Delete</p>
                        </center>
                    </mat.Dialog>
                </div>
            </div>
        );
    }
}
const mapStateToProps = (state) => {
    return {
        List: state.SalesReducers.SaledList,
        deleteKey: state.DeleteReducers.deleteKeys,
    };
}
const mapDispatchToProps = (dispatch) => {
    return {
        DeleteKeys: (keys) => {
            dispatch(DeleteKeys(keys))
        },
        DeleteSalesProduct: (key) => {
            dispatch(DeleteSalesProduct(key));
        }
    };
}
export default connect(mapStateToProps, mapDispatchToProps)(SaledDetails);