import { getAuth } from "firebase/auth";
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
const firebaseConfig = {
  apiKey: "AIzaSyDMgXPec6dSD4KntvtKnbPmMvni2-ZPIbw",
  authDomain: "netflix-gpt-bb371.firebaseapp.com",
  projectId: "netflix-gpt-bb371",
  storageBucket: "netflix-gpt-bb371.appspot.com",
  messagingSenderId: "444463929257",
  appId: "1:444463929257:web:1a8e9fdb6cb971d9a6d6b8",
  measurementId: "G-35717NVBHR"
};
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();