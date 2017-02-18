import _ from 'lodash';
import React,{Component} from 'react';
import TodoListHead from './todo-list-head';
import TodoListItem from './todo-list-item';


class TodoList extends Component {
    
    renderItems(){
        return _.map(this.props.todos, (todo, index) => <TodoListItem key={index
        }{...todo}/>);
    }

    render(){        
        return(
            <table className="table table-bordered table">
                <TodoListHead  />   
                <tbody>
                    {this.renderItems()}
                </tbody>               
            </table>
        );
    }
}

export default TodoList;