import ActionTypes from './ActionTypes';
import * as firebase from 'firebase';
// import { browserHistory } from 'react-router';

export function LoaderAction() {
    return dispatch => {
        dispatch(LoaderDispatch());
    }
}

export function SalesProductsAction() {
    return dispatch => {
        firebase.database().ref('StoresProducts/').on('value', (data) => {
            let obj = data.val();
            dispatch(SalesActionDispatch(obj));
        })
    }
}


export function SaledProducts(SalePro) {
    return dispatch => {
        // console.log("Sales Product---", SalePro);
        firebase.database().ref('SaledProducts/').push(SalePro)
            .then(() => {
                dispatch(LoaderDispatch());
                alert('Product Saled');
            })
            .catch(() => {
                dispatch(LoaderDispatch());
                alert('check user email and password')
            })
    }
}

export function UpgradeProducts(Objects, SalePro) {
    return dispatch => {
        // console.log("Objects=======",Objects)
        // console.log("SalePro=======",SalePro)
        let Avail = Objects.quantity;
        let sale = SalePro.quantity;
        Objects.quantity = Avail - sale;
        let updateKey = Objects.prokey;
        delete Objects['prokey'];
        firebase.database().ref('/StoresProducts/' + updateKey + '/').set(Objects)
            .then(() => {
                // alert("data status set");
                // browserHistory.push('/salesdetails')

            })
            .catch((error) => {
                // var errorMessage = error.message;
                // alert(errorMessage);
                console.log('Server Erorr')
            });
    }
}

export function ProductPrice(SelectedProduct) {
    return dispatch => {
        firebase.database().ref('/StoresProducts/').on('child_added', (data) => {
            let obj = data.val();
            obj.prokey = data.key;
            if (SelectedProduct === obj.productName) {
                // console.log("selected Product ", obj)
                dispatch(SelectedPriceProduct(obj))
            }
        })
    }
}


export function SaledListActions() {
    return dispatch => {
        firebase.database().ref('SaledProducts/').on('value', (data) => {
            let obj = data.val();
            if (obj !== null) {
                dispatch(LoaderDispatch());
                dispatch(SaledList(obj));
            } else {
                dispatch(LoaderDispatch());                
                dispatch(SaledList({}));
            }

        })
    }
}


function SaledList(payload) {
    return {
        type: ActionTypes.SaledListAction,
        payload
    }
}
function SelectedPriceProduct(payload) {
    return {
        type: ActionTypes.SelectedProducts,
        payload
    }
}
function SalesActionDispatch(payload) {
    return {
        type: ActionTypes.SalesAction,
        payload
    }
}
function LoaderDispatch() {
    return {
        type: ActionTypes.LoaderActions,
    }
}