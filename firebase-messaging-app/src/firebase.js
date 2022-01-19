import { initializeApp, } from "firebase/app";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const config = {
  apiKey: "AIzaSyDgKyFNY9j9wX8la2Lip2fgziunc7ZkLmk",
  authDomain: "fir-messaging-bf2a7.firebaseapp.com",
  projectId: "fir-messaging-bf2a7",
  storageBucket: "fir-messaging-bf2a7.appspot.com",
  messagingSenderId: "401633162521",
  appId: "1:401633162521:web:bc76343210319d2236c188"
};
// Initialize Firebase
const app = initializeApp(config);

export default app;