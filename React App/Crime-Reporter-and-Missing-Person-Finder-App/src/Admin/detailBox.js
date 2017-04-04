import React, {Component} from 'react';
import {connect} from 'react-redux';


class AllDeatilsReport extends Component{
    render(){
        console.log('filter--',this.props.Status);
        return(
            <div>
                Data
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        Status: state.StatusReducer.AllStatus
    };
}
export default connect(mapStateToProps)(AllDeatilsReport);
// export default AllDeatilsReport;