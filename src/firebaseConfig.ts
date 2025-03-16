import { initializeApp, getApps, getApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDOULh1X0EYPzBpaIRMkbsgKg5p7LAGC8o",
  authDomain: "weekreport-ed27.firebaseapp.com",
  projectId: "weekreport-ed27",
  storageBucket: "weekreport-ed27.firebasestorage.app", // 🔹 CORREGIDO
  messagingSenderId: "412206882222",
  appId: "1:412206882222:web:958cfd0d8eeaad11ca3c3f",
  measurementId: "G-J65MWT6VKP",
};


// ✅ Evita inicializar Firebase más de una vez
const app = getApps().length ? getApp() : initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);

export { app, analytics, auth };
