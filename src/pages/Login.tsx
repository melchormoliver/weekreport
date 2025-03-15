import { GoogleAuthProvider, signInWithPopup, getAuth } from "firebase/auth";
import { useEffect } from "react";
import { useHistory } from "react-router-dom";
import { IonButton, IonContent, IonPage } from "@ionic/react";
import { auth } from "../firebaseConfig";

const Login: React.FC = () => {
  const history = useHistory(); // Usamos useHistory en lugar de useNavigate
  const provider = new GoogleAuthProvider();

  const signInWithGoogle = async () => {
    try {
      
      console.log("Intentando abrir popup...");
      // Intentar autenticarse con Google
      const result = await signInWithPopup(auth, provider);
      console.log("Usuario autenticado: ", result.user);
      history.push("/welcome"); // Redirigir si funciona
    } catch (error: any) {
      console.error("Error en la autenticación: ", error);
      alert(`Error: ${error.code} - ${error.message}`);
    }
  };
  

  useEffect(() => {
    const authInstance = getAuth();
    authInstance.onAuthStateChanged((user) => {
      if (user) {
        history.push("/welcome");
      }
    });
  }, [history]);

  return (
    <IonPage>
      <IonContent className="ion-padding">
        <h1>Iniciar Sesión</h1>
        <IonButton expand="full" onClick={signInWithGoogle}>
          Iniciar sesión con Google
        </IonButton>
      </IonContent>
    </IonPage>
  );
};

export default Login;
