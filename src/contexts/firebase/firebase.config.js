// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_APIKEY,
  authDomain: import.meta.env.VITE_AUTHDOMAIN,
  projectId: import.meta.env.VITE_PROJECTID,
  storageBucket: import.meta.env.VITE_STORAGEBUCKET,
  messagingSenderId: import.meta.env.VITE_MESSAGINGSENDERID,
  appId: import.meta.env.VITE_APPID,
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;

// // Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// const firebaseConfig = {
//   apiKey: "AIzaSyBfWDKqewGdyCfPJXvHZO7gdqFaQxATb8o",
//   authDomain: "summer-camp-client-side.firebaseapp.com",
//   projectId: "summer-camp-client-side",
//   storageBucket: "summer-camp-client-side.appspot.com",
//   messagingSenderId: "830246587009",
//   appId: "1:830246587009:web:33c7af530ae07843c71b80",
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
