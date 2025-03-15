import { Redirect, Route } from 'react-router-dom';
import { IonApp, IonRouterOutlet, setupIonicReact } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import Home from './pages/Home';
import Welcome from './pages/Welcome';

/* Core CSS */
import '@ionic/react/css/core.css';
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';
/* Dark Mode */
import '@ionic/react/css/palettes/dark.system.css';

/* Theme variables */
import './theme/variables.css';

/* Registrar Service Worker */
import { registerSW } from './serviceWorkerRegistration';
import Login from './pages/Login';
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDOULh1X0EYPzBpaIRMkbsgKg5p7LAGC8o",
  authDomain: "weekreport-ed27.firebaseapp.com",
  projectId: "weekreport-ed27",
  storageBucket: "weekreport-ed27.firebasestorage.app",
  messagingSenderId: "412206882222",
  appId: "1:412206882222:web:958cfd0d8eeaad11ca3c3f",
  measurementId: "G-J65MWT6VKP"
};


setupIonicReact();

//registerSW(); // Llamada para registrar el SW

const App: React.FC = () => (
  <IonApp>
    <IonReactRouter>
      <IonRouterOutlet>
      <Route path="/welcome" exact={true}>
        <Welcome />
      </Route>
      <Route path="/login" exact={true}>
        <Login />
      </Route>
        <Route path="/" exact={true}>
          <Redirect to="/welcome" />
        </Route>
        <Route path="/home" exact={true}>
          <Home />
        </Route>
      </IonRouterOutlet>
    </IonReactRouter>
  </IonApp>
);

export default App;
