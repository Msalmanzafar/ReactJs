import React, {Component} from 'react';
// import { connect } from 'react-redux';
import * as firebase from 'firebase';
//  import Todo from './Todo';


class Home extends Component{
    constructor(props){
        super(props);
        this.addTodo = this.addTodo.bind(this);
    }

    addTodo(ev){
        ev.preventDefault();
        let currentUser = firebase.auth.currentUser;
        console.log(currentUser.uid, 'currentUser here');
        firebase.database().ref('todos/' + currentUser.uid).push({ todo: this.refs.todo.value })
            .then((v) => {
                this.refs.todo.value = '';
            })

    }
    render(){
        return(
            <div className="container">
                <div className="col-md-10">
                    <form className="center-content" onSubmit={this.addTodo}>
                        <div className="form-group">
                            <div className="col-md-10 col-md-offset-2">
                                <input type="text" className="form-control" id="todo" placeholder="Enter Todo" ref='todo' />
                            </div>
                        </div>
                        <div className="col-md-10 ">
                            <button type="submit" className="btn col-md-offset-10 btn-primary">Add</button>
                        </div>
        
                    </form>
                </div>
                <br /> <br />
                {/*<Todo />*/}
            </div >
        );
    }
}

export default Home;