import React from 'react';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import RaisedButton from 'material-ui/RaisedButton';
import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';
// import ActionHome from 'material-ui/svg-icons/action/home';
import MdMenu from 'react-icons/lib/md/menu';
import {Link} from 'react-router';
import {MySatatusAction} from '../../action/firebaseData';
import {connect} from 'react-redux';



const style={
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
};

class DrawerUndockedExample extends React.Component {

  constructor(props) {
    super(props);
    this.myStatusFire = this.myStatusFire.bind(this);
    this.state = { open: false };
  }

  myStatusFire(){
      this.props.MySatatusAction();
      this.setState({ open: false })
  }

  handleToggle = () => {
    console.log('working');
    this.setState({ open: !this.state.open });
  }

  handleClose = () => this.setState({ open: false });

  render() {
    console.log(this.props.Status)
    return (
      <div>
        <IconButton 
          iconStyle={styles.smallIcon}
          style={styles.small}
        >
          <MdMenu onClick={this.handleToggle}/>
        </IconButton>
        <Drawer
          docked={false}
          width={250}
          open={this.state.open}
          onRequestChange={(open) => this.setState({ open })}
          
        > 
          <AppBar title="Options" />
          <Link to="/myStatus" onClick={this.myStatusFire}><MenuItem >My Complaints</MenuItem></Link>
          <Link to="" onClick={this.closed}><MenuItem > All Complaints</MenuItem></Link>

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

const mapStateToProps =(state) =>{
    return{
        Status: state.StatusReducer
    };
}
const mapDispatchToProps =(dispatch) =>{
    return{
        MySatatusAction: () =>{
            dispatch(MySatatusAction())
        }
    };
}
export default connect(mapStateToProps,mapDispatchToProps)(DrawerUndockedExample);