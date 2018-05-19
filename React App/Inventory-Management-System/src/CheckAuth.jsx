import React, { Component } from 'react';
import { browserHistory } from 'react-router';
import { connect } from 'react-redux';
// import { Error } from './component';

function mapStateToProps(state) {
    return {
        isLogin: state.AuthReducer.LoginSuccess,
    }
}

export default function (ComposedComponent) {
    class Auth extends Component {
        componentWillMount() {
            if(!this.props.isLogin) {
                browserHistory.push('/');
            }
        }
        componentWillUpdate({isLogin}) {
            if(!isLogin) {
                browserHistory.push('/');
            }
        }
        render() {
            return (
                ComposedComponent ? <ComposedComponent {...this.props}/> : alert("There is no Async component" )
            )
        }
    }

    return connect(mapStateToProps)(Auth);
}