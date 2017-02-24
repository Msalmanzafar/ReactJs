import React, {Component} from 'react';

class NavBar extends Component{
    render(){
        return(
            <nav className="navbar navbar-inverse">
                <div className="container-fluid">
                    <div className="navbar-header">
                        <h1 className="navbar-brand">ReactJs Todo App</h1>
                    </div>    
                </div>
            </nav>
        );
    }
} 

export default NavBar;