import firebase from "firebase/app";
import "firebase/messaging";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCw7H0gEzvhY8IP-XLXpmrJ9P8_BunGO3g",
  authDomain: "movie-colab-stage.firebaseapp.com",
  databaseURL: "https://movie-colab-stage.firebaseio.com",
  projectId: "movie-colab-stage",
  storageBucket: "movie-colab-stage.appspot.com",
  messagingSenderId: "288551574178",
  appId: "1:288551574178:web:02cbff11b17db1ca1c55fb",
  measurementId: "G-MHEQML31XP"
};

firebase.initializeApp(firebaseConfig);

const messaging = firebase.messaging();

const publicKey = 'BJnFbwpjxc700I-6T1GJmO3DGTP5SkOt73Au46m8D6kXHcDZz2gZzqDokmShA9PYgdsK0OR4hngKdWhiSrnVa8g';


export const getToken = async (setTokenFound) => {
  let currentToken = "";
  try {
    currentToken = await messaging.getToken({ vapidKey: publicKey });
    if (currentToken) {
      setTokenFound(true);
    } else {
      setTokenFound(false);
    }
  } catch (error) {
    console.log("An error occurred while retrieving token. ", error);
  }
  return currentToken;
};

export const onMessageListener = () =>
  new Promise((resolve) => {
    messaging.onMessage((payload) => {
      resolve(payload);
    });
  });
