import React, { Component } from 'react';
// import './App.css';
import TodoList from './todo-list';
import CreateTodo from './create-todo';

const todos = [
  {
    task: 'make React',
    isCompleted: true
  },
  {
    task: 'Dinner',
    isCompleted: true
  }
];

class List extends Component {
    
    constructor(props){
        super(props);

        this.state ={
            todos
        };
    }

  render() {
    return (
        
       <div>
           
           <CreateTodo />
           <TodoList todos={this.state.todos}/>
       </div>
    );
  }
}

export default List;