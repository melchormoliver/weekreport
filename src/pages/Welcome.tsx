import React, { useState } from "react";
import {
  IonContent,
  IonButton,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonInput,
  IonList,
  IonItem,
} from "@ionic/react";
import { useHistory } from "react-router-dom";
import useActivityList from "../services/useActivityList"; // Asegúrate de importar el hook correcto

const Welcome: React.FC = () => {
  const history = useHistory();
  const { activities, addActivity } = useActivityList();
  const [activity, setActivity] = useState("");

  const goToHome = () => {
    history.push("/home");
  };

  const handleAddActivity = () => {
    if (activity.trim() !== "") {
      addActivity(activity); // Agregamos la actividad
      setActivity(""); // Limpiar input después de agregar
    }
  };

  return (
    <IonContent className="ion-padding">
      <IonHeader>
        <IonToolbar>
          <IonTitle>Bienvenido</IonTitle>
        </IonToolbar>
      </IonHeader>
      <h2>¡Hola!</h2>
      <IonInput
        value={activity}
        placeholder="Agregar actividad"
        onIonChange={(e) => setActivity(e.detail.value!)}
      />
      <IonButton onClick={handleAddActivity}>Agregar</IonButton>
      <IonList>
        {activities.map((act, index) => (
          <IonItem key={index}>{act.name}</IonItem> // 🔹 Asegurar que se muestre correctamente
        ))}
      </IonList>
      <IonButton onClick={goToHome}>Ir al Home</IonButton>
    </IonContent>
  );
};

export default Welcome;
