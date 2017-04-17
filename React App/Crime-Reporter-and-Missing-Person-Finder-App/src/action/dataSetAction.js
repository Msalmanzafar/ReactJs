import * as firebase from 'firebase';

export function StatusSetForAdmin(data) {
    return dispatch => {
        // console.log("datat set status", data)
        // console.log('kesy for set',data.objKey)
        let clickKey = data.objKey;
        delete data['objKey'];
        
        firebase.database().ref('Complaints/' + clickKey + '/' ).set(data)
            .then(() => {
                console.log("data status set")
            })
            .catch((error) => {
                var errorMessage = error.message;
                console.log(errorMessage);
            });

    }
}

