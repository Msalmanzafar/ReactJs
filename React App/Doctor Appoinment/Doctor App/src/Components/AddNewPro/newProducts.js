import React, { Component } from 'react';
import * as mat from 'material-ui';
import { AddProdutsAction } from '../../Actions/newStoreAction';
import {connect} from 'react-redux';

const styles = {
    card: {
        width: '65%',
        height: 'auto',
        position: 'relative',
        top: '50px'
    },
    store: {
        textAlign: 'left'
    }
}


class newProductsStore extends Component {
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

        let addProducts = {
            productName: productName,
            manufacturer: manufacturer,
            description: description,
            quantity: quantity
        };
         console.log(addProducts);
        // this.props.AddProdutsAction(addProducts);

        productName = this.refs.productName.value="";
        manufacturer = this.refs.manufacturer.value="";
        description = this.refs.description.value="";
        quantity = this.refs.quantity.value="";
    }
    render() {
        return (
            <div>
                <center>
                    <mat.Card style={styles.card} zDepth={2}>
                        <mat.AppBar style={styles.store} title="Create Store" showMenuIconButton={false} />
                        <mat.CardText>
                            <form onSubmit={this.NewProduct} style={styles.store}>
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
                                    <button type="submit" className="btn btn-info custom-button">Add Product</button>
                                </div>
                            </form>
                        </mat.CardText>
                    </mat.Card>
                </center>
            </div>
        )
    }
}


const mapStateToProps = (state) => {
    return {
        productState: state.StoreReducers
    };
}
const mapDispatchToProps = (dispatch) => {
    return {
        ProdutsAction: (addProducts) => {
            dispatch(AddProdutsAction(addProducts));
        }
    };
}
export default connect(mapStateToProps,mapDispatchToProps)(newProductsStore);
// export default newProductsStore;