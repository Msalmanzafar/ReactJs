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
        // console.log("Sales Product", SalePro);
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

export function ProductPrice(SelectedProduct) {
    return dispatch => {
        firebase.database().ref('/StoresProducts/').on('child_added', (data) => {
            let obj = data.val();
            // console.log("Sales obj---", obj);
            if (SelectedProduct === obj.productName) {
                // console.log("selected Product ", obj)
                dispatch(SelectedPriceProduct(obj))
            }
        })
    }
}


function SelectedPriceProduct(payload){
    return{
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