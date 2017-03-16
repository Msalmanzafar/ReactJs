import React, { Component } from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import { Link } from 'react-router'
import * as firebase from 'firebase';

const style = {
    margin: 12,
};



class Home extends Component {
    componentWillMount() {
        firebase.auth().onAuthStateChanged(function (user) {
            if (user) {
                console.log(user);
            }
        });
    }
    render() {
        return (
            <div>
                <center>
                    <Link to='/forComplaints'>
                        <RaisedButton label="Complaints"
                            labelColor="#fcfaf6"
                            backgroundColor="#b71c1c"
                            style={style}
                        />
                    </Link>
                    <Link to='/forCrimes'>
                        <RaisedButton label="Crimes"
                            labelColor="#fcfaf6"
                            backgroundColor="#0288d1"
                            style={style}
                        />
                    </Link>
                    <Link to='/forMissing'>
                        <RaisedButton label="Missing Persons"
                            labelColor="#fcfaf6"
                            backgroundColor="#0288d1"
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

export default Home;