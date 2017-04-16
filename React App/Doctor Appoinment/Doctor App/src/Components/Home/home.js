import React, { Component } from 'react'
import { connect } from 'react-redux';
import * as mat from 'material-ui';
import {DoctorsActions} from '../../Actions/DoctorsActions'
// import { Link } from 'react-router';

const styles = {
    card: {
        width: '65%',
        height: 'auto',
        position: 'relative',
        top: '50px'
    },
    store: {
        textAlign: 'left'
    }
}
const style = {
    margin: 12,
};
class Home extends Component {
    constructor(props) {
        super(props);
        this.dotorsAllData=this.dotorsAllData.bind(this);
        this.Appointement=this.Appointement.bind(this);
    }
    dotorsAllData(){
        this.props.DoctorsActions()
    }
    Appointement(){
        console.log("Appointement")
    }
    state = {
        value: 1,
    };

    handleChange = (event, index, value) => this.setState({ value });

    render() {

        let DoctorObj = Object.keys(this.props.DoctorsDetails).map((key, index) => {
            let val = this.props.DoctorsDetails[key];
            return (
                <mat.Paper style={style} zDepth={1} key={index} >
                    <mat.List >
                        <mat.ListItem
                            disabled={true}
                            leftAvatar={
                                <mat.Avatar src="" />
                            }
                        >
                            <span ><b>{val.name}</b></span>
                            <span style={styles.status}>{val.hosp}</span><br />
                            <span style={styles.email}>{val.email}</span>
                            <span style={styles.status}>{val.number}</span><br />

                            <mat.FlatButton
                                label="Appointement"
                                onClick={this.Appointement}
                                style={styles.FlatButton}
                            />
                        </mat.ListItem>
                    </mat.List>
                </mat.Paper>
            )
        })
        console.log('Doctors info', this.props.DoctorsDetails)
        return (
            <div>
                <center>
                    <h2>Welcome</h2>
                    <mat.Card style={styles.card} zDepth={2}>
                        <mat.AppBar style={styles.store} title="Select Your Surgeon " showMenuIconButton={false} />
                        <mat.CardText>
                            <mat.RaisedButton label="Availible Doctors" onClick={this.dotorsAllData} primary={true} style={style} />
                            {DoctorObj}
                        </mat.CardText>
                    </mat.Card>

                    {this.props.children}
                </center>
            </div>
        )
    }
}


const mapStateToProps = (state) => {
    return {
        DoctorsDetails: state.DoctorsReducers.DoctorsObjs
    };
}
const mapDispatchToProps = (dispatch) => {
    return {
        DoctorsActions: () => {
            dispatch(DoctorsActions());
        }
    };
}
export default connect( mapStateToProps,mapDispatchToProps)(Home);
// export default Home;