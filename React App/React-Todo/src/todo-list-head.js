import React,{Component} from 'react';



class TodoListHead extends Component {
    render(){
        return(
            <thead>
                <tr>
                    <th className="text-center">Task</th>
                    <th className="text-center">Action</th>
                </tr>
            </thead>
        );
    }
}

export default TodoListHead;