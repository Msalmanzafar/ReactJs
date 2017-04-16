import React from 'react';
import { connect } from 'react-redux';
import { browserHistory } from 'react-router';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import RaisedButton from 'material-ui/RaisedButton';
import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';
import MdMenu from 'react-icons/lib/md/menu';
import {AvailibaleActions} from '../../Actions/newStoreAction'


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
    this.CreateStore = this.CreateStore.bind(this);
    this.AvailibaleStores = this.AvailibaleStores.bind(this);
    this.state = { open: false };
  }
  AvailibaleStores() {
    this.props.AvailibaleActions()
    browserHistory.push('/availstores')
    this.setState({ open: false });
  }
  CreateStore() {
    browserHistory.push('/newstore')
    this.setState({ open: false });
  }

  handleToggle = () => {
    console.log('working');
    this.setState({ open: !this.state.open });
  }

  handleClose = () => this.setState({ open: false });

  render() {
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
            <MenuItem onClick={this.CreateStore}>Create Store</MenuItem>
            <MenuItem onClick={this.AvailibaleStores}>Availibale Stores</MenuItem>
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
    auth: state.AuthReducer.authSignIn
  };
}
const mapDispatchToProps = (dispatch) => {
  return {
    AvailibaleActions: () => {
      dispatch(AvailibaleActions())
    },
  };
}
export default connect(mapStateToProps, mapDispatchToProps)(DrawerUndockedExample);
