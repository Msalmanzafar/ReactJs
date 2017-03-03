
import React, {Component} from 'react';
import { connect } from 'react-redux';
import * as firebase from 'firebase';

class TempDoners extends Component{
    constructor(props){
        super(props);
    }

    render(){
        console.log("props data",this.props.data)
        return(
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
                        {this.props.data.map((v,i) =>{
                            return(
                                <tbody key={i}>
                                    <tr>
                                        <td>{v.firstName}</td>
                                        <td>{v.lastName}</td>
                                        <td>{v.email}</td>
                                        <td>{v.blood}</td>
                                        <td>{v.category}</td>
                                    </tr>
                                </tbody>
                            )
                        }
                    )}
                    </table> 
                </div>
            </div>
            
        )
    }
}

export default TempDoners;