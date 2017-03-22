import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import FlatButton from 'material-ui/FlatButton';
import { Link } from 'react-router';
import * as firebase from 'firebase';
import { connect } from 'react-redux';
import { LogOutAction } from '../../action/auth-action';
import DrawerUndockedExample from './navbar-child'
const styles = {
    title: {
        cursor: 'pointer',
    },
    headerButton: {
        // border: '2px solid red',
        marginTop: '5px',
    },
    button: {
        color: '#fafbfc',
        fontFamily: 'Verdana'
    }
};

class NavBar extends Component {
    constructor(props) {
        super(props);
        this.logOut = this.logOut.bind(this);
    }
    logOut() {
        this.props.LogOutAction();
    }
    render() {
        const {
            auth,
        } = this.props;
        console.log('state', this.props.auth);
        return (
            <div>
                <MuiThemeProvider>
                    <AppBar
                        title={<span style={styles.title}>Crime Reporting</span>}
                        iconElementLeft={<DrawerUndockedExample />}
                        iconElementRight={
                            <div style={styles.headerButton}>
                                {(auth === false) ? (
                                    <span>
                                        <Link to='/signup'>
                                            <FlatButton style={styles.button} label="Sign Up" />
                                        </Link>
                                        <Link to='/signin'>
                                            <FlatButton style={styles.button} label="Log In" />
                                        </Link>
                                    </span>
                                ) : (
                                        <div>
                                            <FlatButton style={styles.button}
                                                onClick={this.logOut} label="Log Out"
                                            />
                                        </div>

                                    )}
                            </div>
                        }
                    />
                </MuiThemeProvider>
            </div>
        );
    }
}
// export default NavBar;
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
export default connect(mapStateToProps, mapDispatchToProps)(NavBar);

