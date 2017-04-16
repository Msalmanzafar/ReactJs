import React, { Component } from 'react'
import { connect } from 'react-redux';
import * as mat from 'material-ui';
import {DoctorsActions} from '../../Actions/DoctorsActions'
import { Link } from 'react-router';

// import 
const style = {
  margin: 12,
};
class AdminHome extends Component {
      constructor(props) {
        super(props);
        this.dotorsAllData=this.dotorsAllData.bind(this);
    }
    dotorsAllData(){
        this.props.DoctorsActions()
    }
    render() {
        return (
            <div>
                <center>
                    <Link to='/PatintForAdmin'><mat.RaisedButton label="Patients" primary={true} style={style} /></Link>
                    <Link to="/DoctorsForAdmin"><mat.RaisedButton onClick={this.dotorsAllData} label="Docotrs" primary={true} style={style} /></Link>
                </center>
            </div>
        )
    }
}



const mapStateToProps = (state) => {
    return {
        DoctorsDetails: state.DoctorsReducers.DoctorsObjs
    };
}
const mapDispatchToProps = (dispatch) => {
    return {
        DoctorsActions: () => {
            dispatch(DoctorsActions());
        }
    };
}
export default connect( mapStateToProps,mapDispatchToProps)(AdminHome);