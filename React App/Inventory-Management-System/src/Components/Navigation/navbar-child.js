import React from 'react';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import RaisedButton from 'material-ui/RaisedButton';
import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';
// import ActionHome from 'material-ui/svg-icons/action/home';
import MdMenu from 'react-icons/lib/md/menu';
import { Link } from 'react-router';
// import { MySatatusAction, AllSatatusAction } from '../../action/firebaseData';
import { connect } from 'react-redux';


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
    this.myStatusFire = this.myStatusFire.bind(this);
    this.allStatusFire = this.allStatusFire.bind(this);
    this.state = { open: false };
  }
  allStatusFire() {
    let AllData = this.props.Status;
    // this.props.AllSatatusAction(AllData);
    this.setState({ open: false });
  }
  myStatusFire() {
    let newStatus = this.props.Status;
    // this.props.MySatatusAction(newStatus);
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
    // console.log('report status',this.props.Status)
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
            <div>
              <Link to="/myStatus" onClick={this.myStatusFire}><MenuItem >Create Store</MenuItem></Link>
              <Link to="/allStatus" onClick={this.allStatusFire}><MenuItem >New Products</MenuItem></Link>
            </div>

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
    Status: state.StatusReducer,
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
