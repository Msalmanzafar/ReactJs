import React, { Component } from 'react';
import * as mat from 'material-ui';
import { NewStoreAction, LoaderAction } from '../../Actions/newStoreAction';
import { connect } from 'react-redux';
import './style.css'


const styles = {
    // card: {
    //     width: '90%',
    //     height: 'auto',
    //     position: 'relative',
    //     top: '50px'
    // },
    store: {
        textAlign: 'left'
    }
}

class CreateNewStore extends Component {
    constructor(props) {
        super(props);
        this.NewStores = this.NewStores.bind(this);
        this.state={
            successMes: '',
            openFlag: false
        }
    }
    NewStores(ev) {
        ev.preventDefault();
        let storeName = this.refs.storeName.value;
        let location = this.refs.location.value;
        let NewStores = {
            storeName: storeName,
            location: location,
        }
        //  console.log(NewStores);
        this.props.LoaderAction();
        this.props.NewStoreAction(NewStores);
        storeName = this.refs.storeName.value = " ";
        location = this.refs.location.value = " ";
    }
    componentWillReceiveProps(nextProps){
        this.setState({
            successMes: nextProps.success,
            openFlag: nextProps.successFlag
        })
    }
    render() {
        // const{
        //     successFlag,
        //     success
        // } = this.props;
        return (
            <div>
                <center>
                    <mat.Card className='card' zDepth={2}>
                        <mat.AppBar style={styles.store} title="Create Store" showMenuIconButton={false} />
                        <mat.CardText>
                            <form onSubmit={this.NewStores} style={styles.store}>
                                <div className="form-group " >
                                    <label htmlFor="store">Store name</label>
                                    <input type="text" className="form-control" ref="storeName" placeholder="Create new store" />
                                </div>
                                <div className="form-group ">
                                    <label htmlFor="location">Store location</label>
                                    <input type="text" className="form-control" ref="location" placeholder="Store location" />
                                </div>
                                <div className="form-group ">
                                    <mat.RaisedButton type="submit" label="Create Store" primary={true} />

                                    {/*<button type="submit" className="btn btn-info custom-button ">Create Store</button>*/}
                                </div>
                            </form>
                        </mat.CardText>
                    </mat.Card>
                </center>
                <mat.Snackbar
                    open={this.state.openFlag}
                    message={this.state.successMes}
                    contentStyle={{ color: '#ffffff' }}
                    autoHideDuration={3000}
                    bodyStyle={{ backgroundColor: '#68bc00', width: 200 }}
                // onRequestClose={this.handleRequestClose}
                />
            </div>
        )
    }
}


const mapStateToProps = (state) => {
    return {
        newStores: state.StoreReducers.newStore,
        successFlag: state.newStore.messageFlag,
        success: state.newStore.messageAction
    };
}
const mapDispatchToProps = (dispatch) => {
    return {
        LoaderAction: () => {
            dispatch(LoaderAction());
        },
        NewStoreAction: (NewStores) => {
            dispatch(NewStoreAction(NewStores));
        }
    };
}
export default connect(mapStateToProps, mapDispatchToProps)(CreateNewStore);
// export default CreateNewStore;