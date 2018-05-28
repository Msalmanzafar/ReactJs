import React from 'react';
import { connect } from 'react-redux';
import { browserHistory } from 'react-router';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import RaisedButton from 'material-ui/RaisedButton';
import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';
import MdMenu from 'react-icons/lib/md/menu';
import { AvailibaleActions, LoaderAction } from '../../Actions/newStoreAction'
import { SalesProductsAction, SaledListActions } from '../../Actions/SalesActions'



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
    this.SaleProduct = this.SaleProduct.bind(this);
    this.SalesDetails = this.SalesDetails.bind(this);
    this.state = { open: false };
  }
  SalesDetails() {
    this.props.LoaderAction();
    this.props.SaledListActions();
    browserHistory.push('/salesdetails');
    this.setState({ open: false });
  }
  SaleProduct() {
    this.props.SalesProductsAction();
    browserHistory.push('/saleproduct');
    this.setState({ open: false });
  }
  AvailibaleStores() {
    this.props.LoaderAction();
    this.props.AvailibaleActions();
    browserHistory.push('/availstores');
    this.setState({ open: false });
  }
  CreateStore() {
    browserHistory.push('/newstore')
    this.setState({ open: false });
  }

  handleToggle = () => {
    // console.log('working');
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
            <MenuItem onClick={this.SaleProduct}>Sale Product</MenuItem>
            <MenuItem onClick={this.SalesDetails}>Sales Details</MenuItem>
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
    LoaderAction: () => {
      dispatch(LoaderAction());
    },
    AvailibaleActions: () => {
      dispatch(AvailibaleActions());
    },
    SalesProductsAction: () => {
      dispatch(SalesProductsAction());
    },
    SaledListActions: () => {
      dispatch(SaledListActions());
    }
  };
}
export default connect(mapStateToProps, mapDispatchToProps)(DrawerUndockedExample);
