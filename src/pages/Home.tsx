import React, { useState, useEffect } from 'react';
import { IonContent, IonHeader, IonToolbar, IonTitle } from '@ionic/react';
import Tasks from '../components/Tasks'; // Componente de tareas
import Report from '../components/Report'; // Componente de reporte
import useActivityList from '../services/useActivityList'; // Servicio que contiene las actividades
import LineChartReport from '../components/LineChartReport';
import './Home.css'
const Home: React.FC = () => {
  const { activities } = useActivityList(); // Obtenemos las actividades del servicio
  const [isWeekend, setIsWeekend] = useState(false);
  const [currentDay, setCurrentDay] = useState<string>('');

  useEffect(() => {
    const days = ['domingo', 'lunes', 'martes', 'miércoles', 'jueves', 'viernes', 'sábado'];
    const today = new Date().getDay(); // 0 = Domingo, 6 = Sábado
    setCurrentDay(days[today]);
    setIsWeekend(today === 0 || today === 6); // true si es sábado o domingo
  }, []);
  
  return (
    <IonContent>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Productivity Report</IonTitle>
        </IonToolbar>
      </IonHeader>

      <h2>Hoy es {currentDay}</h2>
      {isWeekend ? (
        activities && activities.length > 0 ? (
          <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-around' }}>
            {activities.map((activity, index) => (
              <div key={index} className="report-card">
                <Report key={index} activity={activity} view={[500, 300]} total={activity.total} />
              </div>
            ))}
            <LineChartReport activities={activities} view={[500, 300]} />
            
          </div>
        ) : (
          <div>No hay actividades para mostrar</div>
        )
      ) : (
        <Tasks /> // Aquí se renderiza el componente de tareas si es día laborable
      )}
    </IonContent>
  );
};

export default Home;
