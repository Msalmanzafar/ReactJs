import React, {Component} from 'react';
import { connect } from 'react-redux';


class SaledDetails extends Component{
    render(){
        console.log("-------------------",this.props.List)
        return(
            <div>
                <h2>Saled Products</h2>
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
//   return {
//     AvailibaleActions: () => {
//       dispatch(AvailibaleActions())
//     },
//     SalesProductsAction: () => {
//       dispatch(SalesProductsAction())
//     },
//   };
// }
export default connect(mapStateToProps)(SaledDetails);