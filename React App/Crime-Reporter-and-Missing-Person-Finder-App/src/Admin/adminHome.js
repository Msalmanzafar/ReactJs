import React, { Component } from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import { Link } from 'react-router'
// import * as firebase from 'firebase';

const style = {
    margin: 12,
};



class adminHome extends Component {
    // componentWillMount() {
    //     firebase.auth().onAuthStateChanged(function (user) {
    //         if (user) {
    //             console.log("firebase current user",user);
    //         }
    //     });
    // }
    render() {
        return (
            <div>
                <center>
                    <Link to='/forComplaints'>
                        <RaisedButton label="Complaints"
                            labelColor="#fcfaf6"
                            backgroundColor="#03a9f4"
                            style={style}
                        />
                    </Link>
                    <Link to='/forCrimes'>
                        <RaisedButton label="Crimes"
                            labelColor="#fcfaf6"
                            backgroundColor="#03a9f4"
                            style={style}
                        />
                    </Link>
                    <Link to='/forMissing'>
                        <RaisedButton label="Missing Persons"
                            labelColor="#fcfaf6"
                            backgroundColor="#03a9f4"
                            style={style}
                        />
                    </Link>
                    
                </center>
                <div>
                    {this.props.children}
                </div>
            </div>
        );
    }
}

export default adminHome;