import { useState, useEffect } from "react";

const useActivityList = () => {
  const [activities, setActivities] = useState<{ name: string; total: number }[]>([]);

  useEffect(() => {
    const storedActivities = localStorage.getItem("activities");
    if (storedActivities) {
      setActivities(JSON.parse(storedActivities));
    }
  }, []);

  const saveActivities = (newActivities: { name: string; total: number }[]) => {
    setActivities(newActivities);
    localStorage.setItem("activities", JSON.stringify(newActivities));
  };

  const addActivity = (name: string) => {
    if (!name.trim()) return;
    const newActivities = [...activities, { name, total: 0 }];
    saveActivities(newActivities);
  };

  // Función para actualizar el total de una actividad
  const updateActivityTotal = (index: number, increment: number) => {
    const newActivities = [...activities];
    newActivities[index].total += increment; // Se actualiza el total de la actividad en esa posición
    saveActivities(newActivities); // Guardar el cambio en localStorage
  };

  return { activities, addActivity, updateActivityTotal }; // Ahora exportamos también `updateActivityTotal`
};

export default useActivityList;
