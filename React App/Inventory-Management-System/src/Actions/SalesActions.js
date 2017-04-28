import ActionTypes from './ActionTypes';
import * as firebase from 'firebase';


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
        console.log("Sales Product---", SalePro);
        firebase.database().ref('SaledProducts/').push(SalePro)
            .then(() => {
                alert('Product Saled');
                console.log('Product Saled');
                // browserHistory.push('/home')
            })
            .catch(() => {
                console.log('check user email and password')
            })
    }
}

export function UpgradeProducts(Objects, SalePro) {
    return dispatch => {
        // console.log("Objects=======",Objects)
        // console.log("SalePro=======",SalePro)
        
        Objects.quantity = Objects.quantity - SalePro.quantity;
        let updateKey = Objects.prokey;
        firebase.database().ref('/StoresProducts/' + updateKey + '/').set(Objects)
            .then(() => {
                alert("data status set");
            })
            .catch((error) => {
                var errorMessage = error.message;
                alert(errorMessage);
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
            dispatch(SaledList(obj));
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