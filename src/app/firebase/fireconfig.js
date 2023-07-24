
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
function FirebaseConfig(){
  const firebaseConfig = {
    apiKey: "AIzaSyDH6yFBxq-yrjtpc0h2pwK1_3XwPsThUko",
    authDomain: "fundog-baaa1.firebaseapp.com",
    projectId: "fundog-baaa1",
    storageBucket: "fundog-baaa1.appspot.com",
    messagingSenderId: "753141650684",
    appId: "1:753141650684:web:bb378dd3b0c1da8ee27379",
    measurementId: "G-5QMZW7N6M0"
  };
  
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  return getDatabase(app);
}
export default FirebaseConfig;