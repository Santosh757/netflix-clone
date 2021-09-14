import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyD6Eqrxv5yg-sUInpMP31CnRkcy64Uur-M",
    authDomain: "snetflix-7f942.firebaseapp.com",
    projectId: "snetflix-7f942",
    storageBucket: "snetflix-7f942.appspot.com",
    messagingSenderId: "355655835132",
    appId: "1:355655835132:web:8fa868353fc77f57fba679"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
const db = firebaseApp.firestore();

export { auth };
export default db;