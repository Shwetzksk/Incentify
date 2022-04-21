// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore, collection, addDoc } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyA90FCV-8c4uPVW9_HkxSurOXTodsZFT5s",
  authDomain: "incentify-club-qaa.firebaseapp.com",
  projectId: "incentify-club-qaa",
  storageBucket: "incentify-club-qaa.appspot.com",
  messagingSenderId: "829144068440",
  appId: "1:829144068440:web:9efdedd90243e2c051b52d",
  measurementId: "G-S80H9TRQYW",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export async function emailSignup(email) {
  try {
    const ref = await addDoc(collection(db, "subscribers"), {
      email: email,
    });
    // console.log(ref);
    return true;
  } catch (e) {
    console.error("Error adding document: ", e);
  }
}
