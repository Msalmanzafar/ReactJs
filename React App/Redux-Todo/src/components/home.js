import React, {Component} from 'react';
import { connect } from 'react-redux';
import * as firebase from 'firebase';
 import Todo from './Todo';


class Home extends Component{
    constructor(props){
        super(props);
        this.addTodo = this.addTodo.bind(this);
    }

    addTodo(ev){
        ev.preventDefault();
        let currentUser = firebase.auth().currentUser;
        // console.log(currentUser.uid, 'currentUser here');
        firebase.database().ref('todos/' + currentUser.uid).push({ todo: this.refs.todo.value })
            .then((v) => {
                this.refs.todo.value = '';
            })

    }
    render(){
        return(
            <div>
                <div>
                    <form className="center-content" onSubmit={this.addTodo}>
                        <div className="form-group">
                            <div className="col-sm-10 col-md-offset-2">
                                <input type="text" className="form-control" id="todo" placeholder="Enter Todo" ref='todo' />
                            </div>
                        </div>
                        <div className="form-group">
                            <div className="col-sm-offset-10 col-md-10">
                                <button type="submit" className="btn btn-primary add">Add Todo</button>
                            </div>
                        </div>
                    </form>
                </div>
                <br /> <br />
                <Todo />
            </div >
        );
    }
}

export default connect()(Home);