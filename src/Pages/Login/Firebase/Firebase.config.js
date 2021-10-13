// console.log(process.env);
const firebaseConfig = {
    apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
    authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
    projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
    storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
    appId: process.env.REACT_APP_FIREBASE_APP_ID,
};

export default firebaseConfig;



    /* apiKey: "AIzaSyA4nv1FIc-7vZqkM7ICfHoZQDc5heUlK8I",
    authDomain: "the-car-doctor-e45ab.firebaseapp.com",
    projectId: "the-car-doctor-e45ab",
    storageBucket: "the-car-doctor-e45ab.appspot.com",
    messagingSenderId: "179512592365",
    appId: "1:179512592365:web:01af6649881f20b1e809e4", */