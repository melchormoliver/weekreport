import React from 'react';
import { IonContent, IonPage } from '@ionic/react';
import { BarChart, Bar, XAxis, YAxis, Tooltip, CartesianGrid, ResponsiveContainer, LabelList } from 'recharts';
import useActivityList from '../services/useActivityList'; // Importa tu hook del servicio

const WeeklyCapacityChart: React.FC = () => {
  const { activities } = useActivityList();

  // Calculamos el total de actividades y la capacidad total
  const totalActivities = activities.length;
  const totalCapacity = totalActivities * 5; // 5 días de actividad

  // Porcentaje de capacidad utilizada (suponiendo que las actividades realizadas es un valor mockeado)
  const usedActivities = 36; // Puedes reemplazar esto con un cálculo real más tarde
  const usedPercentage = (usedActivities / totalCapacity) * 100; // Calcula el porcentaje de capacidad utilizada
  const remainingPercentage = 100 - usedPercentage; // Capacidad restante

  // Datos para el gráfico con los valores en porcentaje
  const data = [
    {
      name: 'Capacidad',
      used: usedPercentage,        // Porcentaje de capacidad usada
      remaining: remainingPercentage, // Porcentaje de capacidad restante
    },
  ];

  return (
    <IonPage>
      <IonContent>
        <h2>Capacidad Semanal</h2>
        <ResponsiveContainer width="50%" height={300}>
          <BarChart data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis domain={[0, 100]} /> {/* Forzamos el rango del eje Y entre 0 y 100 */}
            <Tooltip />
            {/* Barra apilada con colores invertidos */}
            <Bar dataKey="remaining" stackId="a" fill="#ff6347">
              <LabelList
                position="center"
                formatter={() => `${remainingPercentage.toFixed(0)}%`} // Muestra el porcentaje restante
              />
            </Bar>
            <Bar dataKey="used" stackId="a" fill="#4682b4">
              <LabelList
                position="center"
                formatter={() => `${usedPercentage.toFixed(0)}%`} // Muestra el porcentaje utilizado
              />
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </IonContent>
    </IonPage>
  );
};

export default WeeklyCapacityChart;
