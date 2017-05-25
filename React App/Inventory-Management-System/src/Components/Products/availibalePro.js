import React, { Component } from 'react';
import * as mat from 'material-ui';
import { connect } from 'react-redux';
import FaTrashO from 'react-icons/lib/fa/trash-o';
import FaEdit from 'react-icons/lib/fa/edit';
import { DeleteProduct, DeleteKeys } from '../../Actions/deleteActions';
import { EditProduct, UpdateEditProduct } from '../../Actions/EditActions'

const styles = {
    Assignment: {
        // color: '#ff5722',
        // backgroundColor: '#d9d9d9',
    },
    delete: {
        fontSize: '1.7em',
        cursor: 'pointer',
        marginRight: '20px',
    },
    heading: {
        // color: '#ff5722',
        fontSize: '1em'
    },

}

class AvailibaleProducts extends Component {
    constructor(props) {
        super(props);
        this.ProductUpdate = this.ProductUpdate.bind(this);
    }
    state = {
        Warning: false,
        edit: false,
    };

    Delete = (keys) => {
        this.setState({ Warning: true });
        // console.log("Delete Product ", keys)
        this.props.DeleteKeys(keys);
    };
    deleteStore = () => {
        var key = this.props.deleteKey;
        // console.log("delete confirm",key)
        // this.props.LoaderAction();
        this.props.DeleteProduct(key);
        this.setState({ Warning: false });
    };
    handleClose = () => {
        this.setState({ Warning: false });
        // this.props.LoaderAction()
    };

    Edit = (keys) => {
        this.setState({ edit: true });
        // console.log("Edit Product ", keys)  
        this.props.EditProduct(keys);
    };
    ProductUpdate(ev) {
        ev.preventDefault();
        let productName = this.refs.productName.value;
        let manufacturer = this.refs.manufacturer.value;
        let description = this.refs.description.value;
        let quantity = this.refs.quantity.value;
        let dates = this.refs.dates.value;
        let price = this.refs.price.value;
        let Prokey = this.props.ForEdit.ProKey;
        let StoreKey = this.props.ForEdit.StoreKey;
        let uId = this.props.ForEdit.uId;

        let UpdateProduct = {
            productName: productName,
            manufacturer: manufacturer,
            description: description,
            quantity: quantity,
            dates: dates,
            price: price,
            Prokey: Prokey,
            StoreKey: StoreKey,
            uId: uId,
        };
        // console.log(UpdateProduct);
        // this.props.LoaderAction()
        this.props.UpdateEditProduct(UpdateProduct);
        this.setState({ edit: false });
    }
    handleClose2 = () => {
        this.setState({ edit: false });
        // this.props.LoaderAction()
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
        const EditActions = [
            <mat.FlatButton
                label="Cancel"
                primary={true}
                onTouchTap={this.handleClose2}
            />
        ];
        let Edited = this.props.ForEdit;
        // console.log("AllAvailibale", this.props.Products)
        let Header = () => {
            return (
                <div>
                    <mat.Table style={styles.Assignment}>
                        <mat.TableHeader>
                            <mat.TableRow>
                                <mat.TableHeaderColumn style={styles.heading}>Product Name</mat.TableHeaderColumn>
                                <mat.TableHeaderColumn style={styles.heading}>Quantity</mat.TableHeaderColumn>
                                <mat.TableHeaderColumn style={styles.heading}>Purchase Date</mat.TableHeaderColumn>
                                <mat.TableHeaderColumn style={styles.heading}>Manufactur</mat.TableHeaderColumn>
                                <mat.TableHeaderColumn style={styles.heading}>Options</mat.TableHeaderColumn>
                            </mat.TableRow>
                        </mat.TableHeader>
                    </mat.Table>
                </div>
            )
        };

        return (
            <div>
                <Header />
                {this.props.Products.map((v, i) => {
                    return (
                        <mat.Table style={styles.Assignment} key={i} autoScrollBodyContent={true}>
                            <mat.TableBody >
                                <mat.TableRow>
                                    <mat.TableRowColumn style={styles.heading}>{v.productName}</mat.TableRowColumn>
                                    <mat.TableRowColumn style={styles.heading}>{v.quantity}</mat.TableRowColumn>
                                    <mat.TableRowColumn style={styles.heading}>{v.dates}</mat.TableRowColumn>
                                    <mat.TableRowColumn style={styles.heading}>{v.manufacturer}</mat.TableRowColumn>
                                    <mat.TableRowColumn style={styles.heading}>
                                        <FaTrashO
                                            style={styles.delete}
                                            onClick={this.Delete.bind(this, v.prokey)}
                                        />
                                        <FaEdit
                                            style={styles.delete}
                                            onClick={this.Edit.bind(this, v.prokey)}
                                        />
                                    </mat.TableRowColumn>
                                </mat.TableRow>
                            </mat.TableBody>
                        </mat.Table>
                    )
                }
                )}
                <div>
                    <mat.Dialog
                        title="Warning.!"
                        actions={actions}
                        modal={false}
                        open={this.state.Warning}
                        onRequestClose={this.handleClose}
                    >
                        <center>
                            <p>Are you sure want to Delete</p>
                        </center>
                    </mat.Dialog>
                </div>
                <div>
                    <mat.Dialog
                        title="Edit Product"
                        actions={EditActions}
                        modal={false}
                        open={this.state.edit}
                        onRequestClose={this.handleClose2}
                        style={styles.dialog}
                        autoScrollBodyContent={true}
                    >
                        <form onSubmit={this.ProductUpdate} >
                            <div className="form-group " >
                                <label htmlFor="product">Product name</label>
                                <input type="text" className="form-control"
                                    ref="productName" placeholder="Write Product Name"
                                    defaultValue={Edited.productName}
                                />
                            </div>
                            <div className="form-group ">
                                <label htmlFor="manufacturer">Manufacture By</label>
                                <input type="text" className="form-control"
                                    ref="manufacturer" placeholder="Write Manufacture compnay"
                                    defaultValue={Edited.manufacturer}
                                />
                            </div>
                            <div className="form-group ">
                                <label htmlFor="description">Description</label>
                                <input type="text" className="form-control"
                                    ref="description" placeholder="Write description about product"
                                    defaultValue={Edited.description}
                                />
                            </div>
                            <div className="form-group ">
                                <label htmlFor="quantity">Product Quantity</label>
                                <input type="number" className="form-control" ref="quantity"
                                    defaultValue={Edited.quantity}
                                />
                            </div>
                            <div className="form-group ">
                                <label htmlFor="quantity">Purchasing Date</label>
                                <input type="date" className="form-control" ref="dates"
                                    defaultValue={Edited.dates}
                                />
                            </div>
                            <div className="form-group ">
                                <label htmlFor="price">Unit Price</label>
                                <input type="number" className="form-control" ref="price"
                                    defaultValue={Edited.price}
                                />
                            </div>
                            <div className="form-group ">
                                <mat.RaisedButton type="submit" label="Update Product" primary={true} />
                            </div>
                        </form>
                    </mat.Dialog>
                </div>
            </div>
        );
    }
}
const mapStateToProps = (state) => {
    return {
        Products: state.ProductsReducers.ProductsArray,
        deleteKey: state.DeleteReducers.deleteKeys,
        ForEdit: state.EditReducers.EditSelectedProduct
    };
}
const mapDispatchToProps = (dispatch) => {
    return {
        DeleteProduct: (keys) => {
            dispatch(DeleteProduct(keys));
        },
        DeleteKeys: (keys) => {
            dispatch(DeleteKeys(keys))
        },
        EditProduct: (keys) => {
            dispatch(EditProduct(keys))
        },
        UpdateEditProduct: (UpdateProduct) => {
            dispatch(UpdateEditProduct(UpdateProduct))
        },
        // LoaderAction: () => {
        //     dispatch(LoaderAction());
        // }
    };
}
export default connect(mapStateToProps, mapDispatchToProps)(AvailibaleProducts);
// export default AvailibaleProducts;