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

import './Welcome.css';
import ModalReport from "../components/ModalReport";
const Welcome: React.FC = () => {
  const history = useHistory();
  const { activities, addActivity, clearActivities } = useActivityList();
  const [activity, setActivity] = useState("");

  const goToHome = () => {
    history.push("/home");
  };

  const [showModal, setShowModal] = useState(false);
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
      <IonButton onClick={handleAddActivity} className="add">Agregar</IonButton>
      <IonList>
        {activities.map((act, index) => (
          <IonItem key={index}>{act.name}</IonItem> // 🔹 Asegurar que se muestre correctamente
        ))}
      </IonList>
      <IonList>
        <IonButton onClick={clearActivities} className="danger">Limpiar Lista</IonButton>
        <IonButton onClick={goToHome} className="neutral">Ir al Home</IonButton>
        
        <IonButton expand="block" onClick={() => setShowModal(true)}>
        Ver Reportes
      </IonButton>

      <ModalReport isOpen={showModal} onClose={() => setShowModal(false)} />
      </IonList>    
    </IonContent>
  );
};

export default Welcome;
