import React from 'react';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import RaisedButton from 'material-ui/RaisedButton';
import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';
// import ActionHome from 'material-ui/svg-icons/action/home';
import MdMenu from 'react-icons/lib/md/menu';
// import { Link } from 'react-router';
// import { MySatatusAction, AllSatatusAction } from '../../action/firebaseData';
import { connect } from 'react-redux';
import { browserHistory } from 'react-router';

const style = {
  float: 'right',
  marginRight: '15px'
}
const styles = {
  smallIcon: {
    width: 36,
    height: 36,
    color: '#f8fdfa'
  },
  small: {
    width: 40,
    height: 40,
    padding: 5,
  },
  email: {
    fontSize: '18px'
  }
};

class DrawerUndockedExample extends React.Component {

  constructor(props) {
    super(props);
    this.DoctorDetails = this.DoctorDetails.bind(this);
    this.Appoinment = this.Appoinment.bind(this);
    this.DoctorProfile = this.DoctorProfile.bind(this);
    // this.AppoinmentList = this.AppoinmentList.bind(this);
    this.state = { open: false };
  }
  Appoinment() {
    browserHistory.push('/appoinment');
    this.setState({ open: false });
  }
  DoctorDetails() {
    browserHistory.push('/doctordetails');
    this.setState({ open: false });
  }
  DoctorProfile(){
    browserHistory.push('/DoctorInfo');
    this.setState({ open: false });
  }
  handleToggle = () => {
    console.log('working');
    this.setState({ open: !this.state.open });
  }

  handleClose = () => this.setState({ open: false });


  render() {
    const {
        auth,
    } = this.props;
    console.log('report status',this.props.auth.type)
    return (
      <div>
        <IconButton
          iconStyle={styles.smallIcon}
          style={styles.small}
        >
          <MdMenu onClick={this.handleToggle} />
        </IconButton>
        <Drawer
          docked={false}
          width={250}
          open={this.state.open}
          onRequestChange={(open) => this.setState({ open })}

        >
          <AppBar iconElementLeft={<span></span>} title={<span style={styles.email}>{this.props.auth.email}</span>} />
          {(auth.type === 'Patient') ? (
            <div>
              <MenuItem onClick={this.DoctorDetails}>Doctor Details</MenuItem>
              <MenuItem onClick={this.Appoinment}>Make Appoinment</MenuItem>
            </div>
          ) : (
            <div>
              <MenuItem onClick={this.DoctorProfile}>Create your profile</MenuItem>
              <MenuItem onClick={this.AppoinmentList}>Appoinment List</MenuItem>
            </div>
            )}
          <RaisedButton
            label="Close"
            onClick={this.handleClose}
            style={style}
          />
        </Drawer>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    auth: state.AuthReducer.authSignIn
  };
}
const mapDispatchToProps = (dispatch) => {
  return {
    // MySatatusAction: (newStatus) => {
    //   dispatch(MySatatusAction(newStatus))
    // },
    // AllSatatusAction: (AllData) => {
    //   dispatch(AllSatatusAction(AllData))
    // },
  };
}
export default connect(mapStateToProps, mapDispatchToProps)(DrawerUndockedExample);
