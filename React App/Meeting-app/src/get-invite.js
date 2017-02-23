import ActionType from './action_type';
import database from './database';

export function getInvite(){
    return dispatch =>{
        dispatch(getInviteRequestedAction());
        return database.ref('/').once('value', snap=>{
            const invite = snap.val();
            dispatch(getInviteFulfilledAction(invite))
        })
        .catch((error) => {
            console.log(error);
            dispatch(getInviteRejectedAction());
        });
    }
}

function getInviteRequestedAction(){
    return{
        type: ActionType.GetInviteRequested
    };
}

function getInviteRejectedAction(){
    return{
        type: ActionType.GetInviteRejected
    };
}

function getInviteFulfilledAction(invite){
    return{
        type: ActionType.GetInviteFulfilled,
        invite
    };
}