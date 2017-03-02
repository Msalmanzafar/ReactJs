import React, {Component} from 'react';
import {connect} from 'react-redux';
import { addTodos, toggleEdit } from '../modules/todo-redux';
import * as firebase from 'firebase';
import EditTodo from './edit-todo';

class Todo extends Component{
    constructor(props){
        super(props);
        let currentUser = firebase.auth().currentUser;
        this.deleteTodoHandler = this.deleteTodoHandler.bind(this);
        this.editTodoHandler = this.editTodoHandler.bind(this);
        const {
            todos,
            editStatus
        } = this.props;
        firebase.database().ref('todos/' + currentUser.uid).on('child_added', (data)=>{
            let obj = data.val();
            obj.id = data.key;
            // console.log("firebase data",obj);

            let currentTodos =  this.props.todos;
            currentTodos = currentTodos.concat(obj)
            this.props.addTodos(currentTodos);
        });
        firebase.database().ref('todos/' + currentUser.uid).on('child_changed', (data)=>{
            let obj = data.val();
            obj.id = data.key;
            let currentTodos =  this.props.todos;
            let indexRemove;
            for (var i=0; i<currentTodos.length; i++){
                if(currentTodos[i].id === obj.id){
                    indexRemove =i;
                }
            }
            currentTodos = currentTodos.slice(0, indexRemove).concat(obj).concat(currentTodos.slice(indexRemove+ 1));

            this.props.addTodos(currentTodos);
        })
    }
    editTodoHandler(ev){
        console.log(ev.target.dataset);
        let editObj ={
            id: ev.target.dataset.id,
            todo: ev.target.dataset.todo
        }
        this.props.toggleEdit(editObj)
    }
    deleteTodoHandler(ev){
        let todoKey = ev.target.dataset.id
        let currentUser = firebase.auth().currentUser;
        firebase.database().ref('todos/' + currentUser.uid + '/' + todoKey).remove()
            .then((v) =>{
                let currentTodo = this.props.todos;
                let indexRemove;
                for(var i = 0; i< currentTodo.length; i++){
                    if(currentTodo[i].id === todoKey){
                        indexRemove = i;
                    }
                }
                currentTodo = currentTodo.slice(0, indexRemove).concat(currentTodo.slice(indexRemove + 1));
                this.props.addTodos(currentTodo);
            });
    }

    render(){
        return(
            <div className="container">
                {this.props.todos.map((v,i) =>{
                    return(
                        <div key={i} className="container">
                            <div className="col-md-10 col-md-offset-2">
                                <div  className="">
                                    <span>{v.todo}</span> {(!this.props.editStatus) ? (
                                        <span>
                                            <button data-id={v.id} onClick={this.deleteTodoHandler} className="btn btn-warning">Delete</button>
                                            <button data-id={v.id} data-todo={v.todo} onClick={this.editTodoHandler} className="btn btn-info">Edit</button>
                                        </span>
                                    ):''}
                                </div> 
                            
                            </div>
                        </div>
                    );
                })}
                <div className="container">
                    <div className="col-md-12">
                        {(this.props.editStatus) ? <EditTodo></EditTodo>: ''}    
                    </div>
                </div>
            </div>
        );
    }
}

module.exports = connect(state => ({
    todos: state.todo.todos,
    editStatus: state.todo.editStatus
}), {
        addTodos, toggleEdit
    })(Todo);