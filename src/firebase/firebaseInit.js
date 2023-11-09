import firebase from "firebase/app";
import 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyCc56C1Vrf9hg2-n2TlUJWq7Tmyje33f-c",
    authDomain: "fireblogsvue-43f1f.firebaseapp.com",
    projectId: "fireblogsvue-43f1f",
    storageBucket: "fireblogsvue-43f1f.appspot.com",
    messagingSenderId: "753473972387",
    appId: "1:753473972387:web:05af724ddfa2d152c8b716"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export {timestamp};
export default firebaseApp.firestore();