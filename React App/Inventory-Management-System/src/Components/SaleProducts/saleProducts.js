import React, { Component } from 'react';
import * as mat from 'material-ui';
import { connect } from 'react-redux';
import './style.css'
import { SaledProducts, ProductPrice, UpgradeProducts, LoaderAction } from '../../Actions/SalesActions';

const styles = {
    card: {
        width: '90%',
        height: 'auto',
        position: 'relative',
        top: '50px',
    },
    login: {
        textAlign: 'left',
    },
    title: {
        textAlign: 'left',
    },
}
class SaleProducts extends Component {
    constructor(props) {
        super(props);
        this.SaleProduct = this.SaleProduct.bind(this);
        this.ProductCheck = this.ProductCheck.bind(this);
        // this.QunatityCheck = this.QunatityCheck.bind(this);

        this.state = {
            saledData: "",

        }
    }

    ProductCheck() {
        var SelectedProduct = this.refs.store.value;
        // console.log("productName",product);
        this.props.ProductPrice(SelectedProduct);
    }
    componentWillReceiveProps(nextProps) {
        this.setState({
            saledData: nextProps.SelectPrice
        })
    }
    SaleProduct(ev) {
        ev.preventDefault()
        let productName = this.refs.store.value;
        let quantity = this.refs.quantity.value;
        let SaleDates = this.refs.dates.value;
        let retailPrice = this.state.saledData.retailPrice;
        let TotalPrice = this.refs.Tprice.value;

        let SalePro = {
            productName: productName,
            quantity: quantity,
            SaleDates: SaleDates,
            retailPrice: retailPrice,
            TotalPrice: TotalPrice,
            proKey: this.state.saledData.Prokey
        };
        // console.log("sales Data", SalePro);
        this.props.LoaderAction()
        this.props.SaledProducts(SalePro);
        let Objects = this.props.SelectPrice;
        this.props.UpgradeProducts(Objects, SalePro);
    }
    render() {
        let productNames = Object.keys(this.props.AllStores).map((key, index) => {
            let val = this.props.AllStores[key];
            // let IdKeys = key;
            // console.log(IdKeys);
            return (
                <option key={index}>{val.productName}</option>
            )
        })
        // console.log("Quantity--------------", this.props.SelectPrice)
        return (
            <div >
                <center>
                    <mat.Card className='card' zDepth={2}>
                        <mat.AppBar style={styles.title} title="Sale Product" showMenuIconButton={false} />
                        <mat.CardText>
                            <form style={styles.login}>
                                <div className="form-group " >
                                    <div className="form-group">
                                        <label htmlFor="store">Select Product</label>
                                        <select className="form-control" ref='store' onChange={this.ProductCheck} >
                                            <option >Select Product</option>
                                            {productNames}
                                        </select>
                                    </div>
                                </div>
                                <div className="form-group ">
                                    <label htmlFor="retailPrice">Retail Price</label>
                                    <input type="text" className="form-control"
                                        value={this.state.saledData.retailPrice} 
                                        disabled
                                    />
                                </div>
                                <div className="form-group ">
                                    <label htmlFor="quantity">Available Quantity</label>
                                    <input type="text" className="form-control"
                                        value={this.state.saledData.quantity} 
                                        disabled
                                    />
                                </div>
                                <div className="form-group ">
                                    <label htmlFor="quantity">Enter Quantity</label>
                                    <input type="number" className="form-control"
                                        onChange={this.QunatityCheck} ref="quantity" placeholder="Enter quantity"
                                    />
                                </div>
                                <div className="form-group ">
                                    <label htmlFor="quantity">Sale Date</label>
                                    <input type="date" className="form-control" ref="dates" />
                                </div>
                               
                                <div className="form-group">
                                    <label htmlFor="Tprice">Total Price</label>
                                    <input type="number" className="form-control" ref="Tprice" placeholder="Enter total price" />
                                </div>
                                <div className="form-group text-right">
                                    <mat.RaisedButton label="Sale Now" primary={true} onClick={this.SaleProduct}/>
                                </div>

                            </form>
                        </mat.CardText>
                    </mat.Card>
                </center>
            </div>
        );
    }
}


const mapStateToProps = (state) => {
    return {
        AllStores: state.SalesReducers.SalesArray,
        SelectPrice: state.SalesReducers.SelectedArray
    };
}
const mapDispatchToProps = (dispatch) => {
    return {
        LoaderAction: () => {
            dispatch(LoaderAction());
        },
        SaledProducts: (SalePro) => {
            dispatch(SaledProducts(SalePro));
        },
        ProductPrice: (SelectedProduct) => {
            dispatch(ProductPrice(SelectedProduct));
        },
        UpgradeProducts: (Objects, SalePro) => {
            dispatch(UpgradeProducts(Objects, SalePro));
        }
    };
}
export default connect(mapStateToProps, mapDispatchToProps)(SaleProducts);