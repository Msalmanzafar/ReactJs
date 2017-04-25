import React, { Component } from 'react';
import * as mat from 'material-ui';
import { connect } from 'react-redux';


const styles = {
    card: {
        width: '90%',
        height: 'auto',
        position: 'relative',
        top: '50px',
        // backgroundColor: '#d2b48c'
    },
    login: {
        textAlign: 'left',
    },
    title: {
        textAlign: 'left',
        // backgroundColor: '#8b4513'
    },
    // input: {
    //     backgroundColor: '#f4a460'
    // }
}
class SaleProducts extends Component {
    render() {
        // let array = [1, 2, 31, 21, 21];
        let Options = Object.keys(this.props.AllStores).map((key, index) => {
            let val = this.props.AllStores[key];
            // let keys = key;
            return (
                <option key={index}>{val.productName}</option>
            )
        })
        console.log("Sales", this.props.AllStores)
        return (
            <div >
                <center>
                    <mat.Card style={styles.card} zDepth={2}>
                        <mat.AppBar style={styles.title} title="Sale Product" showMenuIconButton={false} />
                        <mat.CardText>
                            <form onSubmit={this.SaleProduct} style={styles.login}>
                                <div className="form-group " >
                                    <div className="form-group">
                                        <label htmlFor="store">Select Product</label>
                                        <select className="form-control" ref='store' >
                                            {Options}
                                        </select>
                                    </div>
                                </div>
                                <div className="form-group ">
                                    <label htmlFor="quantity">Enter Quantity</label>
                                    <input type="number" className="form-control" ref="quantity" placeholder="Enter quantity" />
                                </div>
                                <div className="form-group ">
                                    <label htmlFor="quantity">Sale Date</label>
                                    <input type="date" className="form-control" ref="dates" />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="price">Unit Price</label>
                                    <input type="number" className="form-control" ref="price" placeholder="Enter piece price"/>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="Tprice">Total Price</label>
                                    <input type="number" className="form-control" ref="Tprice" placeholder="Enter total price"/>
                                </div>
                                <div className="form-group ">
                                    <mat.RaisedButton type="submit" label="Sale Now" primary={true} />
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
        AllStores: state.SalesReducers.SalesArray
    };
}
// const mapDispatchToProps = (dispatch) => {
//   return {
//     AvailibaleActions: () => {
//       dispatch(AvailibaleActions())
//     },
//   };
// }
export default connect(mapStateToProps)(SaleProducts);