import React, { Component } from 'react';
import * as mat from 'material-ui';
import { connect } from 'react-redux';

const style = {
    height: 'auto',
    width: '90%',
    margin: '20px',
    textAlign: 'left',
    display: 'inline-block',
    marginTop: '-15px'
};
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
        backgroundColor: 'blue'
    },
    card: {
        width: '90%',
        height: 'auto',
        position: 'relative',
        top: '50px'
    },
    store: {
        textAlign: 'left'
    }

}
class AvailibaleProducts extends Component {

    render() {

        console.log("AllAvailibale", this.props.Products)
        return (
            <div>
                <p>something</p>
                {this.props.Products.map((v, i) => {
                    return (
                        <tbody key={i}>
                            <tr>
                                <td>{v.productName}</td>
                                <td>{v.quantity}</td>
                                <td>{v.dates}</td>

                            </tr>
                        </tbody>
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