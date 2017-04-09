import React, { Component } from 'react';
import * as mat from 'material-ui';
import NewStoreAction from '../../Actions/newStoreAction';

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
const style3 = {
    width: "100%",
};
const style2 = {
    margin: 12,
};

class CreateNewStore extends Component {
    constructor(props) {
        super(props);
        this.NewStores = this.NewStores.bind(this);
    }
    NewStores(ev) {
        ev.preventDefault();
        let Store = {
            storeName: this.refs.storeName.value,
            location: this.refs.location.value,
        }
        //  console.log(Store);
        this.props.NewStoreAction(Store);
    }
    render() {
        return (
            <div>
                <center>
                    <mat.Card style={styles.card} zDepth={2}>
                        <mat.AppBar style={styles.store} title="Create Store" showMenuIconButton={false} />
                        <mat.CardText>
                            <form onSubmit={this.NewStores} style={styles.store}>
                                {/*<mat.TextField
                                    hintText="Store Name"
                                    type="text"
                                    floatingLabelText="Your Store Name"
                                    style={style3}
                                    ref="storeName"
                                /><br />
                                <mat.TextField
                                    hintText="Location"
                                    type="text"
                                    floatingLabelText="Store Location"
                                    style={style3}
                                    ref="location"
                                /><br /><br />
                                <mat.RaisedButton 
                                    type="submit" 
                                    label="Create Store" 
                                    primary={true}
                                    style={style2}
                                />*/}
                                <div className="form-group " >
                                    <label htmlFor="store">Store name</label>
                                    <input type="text" className="form-control" ref="storeName" placeholder="Create new store" />
                                </div>
                                <div className="form-group ">
                                    <label htmlFor="location">Store location</label>
                                    <input type="text" className="form-control" ref="location" placeholder="Store location" />
                                </div>
                                <div className="form-group ">
                                    <button type="submit" className="btn btn-info custom-button">Create Store</button>
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
        auth: state.AuthReducer.authSignIn
    };
}
const mapDispatchToProps = (dispatch) => {
    return {
        NewStoreAction: (Store) => {
            dispatch(NewStoreAction(Store));
        }
    };
}
export default connect(mapStateToProps, mapDispatchToProps)(CreateNewStore);
// export default CreateNewStore;