import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as firebase from 'firebase';
import { updateDoner } from '../modules/doner-redux';

class Doners extends Component {
    constructor(props) {
        super(props);
        // let currentUser = firebase.auth().currentUser;
        // const {
        //     doners
        // } = this.props;
        // console.log('haider', doners);
        firebase.database().ref('doners/').on('child_added', (data) => {
            let obj = data.val();
             obj.id = data.key;
            // console.log("firebase data", obj);

            let allDoners = this.props.doners;
            allDoners=allDoners.concat(obj);
            // console.log('concat', allDoners);            
            this.props.updateDoner(allDoners);
        });
    }
    render() {
        return (
            <div className="container">
                <div className="col-md-10 col-md-offset-2">
                    <table className=" table table-bordered">
                        <thead>
                            <tr>
                                <th>First Name</th>
                                <th>Last Name</th>
                                <th>Email</th>
                                <th>Blood Group</th>
                                <th>Category</th>
                            </tr>
                        </thead>
                        {this.props.doners.map((v,i) =>{
                            return(
                                <tbody key={i}>
                                    <tr>
                                        <td>{v.firstName}</td>
                                        <td>{v.lastName}</td>
                                        <td>{v.email}</td>
                                        <td>{v.blood}</td>
                                        <td>{v.category}</td>
                                        {/*<td></td>*/}
                                    </tr>
                                </tbody>
                            )
                        }
                    )}
                    </table> 
                </div>
            </div>
        );
    }

}


module.exports = connect(state => ({
    doners: state.doner.doners
}), {
        updateDoner
    })(Doners);