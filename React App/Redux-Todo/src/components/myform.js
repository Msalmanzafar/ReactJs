import React, { Component } from 'react';

class MyForm extends Component{
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
             password: password
        }
        
        email = this.refs.txtEmail.value = '';
        password = this.refs.txtPassword.value = '';

        return this.props.formhandler(userUth);
    }

    render(){
        return(
            <div className="container ">
                <div className="row mid ">
                    <div className="col-md-10 col-md-offset-1 ">
                        <form name="myForm" onSubmit={this.FormSubmition}>
                            <div className="form-group ">
                                <label htmlFor="email">Enter email: </label><br />
                                <input className="form-control" ref="txtEmail" defaultValue="salmanzafar@gmail.com" type="email" placeholder="Enter Email" />
                            </div>
                            <div className="form-group ">
                                <label htmlFor="password">Enter password: </label><br />
                                <input className="form-control" type="password" defaultValue="123456" ref="txtPassword" placeholder="Enter Password" />
                            </div>
                            <button className="btn btn-info " type="submit" id="btnSignup">Click Me</button>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}


export default MyForm;