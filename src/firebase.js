import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore/lite";
import conf from "./conf/conf.js";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: conf.apiKey,
  authDomain: conf.authDomain,
  projectId: conf.projectId,
  storageBucket: conf.storageBucket,
  messagingSenderId: conf.messagingSenderId,
  appId: conf.appId,
  measurementId: conf.measurementId,
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth();

export default app;
