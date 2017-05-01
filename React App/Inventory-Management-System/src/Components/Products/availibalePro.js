import React, { Component } from 'react';
import * as mat from 'material-ui';
import { connect } from 'react-redux';
import FaTrashO from 'react-icons/lib/fa/trash-o';
import {DeleteProduct} from '../../Actions/deleteActions';


const styles = {
    Assignment: {
        // color: '#ff5722',
        // backgroundColor: '#d9d9d9',
    },
    delete:{
        fontSize: '1.7em',
        cursor: 'pointer',
    },
    heading: {
        // color: '#ff5722',
        fontSize: '1em'
    },

}

class AvailibaleProducts extends Component {
    Delete(keys){
        // console.log("------",keys);
        this.props.DeleteProduct(keys);
    }
    
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
                                <mat.TableHeaderColumn style={styles.heading}>Delete</mat.TableHeaderColumn>                            
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
                                    <mat.TableRowColumn style={styles.heading}>
                                        <FaTrashO style={styles.delete} onClick={this.Delete.bind(this,v.prokey)}/>
                                    </mat.TableRowColumn>
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
const mapDispatchToProps = (dispatch) => {
    return {
        DeleteProduct: (keys) => {
            dispatch(DeleteProduct(keys));
        }
    };
}
export default connect(mapStateToProps,mapDispatchToProps)(AvailibaleProducts);
// export default AvailibaleProducts;