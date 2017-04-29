import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as mat from 'material-ui';
import ContentAdd from 'material-ui/svg-icons/content/add';
import { AddProdutsAction } from '../../Actions/newStoreAction';
import AvailibaleProducts from '../Products/availibalePro';
// import FaRepeat from 'react-icons/lib/fa/repeat';

const styles = {
    dialog: {
        width: '100%',
        height: 'auto'
    },
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
    // Assignment: {
    //     backgroundColor: '#e5d6b3'
    // },
    card: {
        width: '90%',
        height: 'auto',
        position: 'relative',
        top: '50px'
    },
    store: {
        textAlign: 'left',
        // backgroundColor: '#00d084',
    },
    refresh: {
        // backgroundColor: '#ff6900',
        marginRight: 10,
        marginTop: 5,
    }

}
const style = {
    marginRight: 10,
    marginTop: 5,
};

class MyStore extends Component {
    state = {
        open: false,
    };

    constructor(props) {
        super(props);
        this.NewProduct = this.NewProduct.bind(this);
    }
    NewProduct(ev) {
        ev.preventDefault();
        let productName = this.refs.productName.value;
        let manufacturer = this.refs.manufacturer.value;
        let description = this.refs.description.value;
        let quantity = this.refs.quantity.value;
        let dates = this.refs.dates.value;
        let price = this.refs.price.value;
        let StoreKey = this.props.StoreDash.objKey;

        let addProducts = {
            productName: productName,
            manufacturer: manufacturer,
            description: description,
            quantity: quantity,
            dates: dates,
            price: price,
            StoreKey: StoreKey
        };
        // console.log(addProducts);
        this.props.AddProdutsAction(addProducts);

        this.setState({ open: false });
    }
    newProduct(keys) {
        this.setState({ open: true });
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
        ];
        // console.log("Store data StoreDash", this.props.StoreDash.objKey)
        return (
            <div>
                <center>
                    <mat.Card style={styles.card} zDepth={2}>
                        <mat.AppBar
                            style={styles.store}
                            title={this.props.StoreDash.storeName}
                            showMenuIconButton={false}
                            iconElementRight={
                                <div>
                                    <mat.FloatingActionButton onClick={this.newProduct.bind(this)} mini={true} secondary={true} style={style}>
                                        <ContentAdd />
                                    </mat.FloatingActionButton>
                                    {/*<mat.FloatingActionButton id="demo"  mini={true} style={styles.refresh}>
                                        <FaRepeat />
                                    </mat.FloatingActionButton>*/}
                                </div>
                            }
                        />
                        <mat.CardText style={styles.Assignment}>
                            <AvailibaleProducts />
                        </mat.CardText>
                    </mat.Card>
                    <div>
                        <mat.Dialog
                            title="Add New Products"
                            actions={actions}
                            modal={false}
                            open={this.state.open}
                            onRequestClose={this.handleClose}
                            style={styles.dialog}
                            autoScrollBodyContent={true}
                        >
                            <form onSubmit={this.NewProduct} >
                                <div className="form-group " >
                                    <label htmlFor="product">Product name</label>
                                    <input type="text" className="form-control" ref="productName" placeholder="Write Product Name" />
                                </div>
                                <div className="form-group ">
                                    <label htmlFor="manufacturer">Manufacture By</label>
                                    <input type="text" className="form-control" ref="manufacturer" placeholder="Write Manufacture compnay" />
                                </div>
                                <div className="form-group ">
                                    <label htmlFor="description">Description</label>
                                    <input type="text" className="form-control" ref="description" placeholder="Write description about product" />
                                </div>
                                <div className="form-group ">
                                    <label htmlFor="quantity">Product Quantity</label>
                                    <input type="number" className="form-control" ref="quantity" />
                                </div>
                                <div className="form-group ">
                                    <label htmlFor="quantity">Purchasing Date</label>
                                    <input type="date" className="form-control" ref="dates" />
                                </div>
                                <div className="form-group ">
                                    <label htmlFor="price">Unit Price</label>
                                    <input type="number" className="form-control" ref="price" />
                                </div>
                                <div className="form-group ">
                                    <mat.RaisedButton type="submit" label="Add Product" primary={true} />
                                </div>
                            </form>
                        </mat.Dialog>
                    </div>
                </center>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        StoreDash: state.StoreReducers.StoreKeys,
    };
}
const mapDispatchToProps = (dispatch) => {
    return {
        AddProdutsAction: (addProducts) => {
            dispatch(AddProdutsAction(addProducts));
        }
    };
}
export default connect(mapStateToProps, mapDispatchToProps)(MyStore);

