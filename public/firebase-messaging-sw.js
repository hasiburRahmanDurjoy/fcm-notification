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

messaging.onBackgroundMessage(function (payload) {
  console.log("Received background message ", payload);

  const notificationTitle = payload.notification.title;
  const notificationOptions = {
    body: payload.notification.body,
    icon: "/logo192.png",
  };

  return self.registration.showNotification(
    notificationTitle,
    notificationOptions
  );
});
