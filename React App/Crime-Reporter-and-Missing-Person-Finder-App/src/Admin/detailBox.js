import React, {Component} from 'react';
import {connect} from 'react-redux';
import * as mat from 'material-ui'



const style = {
    height: 100,
    width: 450,
    margin: 20,
    textAlign: 'left',
    display: 'inline-block',
    marginTop: '-15px'
};
const styles = {
    FlatButton: {
        float: 'right'
    },
    email: {
        color: '#74847c'
    },
    status: {
        float: 'right',
        color: '#74847c'
    },
    customWidth: {
        width: 90,
    },

}
// const heading = {
//     height: '45px',

// }

class AllDeatilsReport extends Component{
    render(){
        /*let adminAllDetails = Object.keys(this.props.Status).map((key, index) => {
            let val = this.props.Status[key];
            // console.log('All key', index);
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
                            <span style={styles.status}>{val.crimeType}</span><br />
                            <span style={styles.status}>{val.status}</span>
                            <span style={styles.email}>{val.emailId}</span><br />
                            <mat.FlatButton
                                label="Details"
                                style={styles.FlatButton}
                                onClick={this.Details}
                            />
                        </mat.ListItem>
                    </mat.List>
                </mat.Paper>
            )
        })*/
        console.log('filter--',this.props.tempD);
        return(
            <div>
                Data
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        tempD: state.StatusReducer.tempDetails
    };
}
export default connect(mapStateToProps)(AllDeatilsReport);
// export default AllDeatilsReport;