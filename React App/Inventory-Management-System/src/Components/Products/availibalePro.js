import React, { Component } from 'react';
import * as mat from 'material-ui';
import { connect } from 'react-redux';


class AvailibaleProducts extends Component {

    render() {

        // console.log("AllAvailibale", this.props.Products)
        let Header = () => {
            return (
                <div>
                    <mat.Table>
                        <mat.TableHeader>
                            <mat.TableRow>
                                <mat.TableHeaderColumn>Product Name</mat.TableHeaderColumn>
                                <mat.TableHeaderColumn>Quantity</mat.TableHeaderColumn>
                                <mat.TableHeaderColumn>Purchase Date</mat.TableHeaderColumn>
                                <mat.TableHeaderColumn>Manufactur</mat.TableHeaderColumn>
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
                        <mat.Table key={i}>
                            <mat.TableBody >
                                <mat.TableRow>
                                    <mat.TableRowColumn>{v.productName}</mat.TableRowColumn>
                                    <mat.TableRowColumn>{v.quantity}</mat.TableRowColumn>
                                    <mat.TableRowColumn>{v.dates}</mat.TableRowColumn>
                                    <mat.TableRowColumn>{v.manufacturer}</mat.TableRowColumn>
                                </mat.TableRow>
                            </mat.TableBody>
                        </mat.Table>
                    )
                }
                )}
            </div>
        );
    }
}
const mapStateToProps = (state) => {
    return {
        Products: state.ProductsReducers.ProductsArray,
    };
}
// const mapDispatchToProps = (dispatch) => {
//     return {
//         AddProdutsAction: (addProducts) => {
//             dispatch(AddProdutsAction(addProducts));
//         }
//     };
// }
export default connect(mapStateToProps)(AvailibaleProducts);
// export default AvailibaleProducts;