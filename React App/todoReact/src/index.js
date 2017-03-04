import React from 'react';
import ReactDOM from 'react-dom';
import * as firebase from 'firebase';

  // Initialize Firebase



class Todo extends React.Component{
  constructor(props){
    super(props);
    this.addTodo = this.addTodo.bind(this);
    this.deleteAll = this.deleteAll.bind(this);
        this.delete = this.delete.bind(this);
    this.state = {
      todoItems: [],
      
    } 
  }
  
  addTodo(ev){
    ev.preventDefault();
    var todoItems = this.state.todoItems;
    var item = this.refs.item.value;
    todoItems.push(item);
    this.setState({
      todoItems : todoItems
    })
      this.refs.item.value = "";
      console.log(this.state.todoItems);
  }
  
  deleteAll(ev){
    ev.preventDefault();
    this.setState({
      todoItems: []
    })
  }
  delete(ev){
    ev.preventDefault();
    console.log(ev.target.id);
    var todoItems = this.state.todoItems;
    console.log(ev.target.id);
    todoItems.splice(ev.target.id,1);
    this.setState({
      todoItems : todoItems
    })
    console.log(this.state.todoItems);
  }


  render(){
 
    return (
      <div>
		  <h1>Todo List</h1>
			<form>
				<input type="text" ref="item" />
				<button onClick={this.addTodo}>Add</button>
				<input type="button" value="Delete All" onClick={this.deleteAll} />
			</form>
			{this.state.todoItems.map((v,i) => {
				return(	
					<ul key={i}>
						<li >{v}  <button id={i} onClick={this.delete}>Delete</button></li>
					</ul>
				)
			})}
      </div>
    )
  }
}



ReactDOM.render(
  <Todo />,
  document.getElementById('root')
);
