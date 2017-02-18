import React, { Component } from 'react';

class TodoListItem extends Component{

    constructor(props){
        super(props);
         this.state={
            isEditing: false,
         };
    }
    render(){
        return(
            <tr>
                <td>{this.props.task}</td>
                <td className="text-right">
                    <button className="btn btn-warning" onClick="{this.onClickBind.bind{this}}">Edit</button>
                    <button className="btn btn-danger">Delete</button>
                </td>
            </tr>
        )
    }
} 

export default TodoListItem;