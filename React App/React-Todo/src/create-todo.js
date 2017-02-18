import React, {Component} from 'react';

class CreateTodo extends Component {
    render(){
        return(
            
            <form >
                <input type="text" placeholder="Create something new..."/>
                <button className="btn btn-info">Create</button>
            </form>
        );
    }
}

export default CreateTodo; 