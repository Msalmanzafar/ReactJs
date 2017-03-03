import React, {Component} from 'react';
import { connect } from 'react-redux';
import * as firebase from 'firebase';
 import Doners from './doners';
import TempDoners from './temp-doners';






class Home extends Component{
    constructor(props){
        super(props);
        this.searchOption = this.searchOption.bind(this);
        this.state={
            rerender:0,
            arr: null
        }
    }
    tempArray = [];
    searchOption(ev){
        ev.preventDefault();
        let currentUser = firebase.auth().currentUser;
        let searchDoner = this.refs.search.value;
        
        let firebaseData = this.props.doners;
        // console.log("firebaseData",firebaseData);
        
        if(searchDoner === 'A+'){
            for(let i=0; i < firebaseData.length; i++){
                if((firebaseData[i].blood === 'A+' || firebaseData[i].blood === 'AB+' ) 
                    && currentUser.uid !== firebaseData[i].id){
                        this.tempArray = this.tempArray.concat(firebaseData[i]);
                }
            }
        }
        if(searchDoner === 'B+'){
            for(let i=0; i < firebaseData.length; i++){
                if((firebaseData[i].blood === 'B+' || 
                    firebaseData[i].blood === 'AB+') && currentUser.uid !== firebaseData[i].id){
                    this.tempArray = this.tempArray.concat(firebaseData[i]);
                }
            }
        }
        if(searchDoner === 'O+'){
            for(let i=0; i < firebaseData.length; i++){
                if((firebaseData[i].blood === 'B+' || firebaseData[i].blood === 'A+' ||
                    firebaseData[i].blood === 'AB+' || firebaseData[i].blood === 'O+' )
                    && currentUser.uid !== firebaseData[i].id){
                    this.tempArray = this.tempArray.concat(firebaseData[i]);
                }
            }
        }
        if(searchDoner === 'AB+'){
            for(let i=0; i < firebaseData.length; i++){
                if((firebaseData[i].blood === 'AB+') && currentUser.uid !== firebaseData[i].id){
                    this.tempArray = this.tempArray.concat(firebaseData[i]);
                }
            }
        }
        if(searchDoner === 'AB-'){
            for(let i=0; i < firebaseData.length; i++){
                if((firebaseData[i].blood === 'AB-') && currentUser.uid !== firebaseData[i].id){
                    this.tempArray = this.tempArray.concat(firebaseData[i]);
                }
            }
        }
        if(searchDoner === 'A-'){
            for(let i=0; i < firebaseData.length; i++){
                if((firebaseData[i].blood === 'A-' || firebaseData[i].blood === 'A+' ||
                    firebaseData[i].blood === 'AB+' || firebaseData[i].blood === 'AB-' ) 
                        && currentUser.uid !== firebaseData[i].id){
                    this.tempArray = this.tempArray.concat(firebaseData[i]);
                }
            }
        }
        if(searchDoner === 'B-'){
            for(let i=0; i < firebaseData.length; i++){
                if((firebaseData[i].blood === 'B-' || firebaseData[i].blood === 'B+' ||
                    firebaseData[i].blood === 'AB+' || firebaseData[i].blood === 'AB-' ) 
                        && currentUser.uid !== firebaseData[i].id){
                    this.tempArray = this.tempArray.concat(firebaseData[i]);
                }
            }
        }
        if(searchDoner === 'O-'){
            for(let i=0; i < firebaseData.length; i++){
                if((firebaseData[i].blood === 'O-' ) && currentUser.uid !== firebaseData[i].id){
                    this.tempArray = this.tempArray.concat(firebaseData[i]);
                }
            }
        }
        
        console.log("searchData",this.tempArray);
         this.setState({
            arr:this.tempArray
        });
    }
    render(){
        return(
            <div>
                <div className="container">
                    <div className="col-md-10 col-md-offset-1">
                        <div className="form-group">
                                <label className="col-md-4 control-label" htmlFor="group">Search:</label><br/>
                                <div className="col-md-10">
                                    <select ref="search" onChange={this.searchOption} className="multiselect-ui form-control" >
                                         <option value="default">Select blood group</option>
                                        <option value="A+">A+</option>
                                        <option value="B+">B+</option>
                                        <option value="O+">O+</option>
                                        <option value="AB+">AB+</option>
                                        <option value="A-">A-</option>
                                        <option value="B-">B-</option>
                                        <option value="O-">O-</option>
                                        <option value="AB-">AB-</option>
                                    </select>
                                </div>
                            </div>
                    </div>
                </div>
                <br /> <br />

                {
                    (this.state.arr !=null) ? <TempDoners data={this.tempArray} /> : <Doners />}

                
                {/*<div className="container">
                    <div className="col-md-10">
                        {this.props}
                    </div>
                </div>*/}
                <div>
                </div>
            </div >
        );
    }
}

export default connect(state => ({
    doners: state.doner.doners
}))(Home);