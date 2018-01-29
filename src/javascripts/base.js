import firebase from "firebase";

const config = {
  apiKey: "AIzaSyD8oNRW1zrHrjaEbx3X_8q0kOb3hpkrl-4",
  authDomain: "asana-xavier.firebaseapp.com",
  databaseURL: "https://asana-xavier.firebaseio.com"
};

firebase.initializeApp(config);
const database = firebase.database();

export default database;
