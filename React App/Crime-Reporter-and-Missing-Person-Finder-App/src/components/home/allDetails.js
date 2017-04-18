import React, { Component } from 'react';
import { connect } from 'react-redux';
// import * as mat from 'material-ui';
import { StatusSetForAdmin } from '../../action/dataSetAction'




class AllDeatilsComponents extends Component {
   
    
    render() {
        // console.log('filter--', this.props.tempDet);
        let data = this.props.tempDet;
        // let keys = data.objKey;
        return (
            <div>
                {(data.crimeType === 'Complaint Against') ? (
                    <table className="table table-striped">
                        <thead>
                            <tr>
                                <th>Complain</th>
                                <td>{data.crimeType}</td>
                            </tr>
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
                                <td>{data.status}</td>
                            </tr>
                        </thead>
                    </table>
                ) : (
                        <div>
                            {(data.crimeType === 'Crime Report') ? (
                                <table className="table table-striped">
                                    <thead>
                                        <tr>
                                            <th>Complain</th>
                                            <td>{data.crimeType}</td>
                                        </tr>
                                        <tr>
                                            <th>Name</th>
                                            <td>{data.name}</td>
                                        </tr>
                                        <tr>
                                            <th>Email</th>
                                            <td>{data.emailId}</td>
                                        </tr>
                                        <tr>
                                            <th>Residencial Address</th>
                                            <td>{data.currentAddress}</td>
                                        </tr>
                                        <tr>
                                            <th>Crime Location</th>
                                            <td>{data.eventLocation}</td>
                                        </tr>
                                        <tr>
                                            <th>Crime Detail</th>
                                            <td>{data.details}</td>
                                        </tr>
                                        <tr>
                                            <th>Status</th>
                                            <td>{data.status}</td>
                                        </tr>
                                        
                                    </thead>
                                </table>
                            ) : (
                                    <table className="table table-striped">
                                        <thead>
                                            <tr>
                                                <th>Complain</th>
                                                <td>{data.crimeType}</td>
                                            </tr>
                                            <tr>
                                                <th>Reporting Person</th>
                                                <td>{data.name}</td>
                                            </tr>
                                            <tr>
                                                <th>Email</th>
                                                <td>{data.emailId}</td>
                                            </tr>
                                            <tr>
                                                <th>Location</th>
                                                <td>{data.location}</td>
                                            </tr>
                                            <tr>
                                                <th>Missing Person</th>
                                                <td>{data.missName}</td>
                                            </tr>
                                            <tr>
                                                <th>Age</th>
                                                <td>{data.age}</td>
                                            </tr>
                                            <tr>
                                                <th>Status</th>
                                                <td>{data.status}</td>
                                            </tr>
                                            
                                        </thead>
                                    </table>
                                )
                            }
                        </div>

                    )
                }

            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        tempDet: state.StatusReducer.tempDetails,
    };
}
const mapDispatchToProps = (dispatch) => {
    return {
        StatusSetForAdmin: (data) => {
            dispatch(StatusSetForAdmin(data));
        }
    };
}
export default connect(mapStateToProps, mapDispatchToProps)(AllDeatilsComponents);
// export default AllDeatilsReport;