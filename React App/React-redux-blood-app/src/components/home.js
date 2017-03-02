import React, {Component} from 'react';
import { connect } from 'react-redux';
import * as firebase from 'firebase';
 import Doners from './doners';


class Home extends Component{
    constructor(props){
        super(props);
        this.searchUser = this.searchUser.bind(this);
    }

    searchUser(ev){
        ev.preventDefault();
        let currentUser = firebase.auth().currentUser;
        let searchDoner = this.refs.search.value;
        
        // console.log(doner);
        // console.log(currentUser.uid, 'currentUser here');
        // firebase.database().ref('doners/')
        //     .then((v) => {
        //         this.refs.search.value = '';
        //     })

    }
    render(){
        return(
            <div>
                <div className="container">
                    <div className="col-md-10 col-md-offset-1">
                        <form action="">
                            <input id="search" type="text" name="search" ref="search" placeholder="Search.."/>
                            <button className="btn btn-primary search"  onClick={this.searchUser}>Search</button>
                        </form>
                    </div>
                </div>
                <br /> <br />
                <Doners />
                <div>
                </div>
            </div >
        );
    }
}

export default connect()(Home);