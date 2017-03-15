import React, {Component} from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import {Link} from 'react-router'

const style = {
  margin: 12,
};


class Home extends Component{
    render(){
        return(
            <div>
                    <Link to='/forComplaints'>
                        <RaisedButton label="Complaints" 
                            labelColor="#fcfaf6" 
                            backgroundColor="#b71c1c" 
                            style={style} 
                        />
                    </Link>
                   
                    <Link to='/for-procurer'>
                        <RaisedButton label="Crimes" 
                            labelColor="#fcfaf6" 
                            backgroundColor="#0288d1" 
                            style={style} 
                        />
                    </Link>
                    
                    <Link to='/for-procurer'>
                        <RaisedButton label="Missing Persons" 
                            labelColor="#fcfaf6" 
                            backgroundColor="#0288d1" 
                            style={style} 
                        />
                    </Link>
                    <div>
                        {this.props.children}
                    </div>
            </div>
        );
    }
}

export default Home;