import React, { Component } from 'react';

class SignInForm extends Component{
    constructor(props){
        super(props);
        this.FormSubmition = this.FormSubmition.bind(this);
    }

    FormSubmition(ev){
        ev.preventDefault();
        var email = this.refs.txtEmail.value;
        var password = this.refs.txtPassword.value;

        let userUth={ 
             email: email,
             password: password,
        }
        
        email = this.refs.txtEmail.value = '';
        password = this.refs.txtPassword.value = '';

        return this.props.formhandler(userUth);
    }

    render(){
        return(
            <div className="container ">
                <div className="row mid ">
                    <div className="col-md-offset-1 ">
                        <form name="myForm" onSubmit={this.FormSubmition}>
                            <div className="form-group ">
                                <div className="col-md-10">
                                    <label htmlFor="email">Enter email: </label><br />
                                    <input className="form-control" defaultValue="salmanz@gmail.com" ref="txtEmail" type="email" placeholder="Enter Email" />
                                </div>
                            </div>
                            <div className="form-group ">
                                <div className="col-md-10">
                                    <label htmlFor="password">Enter password: </label><br />
                                    <input className="form-control" defaultValue="123456"type="password" ref="txtPassword" placeholder="Enter Password" />
                                </div>
                            </div>
                            <div className="form-group ">
                                <div className="col-md-10">
                                    <button className="btn btn-info Signup" type="submit" >Sign In</button>                                    
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}


export default SignInForm;