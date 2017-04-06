import React, { Component } from 'react';
// import { Link } from 'react-router';
import { connect } from 'react-redux';
import { LogOutAction } from '../../Actions/AuthActions';

const style={
  log:{
    cursor:'pointer'
  }
}
class NavBar extends Component {
  constructor(props){
      super(props);
      this.logOut = this.logOut.bind(this);
  }
  logOut(){
    this.props.LogOutAction();
  }
  render() {
    const {
        auth,
    } = this.props;
    return (
      <div>
        <nav className="navbar navbar-inverse">
          <div className="container-fluid">
            <div className="navbar-header">
              <a className="navbar-brand" >Business Store</a>
            </div>
            {/*<ul className="nav navbar-nav">
              <li className="active"><a href="#"></a></li>
              <li><a href="#">Page 1</a></li>
              <li><a href="#">Page 2</a></li>
            </ul>*/}
            
              {(auth === false) ? (
                <span></span>
              ) : (
                <ul className="nav navbar-nav navbar-right">
                    <li><a style={style.log} onClick={this.logOut}><h4>Log Out</h4></a></li>
                 </ul>
                )}

          </div>
        </nav>
        {this.props.children}
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    auth: state.AuthReducer.authLogOut
  };
}
const mapDispatchToProps = (dispatch) => {
    return {
        LogOutAction: () => {
            dispatch(LogOutAction());
        }
    };
}
export default connect(mapStateToProps,mapDispatchToProps)(NavBar);
// export default NavBar;
 /*<ul className="nav navbar-nav navbar-right">
                  <li><Link to='/SignUp'><span>Sign Up</span></Link></li>
                  <li><Link to='/Login'><span>Log In</span></Link></li>
               </ul>*/