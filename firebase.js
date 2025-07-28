// firebase.js
import { initializeApp } from "https://www.gstatic.com/firebasejs/12.0.0/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/12.0.0/firebase-firestore.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/12.0.0/firebase-analytics.js";

const firebaseConfig = {
  apiKey: "AIzaSyAABSZSa5LE-HgOdTGqwocy_hh6ApqM1z4",
  authDomain: "bazaarbuddy-74314.firebaseapp.com",
  projectId: "bazaarbuddy-74314",
  storageBucket: "bazaarbuddy-74314.appspot.com",
  messagingSenderId: "667288261158",
  appId: "1:667288261158:web:c7c22ff4b20988b4564ce7",
  measurementId: "G-XLSTWDM0QM"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const db = getFirestore(app);