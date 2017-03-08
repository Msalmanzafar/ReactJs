import React,{Component} from 'react';
import {connect} from 'react-redux';
import {Uers} from '../components/users';
import {Main} from '../components/main';
import {setName} from '../actions/userActions'
import {addNumber,subtractNumber} from '../actions/mathActions'
import {Add, AddNumbers,Subtract} from '../components/math-main';

class App extends Component{
    render(){
        return(
            <div className="container">
                <div className="col-md-12">
                    <Main changeUserName={()=>this.props.setName('Zafar')}/>
                    <Uers username={this.props.user.name}/>    
                    <Add mathChange={()=>this.props.addNumber(10)}/>
                    <Subtract mathChange={()=>this.props.subtractNumber(5)}/>
                    <AddNumbers Addnumbers={this.props.math.number}/>                                
                </div>
            </div>
        )
    }
}

const mapStateToProps =(state) =>{
    return{
        user: state.userReducer,
        math: state.mathReducer
    };
}
const mapDispatchToProps =(dispatch) =>{
    return{
        setName: (name) =>{
            dispatch(setName(name));
        },
        addNumber: (number)=>{
            dispatch(addNumber(number));
        },
        subtractNumber: (number)=>{
            dispatch(subtractNumber(number));
        }  
       
    };
}
// const mapDispatchToPropsNum =(dispatch) =>{
//     return{
//         addNumber: (number)=>{
//             dispatch(addNumber(number));
//         } 
//     }
// }

export default connect(mapStateToProps,mapDispatchToProps)(App);