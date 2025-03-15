import { initializeApp, getApps, getApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDN_Hnt9L-yvQYKGItXInTcOIZoE-Edo-U",
  authDomain: "reportesemanal-60ad3.firebaseapp.com",
  projectId: "reportesemanal-60ad3",
  storageBucket: "reportesemanal-60ad3.firebasestorage.app",
  messagingSenderId: "503463462463",
  appId: "1:503463462463:web:992f7825a5510879a55a8a",
  measurementId: "G-MH017XJF7D",
};

// Evitar inicializar Firebase más de una vez
const app = getApps().length ? getApp() : initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);

export { app, analytics, auth };
