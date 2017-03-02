import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as firebase from 'firebase';
import { updateDoner } from '../modules/doner-redux';

class Doners extends Component {
    constructor(props) {
        super(props);
        let currentUser = firebase.auth().currentUser;
        const {
            doners
        } = this.props;
        // console.log('haider', doners);
        firebase.database().ref('doners/').on('child_added', (data) => {
            let obj = data.val();
            // obj.id = data.key;
            // console.log("firebase data", obj);

            let allDoners = this.props.doners;
            allDoners=allDoners.concat(obj);
            console.log('concat', allDoners);            
            this.props.updateDoner(allDoners);
        });
    }
    render() {
        return (
            <div className="col-md-offset-2">
                {this.props.doners.map((v,i) =>{
                    return(
                        <div key={i} className="container-fluid well span6">
                            <blockquote>
                                <div  className="row-fluid ">
                                <div className="span2" >
                                    <img src="https://secure.gravatar.com/avatar/de9b11d0f9c0569ba917393ed5e5b3ab?s=140&r=g&d=mm" 
                                    className="img-circle"/>
                                </div>
                                <div className="span8">
                                    <h3>{v.firstName} {v.lastName}</h3>
                                    <h6>{v.email}</h6>
                                    <h6>{v.blood}</h6>
                                </div>
                            </div>
                            </blockquote>
                        </div>
                    )
                })}
            </div>
        );
    }

}


module.exports = connect(state => ({
    doners: state.doner.doners
}), {
        updateDoner
    })(Doners);