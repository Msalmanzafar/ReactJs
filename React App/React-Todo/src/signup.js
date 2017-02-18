import React, {Component} from 'react';

class SignUp extends Component{

    onSignUp(){
        
    }

    render(){
        return(
            <div className="container ">
                <div className="row mid ">
                    <div className="col-md-12 text-center">
                        <h1>Sign Up</h1>
                    </div>
                    <div className="col-md-10 col-md-offset-1 ">
                        <form name="myForm" >
                            <div className="form-group ">
                                <label htmlFor="name">Enter name: </label><br/>
                                <input type="text" className="form-control" placeholder="Enter Name" />
                            </div>
                            <div className="form-group ">
                                <label htmlFor="email">Enter email: </label><br/>
                                <input className="form-control"  type="email" placeholder="Enter Email"  />
                            </div>
                            <div className="form-group ">
                                <label htmlFor="password">Enter password: </label><br/>
                                <input className="form-control" type="password" placeholder="Enter Password"  />
                            </div>
                                <button className="btn btn-info sigup-button" type="button" onClick={this.onSignUp.bind(this)}>Sign Up</button>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}

export default SignUp;