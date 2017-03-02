import React, { Component } from 'react';

class SignUpForm extends Component{
    constructor(props){
        super(props);
        this.FormSubmition = this.FormSubmition.bind(this);
    }

    FormSubmition(ev){
        ev.preventDefault();
        var fName = this.refs.fName.value;
        var lName = this.refs.lName.value;
        var email = this.refs.txtEmail.value;
        var password = this.refs.txtPassword.value;
        var blood = this.refs.blood.value;

        let userUth={
             firstName: fName,
             lastName: lName, 
             email: email,
             password: password,
             blood: blood
        }
        
        fName = this.refs.fName.value='';
        lName = this.refs.lName.value='';
        email = this.refs.txtEmail.value='';
        password = this.refs.txtPassword.value='';
        blood = this.refs.blood.value='';

        return this.props.formhandler(userUth);
    }

    render(){
        return(
            <div className="container ">
                <div className="row mid ">
                    <div className="col-md-offset-1 ">
                        <form name="myForm" onSubmit={this.FormSubmition}>
                            <div className="form-group ">
                                <div className="col-md-5">
                                    <label htmlFor="fName">First Name: </label><br />
                                    <input className="form-control" type="text" ref="fName" placeholder="Enter first name" />
                                </div>
                            </div>
                            <div className="form-group ">
                                <div className="col-md-5">
                                    <label htmlFor="lName">Last Name: </label><br />
                                    <input className="form-control" type="text" ref="lName" placeholder="Enter last name" />
                                </div>
                            </div>
                            <div className="form-group ">
                                <div className="col-md-10">
                                    <label htmlFor="email">Enter email: </label><br />
                                    <input className="form-control" ref="txtEmail" type="email" placeholder="Enter Email" />
                                </div>
                            </div>
                            <div className="form-group ">
                                <div className="col-md-10">
                                    <label htmlFor="password">Enter password: </label><br />
                                    <input className="form-control" type="password" ref="txtPassword" placeholder="Enter Password" />
                                </div>
                            </div>
                            <div className="form-group">
                                <label className="col-md-4 control-label" htmlFor="group">Select your blood group:</label><br/>
                                <div className="col-md-10">
                                    <select ref="blood" className="multiselect-ui form-control" >
                                        <option value="A+">A+</option>
                                        <option value="B+">B+</option>
                                        <option value="O+">O+</option>
                                        <option value="AB+">AB+</option>
                                        <option value="A-">A-</option>
                                        <option value="B-">B-</option>
                                        <option value="O-">O-</option>
                                        <option value="AB-">AB-</option>
                                    </select>
                                </div>
                            </div>
                            <div className="form-group">
                                 <div className="col-md-10">
                                    <label htmlFor="date">Date of Birth</label><br/>
                                    <div className="col-md-10">
                                        <input type="date" className="form-control" ref="date" 
                                            placeholder="Date of Birth"/>
                                    </div>
                                </div>
                            </div>
                            <div className="form-group">
                                <div className="col-md-10">
                                    <label htmlFor="">Select your account option:</label>
                                </div>
                                <div className="col-md-10">
                                    <label className="radio-inline">
                                        <input type="radio" name="option"/>Doner
                                    </label>
                                    <label className="radio-inline">
                                        <input type="radio" name="option"/>Procurer
                                    </label>
                                </div>
                            </div>
                            <div className="form-group ">
                                <div className="col-md-10">
                                    <button className="btn btn-info Signup" type="submit" >Sign Up</button>                                    
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}


export default SignUpForm;