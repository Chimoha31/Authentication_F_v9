import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCUZ4vBLiPKWLN--JLuB_DCKCJbQipHQ_w",
  authDomain: "fir-auth-d1920.firebaseapp.com",
  projectId: "fir-auth-d1920",
  storageBucket: "fir-auth-d1920.appspot.com",
  messagingSenderId: "559272794482",
  appId: "1:559272794482:web:469c0db0a5531b9b9fe5eb"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

export default app