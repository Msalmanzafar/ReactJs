import React, {Component} from 'react';
import TextField from 'material-ui/TextField';
import Paper from 'material-ui/Paper';
import RaisedButton from 'material-ui/RaisedButton';
// import TimePicker from 'material-ui/TimePicker';
import {CrimeAction} from  '../../action/complaint-action'
import {connect} from 'react-redux';
const style = {
  height: 'auto',
  width: 500,
  margin: 20,
  padding: 30,
  textAlign: 'center',
  display: 'inline-block',
};
const style3 = {
  width: 400,
  textAlign: 'left',
  fontSize: 15
};
const style2 = {
  marginTop: 15,
};

class ForCrimes extends Component{
    constructor(props) {
        super(props);
        this.crime = this.crime.bind(this);
        // this.state = { value12: null};
    }
    crime(){
        let crimeObj={
            name: this.refs.fname.getValue(),
            currentAddress: this.refs.Caddress.getValue(),
            eventLocation: this.refs.event.getValue(),
            details: this.refs.details.getValue()
        }
        // console.log(complaint);
        this.props.CrimeAction(crimeObj);
        
    }
    // handleChangeTimePicker12 = (event, date) => {
    //     this.setState({value12: date});
    // };
    render(){
        console.log('complaints reducer',this.props.complain)
        return(
            <div>
                <center>
                    <Paper style={style} zDepth={3} rounded={true} >
                        <div>
                            <h3>Register Crime Report</h3>
                        </div>
                        <TextField 
                            hintText="Enter full name.."
                            type="text"
                            floatingLabelText="Your name"
                            style={style3}
                            ref="fname"
                        />
                        <TextField 
                            hintText="Enter your address.."
                            type="text"
                            floatingLabelText="Your current address"
                            style={style3}
                            ref="Caddress"
                        />
                        <TextField 
                            hintText="Enter address where event accur.."
                            type="text"
                            floatingLabelText="Event occur at.!"
                            style={style3}
                            ref="event"
                        />
                        {/*<TimePicker
                            format="ampm"
                            hintText="12hr Format"
                            value={this.state.value12}
                            onChange={this.handleChangeTimePicker12}
                        />*/}
                        <TextField 
                            hintText="Your event must be contain 100 or above character.."
                            type="text"
                            floatingLabelText="Enter your event"
                            style={style3}
                            ref="details"
                            multiLine={true}
                        />
                        <RaisedButton 
                            label="Submit" 
                            labelColor="#fcfaf6" 
                            backgroundColor="#00796b" 
                            onClick={this.crime}
                            style={style2}
                        />
                        
                    </Paper>
                </center>
            </div>
        );
    }
}
const mapStateToProps =(state) =>{
    return{
        complain: state.ComplaintReducers
    };
}
const mapDispatchToProps =(dispatch) =>{
    return{
        CrimeAction: (crimeObj) =>{
            dispatch(CrimeAction(crimeObj))
        }
    };
}
export default connect(mapStateToProps,mapDispatchToProps)(ForCrimes);
// export default ForCrimes;