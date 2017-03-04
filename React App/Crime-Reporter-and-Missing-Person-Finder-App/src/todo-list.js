import React, { Component } from 'react';

class TodoList extends Component{
    constructor(props){
        super(props);
        this.createTodo = this.createTodo.bind(this);
    }
    createTodo(){
        var todos = this.refs.todo.value;

        var table = document.createElement("table");
        var tr = document.createElement("tr");
        var td = document.createElement("td");
        td.innerHTML = todos;
        table.appendChild(tr);
        tr.appendChild(td);
        console.log(table);
    };

    render(){
        return(
            <div className="container">
                <div className="row">
                    <div className="col-md-10 col-md-offset-2">
                        <blockquote>
                            <form>
                                <div className="form-group">
                                    <div className="col-md-8">
                                        <input type="text" className="form-control" ref="todo" placeholder="Enter your message.."/>
                                    </div>
                                    <div className="col-md-2 ">
                                        <button type="button" className="btn btn-success" onClick={this.createTodo}>Send</button>
                                    </div>
                                </div>
                            </form>
                        </blockquote>
                    </div>
                </div>
            </div>
        );
    }
}

export default TodoList;