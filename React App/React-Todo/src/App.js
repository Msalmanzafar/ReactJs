import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
// import injectTapEventPlugin from 'react-tap-event-plugin';
import AppBar from 'material-ui/AppBar';
import TextField from 'material-ui/TextField';
// import {orange500, blue500} from 'material-ui/styles/colors';
import RaisedButton from 'material-ui/RaisedButton';
import {Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn} from 'material-ui/Table';


const style = {
  margin: 12,
};


class TodoList extends Component{
  
  render(){
    console.log(this.props.tempArray)
    return(
      <div>
        <h1>hello</h1>
          {/*<MuiThemeProvider>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHeaderColumn>Item</TableHeaderColumn>
                    <TableHeaderColumn>Option</TableHeaderColumn>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {this.state.tempArray.map((v,i)=>{
                      <TableRow key={i}>
                        <TableRowColumn>{v}</TableRowColumn>
                        <TableRowColumn>Delete</TableRowColumn>
                      </TableRow>
                  })}
                </TableBody>
              </Table>
          </MuiThemeProvider>*/}
      </div>
    );
  }
}



class App extends Component {
  constructor(props){
    super(props);
    this.addTodo = this.addTodo.bind(this);
    this.state={
      render:0,
      tempArray: []
    } 
    
  }
  TodoArray =[];
  addTodo(){
    let todo = this.refs.todoValue.getValue();
    this.TodoArray = this.TodoArray.concat(todo);
    // console.log(this.TodoArray);
    this.setState({
      tempArray: this.TodoArray
    });
  }
  render() {
    console.log("state Array",this.state.tempArray);
    return (
      <div>
        <MuiThemeProvider>
          <AppBar title=" React Todo"
            iconClassNameRight="muidocs-icon-navigation-expand-more"
          />

        </MuiThemeProvider>
        <MuiThemeProvider>
          <TextField
            hintText="Write your todo.."
            ref="todoValue"            
          />
        </MuiThemeProvider>
        <MuiThemeProvider>
          <RaisedButton onClick={this.addTodo}  label="Add Todo" primary={true} style={style} />
        </MuiThemeProvider>
        <div>
          <TodoList/>
        </div>
      </div>
    );
  }
}

export default App;
