/**
 * Created by Anonmous on 2/27/2017.
 */
import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyCslkualnqZJfOSyA7iJq3Z2DGsgDg9yWQ",
    authDomain: "smartbook-1448a.firebaseapp.com",
    databaseURL: "https://smartbook-1448a.firebaseio.com",
    storageBucket: "smartbook-1448a.appspot.com",
    messagingSenderId: "781733301084"
};


export const firebaseApp = firebase.initializeApp(firebaseConfig);
export const firebaseAuth = firebaseApp.auth();
export const firebaseDb = firebaseApp.database();