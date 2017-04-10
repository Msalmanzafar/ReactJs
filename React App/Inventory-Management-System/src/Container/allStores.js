import React, {Component} from 'react';
import {connect} from 'react-redux';

class DisplayAllStores extends Component{
    render(){
        console.log("All avalibale stores",this.props.StoresName)
        return(
            <div>

            </div>
        );
    }
}
const mapStateToProps = (state) => {
    return {
        StoresName: state.StoreReducers.newStore
    };
}
export default connect(mapStateToProps)(DisplayAllStores);