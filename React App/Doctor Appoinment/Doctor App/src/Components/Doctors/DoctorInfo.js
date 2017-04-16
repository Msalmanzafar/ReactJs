import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as mat from 'material-ui';
// import { Link } from 'react-router';
import {DocotrsInfoData} from '../../Actions/DoctorsInfoAction'

const styles = {
    card: {
        width: '65%',
        height: 'auto',
        position: 'relative',
        top: '50px'
    },
    login: {
        textAlign: 'left'
    }
}

class DoctorInfo extends Component {
    constructor(props) {
        super(props);
        this.DoctorsInfo = this.DoctorsInfo.bind(this)
    }
    DoctorsInfo(ev) {
        ev.preventDefault();
        let name = this.refs.name.value;
        let email = this.refs.email.value;
        let hosp = this.refs.hosp.value;
        let number = this.refs.number.value;

       
            let DoctorDetails = {
                name: name,
                email: email,
                hosp: hosp,
                number: number
            }
            // console.log(userLogin)
            this.props.DocotrsInfoData(DoctorDetails);
            name = this.refs.name.value = "";
            email = this.refs.email.value = "";
            hosp = this.refs.hosp.value = "";
            number = this.refs.number.value = "";
        
    }
    render() {
        return (
            <div >
                <center>
                    <mat.Card style={styles.card} zDepth={2}>
                        <mat.AppBar style={styles.login} title="Update Profile Details" showMenuIconButton={false} />
                        <mat.CardText>
                            <form onSubmit={this.DoctorsInfo} style={styles.login}>
                                <div className="form-group " >
                                    <label htmlFor="Name">Name</label>
                                    <input type="text" className="form-control" ref="name" placeholder="Enter your Name" />
                                </div>
                                <div className="form-group ">
                                    <label htmlFor="email">Email</label>
                                    <input type="email" className="form-control" ref="email" placeholder="Enter your email" />
                                </div>
                                <div className="form-group ">
                                    <label htmlFor="hosp">Availability</label>
                                    <input type="text" className="form-control" ref="hosp" placeholder="Enter your Hospital or Clinic" />
                                </div>
                                <div className="form-group ">
                                    <label htmlFor="number">Contact number</label>
                                    <input type="text" className="form-control" ref="number" placeholder="Enter your Contact number" />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="catagory">Select your designation</label>
                                    <select ref="option" className="multiselect-ui form-control" >
                                        <option value="default">Select</option>
                                        <option value="Doctor">MBBS</option>
                                        <option value="Patient">Surgeons</option>
                                        <option value="Patient">FCPS</option>
                                        <option value="Patient">Specialist</option>
                                    </select>
                                </div>
                                <div className="form-group ">
                                    <button type="submit" className="btn btn-success custom-button">Log In</button>
                                </div>

                            </form>
                        </mat.CardText>
                    </mat.Card>
                </center>
            </div>
        )
    }
}
// export default DoctorInfo;
const mapStateToProps = (state) => {
    return {
        auth: state.AuthReducer
    };
}
const mapDispatchToProps = (dispatch) => {
    return {
        DocotrsInfoData: (DoctorDetails) => {
            dispatch(DocotrsInfoData(DoctorDetails));
        }
    };
}
export default connect(mapStateToProps, mapDispatchToProps)(DoctorInfo);
