import React, {Component} from 'react';
import {Link} from 'react-router';
import {connect} from 'react-redux';
import {authentication} from '../modules/todo-redux';
import * as firebase from 'firebase';

class NavBar extends Component{
    constructor(props){
        super(props);
        this.logOut = this.logOut.bind(this);
    }
    logOut(){
        firebase.auth().signOut()
        .then((user)=> {
            this.props.authentication();
        }, (error) =>{
            console.log("waiting for internet");
        });
    }
    render(){
        const {
            auth
        } = this.props
        return(
            <div>
                <nav className="navbar bg-primary">
                    <div className="container-fluid heading">
                        <div className="navbar-header ">
                            <h1>ReduxFirebase Todo App</h1>
                        </div>
                    </div>
                </nav>
                <div className="container box1">
                    <div className="row">
                        <div className="col-md-12 text-center">
                            {(auth === false ) ? (
                                <ul className="list-group list-unstyled list-inline ">
                                    <li className="">
                                        <Link to='/signup' activeClassName="success-active">
                                            <button className="btn btn-info">Sign Up</button>
                                        </Link>
                                    </li>
                                    <li className="">
                                        <Link to='/signin' activeClassName="success-active">
                                            <button className="btn btn-success">Sign In</button>
                                        </Link>
                                    </li>
                                </ul>
                                ):(
                                <ul className="list-group list-unstyled text-right">
                                    <li className="">
                                        <Link to='/signin' activeClassName="success-active">
                                            <button className="btn btn-warning" onClick={this.logOut}>Log Out</button>
                                        </Link>
                                    </li>
                                </ul>
                            )}
                    </div>
                    </div>
                </div>

                <div className="container">
                    <div className="row">
                        <div className="col-md-10">
                            {this.props.children}
                        </div>
                    </div>
                </div>
            </div>
        );
    }
} 

export default connect(state =>({
    auth: state.todo.authenticated
}),{
    authentication
})(NavBar);