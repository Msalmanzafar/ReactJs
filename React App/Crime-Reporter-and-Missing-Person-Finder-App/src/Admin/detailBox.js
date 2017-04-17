import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as mat from 'material-ui';
import {StatusSetForAdmin} from '../action/dataSetAction'




class AllDeatilsReport extends Component {
    constructor(props) {
        super(props)
    }
    StatusChange(data) {
        data.status = this.refs.status.value;
        // console.log("status", status,keys);
        this.props.StatusSetForAdmin(data);
    }
    render() {
        console.log('filter--', this.props.tempD);
        let data = this.props.tempD;
        let keys = data.objKey;
        return (
            <div>
                {(data.crimeType === 'Complaint Against') ? (
                    <table className="table table-striped">
                        <thead>
                            <tr>
                                <th>Name</th>
                                <td>{data.name}</td>
                            </tr>
                            <tr>
                                <th>Complaint Against</th>
                                <td>{data.againstName}</td>
                            </tr>
                            <tr>
                                <th>Email</th>
                                <td>{data.emailId}</td>
                            </tr>
                            <tr>
                                <th>Complain</th>
                                <td>{data.complain}</td>
                            </tr>
                            <tr>
                                <th>Status</th>
                                <td>
                                    <input
                                        type="text"
                                        defaultValue={data.status}
                                        ref="status"
                                    />
                                    <mat.FlatButton
                                        label="Save"
                                        primary={true}
                                        keyboardFocused={true}
                                        onClick={this.StatusChange.bind(this,data)}
                                    />
                                </td>
                            </tr>
                        </thead>
                    </table>
                ) : (
                        <table className="table table-striped">
                            <thead>
                                <tr>
                                    <th>Name</th>
                                    <td>{data.name}</td>
                                </tr>
                                <tr>
                                    <th>Email</th>
                                    <td>{data.emailId}</td>
                                </tr>
                                <tr>
                                    <th>Location</th>
                                    <td>{data.eventLocation}</td>
                                </tr>
                                <tr>
                                    <th>Address</th>
                                    <td>{data.currentAddress}</td>
                                </tr>
                            </thead>
                        </table>
                    )
                }

            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        tempD: state.StatusReducer.tempDetails,
    };
}
const mapDispatchToProps =(dispatch) =>{
    return{
        StatusSetForAdmin: (data) =>{
            dispatch(StatusSetForAdmin(data));
        }
    };
}
export default connect(mapStateToProps,mapDispatchToProps)(AllDeatilsReport);
// export default AllDeatilsReport;