import React, {Component} from 'react';
import MyForm from './myform';
import * as firebase from 'firebase';

class SignUp extends Component{
    constructor(props){
        super(props);
        this.SignUp = this.SignUp.bind(this);
    }

    SignUp(userUth){
        // console.log(userUth,"asadasdsa");
        firebase.auth().createUserWithEmailAndPassword(userUth.email, userUth.password)
        .then((user)=>{
            let userDetail = {
                    username: user.email,
                    useruid: user.uid
                }
                // console.log(userDetail);
                firebase.database().ref('users/' + user.uid).set(userDetail)
                .then(() => {
                    console.log("SignUp Completed")
                });
        })
        .catch((error) =>{
            // var errorCode = error.code;
            // var errorMessage = error.message;
                
        });
    }

    render(){
        return(
            <div className="container ">
                <div className="row">
                    <div className="col-md-12 ">
                        <h2 className='heading-2 text-center'>Sign Up</h2>
                        <MyForm formhandler={this.SignUp}/>
                    </div>
                </div>
            </div>
        )
    }
}

export default SignUp;