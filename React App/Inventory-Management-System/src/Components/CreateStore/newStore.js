import React, { Component } from 'react';
import * as mat from 'material-ui';
import { NewStoreAction } from '../../Actions/newStoreAction';
import { connect } from 'react-redux';

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

class CreateNewStore extends Component {
    constructor(props) {
        super(props);
        this.NewStores = this.NewStores.bind(this);
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
        this.props.NewStoreAction(NewStores);
         storeName = this.refs.storeName.value=" ";
         location = this.refs.location.value=" ";
    }
    render() {
        return (
            <div>
                <center>
                    <mat.Card style={styles.card} zDepth={2}>
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
                                    <button type="submit" className="btn btn-info custom-button col-md-12">Create Store</button>
                                </div>
                            </form>
                        </mat.CardText>
                    </mat.Card>
                </center>
            </div>
        )
    }
}


const mapStateToProps = (state) => {
    return {
        newStores: state.StoreReducers.newStore
    };
}
const mapDispatchToProps = (dispatch) => {
    return {
        NewStoreAction: (NewStores) => {
            dispatch(NewStoreAction(NewStores));
        }
    };
}
export default connect(mapStateToProps, mapDispatchToProps)(CreateNewStore);
// export default CreateNewStore;