import React, { Component } from 'react';
import * as mat from 'material-ui';
import { connect } from 'react-redux';

const styles = {
    Assignment: {
        // color: '#ff5722',
        // backgroundColor: '#d9d9d9',
    },
    heading: {
        // color: '#ff5722',
        fontSize: '1em'
    },

}

class AvailibaleProducts extends Component {

    render() {

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
                        <mat.Table style={styles.Assignment} key={i}>
                            <mat.TableBody >
                                <mat.TableRow>
                                    <mat.TableRowColumn style={styles.heading}>{v.productName}</mat.TableRowColumn>
                                    <mat.TableRowColumn style={styles.heading}>{v.quantity}</mat.TableRowColumn>
                                    <mat.TableRowColumn style={styles.heading}>{v.dates}</mat.TableRowColumn>
                                    <mat.TableRowColumn style={styles.heading}>{v.manufacturer}</mat.TableRowColumn>
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