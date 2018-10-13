import firebase from 'firebase';

const config = {
    apiKey: "AIzaSyDtMJMCIlCEPJV9cVUDtbusEbSykErdKrQ",
    authDomain: "dinnerbell-7f485.firebaseapp.com",
    databaseURL: "https://dinnerbell-7f485.firebaseio.com",
    projectId: "dinnerbell-7f485",
    storageBucket: "dinnerbell-7f485.appspot.com",
    messagingSenderId: "822101088560"
  };

  firebase.initializeApp(config);
  export default firebase;