import firebase from 'firebase';

const config = {
    apiKey: "AIzaSyArVpiyJ0wPxATriQBnPzvbCqjIBVWSppc",
    authDomain: "sky-auth.firebaseapp.com",
    databaseURL: "https://sky-auth.firebaseio.com",
    storageBucket: "sky-auth.appspot.com",
    messagingSenderId: "936918632809"
};
firebase.initializeApp(config);

const database = firebase.database();
export default database;

database.ref('/').once('value', snap =>{
    const invite = snap.val();
});