import { handleActions } from 'redux-actions';

const AUTHENTICATION = 'reducer/AUTHENTICATION';
const UPDATEDONER = 'reducer/UPDATEDONER'
module.exports = {
    authentication: () => ({
        type: AUTHENTICATION
    }),
    updateDoner: (doners) => ({
        type: UPDATEDONER,
        doners
    }),
    reducer: handleActions({
        [AUTHENTICATION]: (state, action) => ({
            ...state,
            authenticated: !state.authenticated
        }),
        [UPDATEDONER]: (state, action) => ({
            ...state,
            doners: action.doners
        })
    }, {
            doners: [],
            authenticated: false
        })
}