import React, { Component } from 'react';

class TodoList extends Component{
    render(){
        return(
            <div className="container">
                <div className="row">
                    <div className="col-md-10 col-md-offset-2">
                        <blockquote>
                            <form>
                                <div className="form-group">
                                    <div className="col-md-8">
                                        <input type="text" className="form-control" placeholder="Enter your message.."/>
                                    </div>
                                    <div className="col-md-2 ">
                                        <button type="button" className="btn btn-success">Send</button>
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