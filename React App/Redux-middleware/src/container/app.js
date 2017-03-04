import React,{Component} from 'react';
import {connect} from 'react-redux';
import {Uers} from '../components/users';
import {Main} from '../components/main';

class App extends Component{
    
    render(){
        return(
            <div>
                <Main changeUserName={()=>this.props.setName('Zafar')}/>
                <Uers username={this.props.user.name}/>    
            </div>
        )
    }
}

const mapStateToProps =(state) =>{
    return{
        user: state.user,
        math: state.math
    };
}
const mapDispatchToProps =(dispatch) =>{
    return{
        setName: (name) =>{
            dispatch({
                type: 'SET_NAME',
                payload: 'salman'
            });
        }
    };
}

export default connect(mapStateToProps,mapDispatchToProps)(App);