

import React, { Component } from 'react';
import * as mat from 'material-ui';
import { connect } from 'react-redux';

// const style = {
//     height: 'auto',
//     width: '90%',
//     margin: '20px',
//     textAlign: 'left',
//     display: 'inline-block',
//     marginTop: '-15px'
// };
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
    //  Assignment: {
    //     color: '#ff5722',
    //     backgroundColor: '#d9d9d9',
    // },
}

class SaledDetails extends Component {

    render() {
        let Header = () => {
            return (
                <div>
                    <mat.Table style={styles.Assignment}>
                        <mat.TableHeader>
                            <mat.TableRow>
                                <mat.TableHeaderColumn style={styles.heading}>Product Name</mat.TableHeaderColumn>
                                <mat.TableHeaderColumn style={styles.heading}>Quantity</mat.TableHeaderColumn>
                                <mat.TableHeaderColumn style={styles.heading}>Sales Date</mat.TableHeaderColumn>
                                <mat.TableHeaderColumn style={styles.heading}>Manufactur</mat.TableHeaderColumn>
                            </mat.TableRow>
                        </mat.TableHeader>
                    </mat.Table>
                </div>
            )
        };
        // console.log("AllAvailibale", this.props.Products)
        let SalesDetails = Object.keys(this.props.List).map((key, index) => {
            let val = this.props.List[key];
            return (
                <mat.Table style={styles.Assignment} key={index}>
                    <mat.TableBody >
                        <mat.TableRow>
                            <mat.TableRowColumn style={styles.heading}>{val.productName}</mat.TableRowColumn>
                            <mat.TableRowColumn style={styles.heading}>{val.quantity}</mat.TableRowColumn>
                            <mat.TableRowColumn style={styles.heading}>{val.SaleDates}</mat.TableRowColumn>
                            <mat.TableRowColumn style={styles.heading}>{val.TotalPrice}</mat.TableRowColumn>
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
                            <Header/>
                            {SalesDetails}
                        </mat.CardText>
                    </mat.Card>
                </center>
            </div>
        );
    }
}
const mapStateToProps = (state) => {
    return {
        List: state.SalesReducers.SaledList
    };
}
// const mapDispatchToProps = (dispatch) => {
//     return {
//         AddProdutsAction: (addProducts) => {
//             dispatch(AddProdutsAction(addProducts));
//         }
//     };
// }
export default connect(mapStateToProps)(SaledDetails);