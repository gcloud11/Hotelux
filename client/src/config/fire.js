import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyAAUE5-45KPxoqJ4SB-_jf2vb-8rf-v6ck",
    authDomain: "rentown-31d67.firebaseapp.com",
    projectId: "rentown-31d67",
    storageBucket: "rentown-31d67.appspot.com",
    messagingSenderId: "203246116658",
    appId: "1:203246116658:web:c35a04529da3da0a98c12b",
    measurementId: "G-6V73B7LDCP"
};

const fire = firebase.initializeApp(firebaseConfig);

export default fire;
