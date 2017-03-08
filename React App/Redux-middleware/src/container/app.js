import React,{Component} from 'react';
import {connect} from 'react-redux';
import {Uers} from '../components/users';
import {Main} from '../components/main';
import {setName} from '../actions/userActions'
// import {addNumber} from '../actions/mathActions'
// import {Math, Numbers} from '../components/math-main';

class App extends Component{
    render(){
        return(
            <div>
                <Main changeUserName={()=>this.props.setName('Zafar')}/>
                <Uers username={this.props.user.name}/>    
                {/*<Math mathChange={()=>this.props.addNumber(2)}/>
                <Numbers Addnumbers={this.props.math.number}/>*/}
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