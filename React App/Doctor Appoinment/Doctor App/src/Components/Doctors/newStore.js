import React, { Component } from 'react';
import * as mat from 'material-ui';
// import { NewStoreAction } from '../../Actions/newStoreAction';
// import { connect } from 'react-redux';

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
    // constructor(props) {
    //     super(props);
    // }
   
    render() {
        return (
            <div>
                <center>
                    <mat.Card style={styles.card} zDepth={2}>
                        <mat.AppBar style={styles.store} title="Appoinments" showMenuIconButton={false} />
                        <mat.CardText>
                                <div>
                                    <table>
                                        <tr>
                                            <th>Name</th>
                                            <th>P-id</th>
                                            <th>Address</th>
                                        </tr>
                                        <tr>
                                            <td>Ali</td>
                                            <td>022</td>
                                            <td>Steel Town</td>
                                        </tr>
                                    </table>
                                </div>
                        </mat.CardText>
                    </mat.Card>
                </center>
            </div>
        )
    }
}


// const mapStateToProps = (state) => {
//     return {
//         newStores: state.StoreReducers.newStore
//     };
// }
// const mapDispatchToProps = (dispatch) => {
//     return {
//         NewStoreAction: (NewStores) => {
//             dispatch(NewStoreAction(NewStores));
//         }
//     };
// }
// export default connect(mapStateToProps, mapDispatchToProps)(CreateNewStore);
export default CreateNewStore;