import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyDwLFWaHyWBjU4M2jI-R9UqInwjD2prQA0",
  authDomain: "sidqly-15-june.firebaseapp.com",
  projectId: "sidqly-15-june",
  storageBucket: "sidqly-15-june.firebasestorage.app",
  messagingSenderId: "656417734269",
  appId: "1:656417734269:web:65f3573bbd8074770ffb14",
  measurementId: "G-W450Z1KBNS"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Analytics safely for SSR/Client execution
export const analytics = typeof window !== "undefined" ? getAnalytics(app) : null;
export default app;
