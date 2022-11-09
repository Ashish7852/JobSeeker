import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDMEVsBqrSbTcnpnomrLXsWGNRdhm1MEfA",
  authDomain: "job-see-7852.firebaseapp.com",
  projectId: "job-see-7852",
  storageBucket: "job-see-7852.appspot.com",
  messagingSenderId: "203934954187",
  appId: "1:203934954187:web:6ea17e8e72dedf8a2de14e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;