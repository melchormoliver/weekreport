import React, { useEffect, useState } from 'react';
import { IonList, IonItem, IonLabel, IonCheckbox } from '@ionic/react';
import useActivityList from "../services/useActivityList"; // Importamos el hook

const Tasks: React.FC = () => {
  const { activities, updateActivityTotal } = useActivityList(); // Usamos el hook para obtener actividades
  const [tasks, setTasks] = useState<any[]>([]); // Mantener el estado de las tareas

  // Verificamos que las actividades se carguen correctamente
  useEffect(() => {
    if (activities && activities.length > 0) {
      setTasks(prevTasks =>
        activities.map((activity, i) => ({
          ...activity,
          done: prevTasks[i]?.done ?? false, // Mantiene el estado previo si existe
        }))
      );
    }
  }, [activities]);
   // Dependemos de activities para actualizar las tareas

  // Función que alterna el estado de una tarea
  const toggleTask = (index: number) => {
    setTasks(prevTasks =>
      prevTasks.map((task, i) =>
        i === index ? { ...task, done: !task.done } : task
      )
    );
  
    // Asegurar que updateActivityTotal reciba el estado correcto
    updateActivityTotal(index, tasks[index]?.done ? -1 : 1);
  };
  

  // Función para manejar el click en cualquier parte del `IonItem`
  const handleItemClick = (index: number) => {
    toggleTask(index); // Llama a `toggleTask` cuando el usuario haga click en cualquier parte del ítem
  };

  // Verificamos si las tareas están vacías
  if (tasks.length === 0) {
    return <div>No hay tareas para mostrar.</div>; // Mostrar mensaje si no hay tareas
  }

  return (
    <div>
      <IonList>
        {tasks.map((task, index) => (
          <IonItem
            key={index}
            onClick={() => handleItemClick(index)} 
            style={{
              textDecoration: task.done ? 'line-through' : 'none', // Tachamos el texto si está completado
              opacity: task.done ? 0.6 : 1, // Hacemos la tarea más transparente si está completada
              transform: task.done ? 'translateY(5px)' : 'none', // Movemos la tarea para abajo si está completada
              transition: 'all 0.3s ease', // Transición suave
            }}
          >
            <IonLabel className={task.done ? 'done' : ''}>{task.name}</IonLabel>
            <IonCheckbox
              slot="end"
              checked={task.done} // Sincronizamos el estado de la casilla con el estado de la tarea
              onIonChange={() => toggleTask(index)} // Cambiar el estado al hacer clic en el checkbox
            />
          </IonItem>
        ))}
      </IonList>
    </div>
  );
};

export default Tasks;
