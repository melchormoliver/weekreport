import { useState, useEffect } from "react";

const useActivityList = () => {
  const [activities, setActivities] = useState<{ name: string; total: number; weeklyTotal: number[] }[]>([]);

  useEffect(() => {
    const storedActivities = localStorage.getItem("activities");
    if (storedActivities) {
      setActivities(JSON.parse(storedActivities));
    }
  }, []);

  const saveActivities = (newActivities: { name: string; total: number; weeklyTotal: number[] }[]) => {
    setActivities(newActivities);
    localStorage.setItem("activities", JSON.stringify(newActivities));
  };

  const addActivity = (name: string) => {
    if (!name.trim()) return;
    const newActivities = [...activities, { name, total: 0, weeklyTotal: [0, 0, 0, 0, 0] }];
    saveActivities(newActivities);
  };

  const updateActivityTotal = (index: number, increment: number) => {
    const newActivities = [...activities];
    newActivities[index].total += increment; // Seguimos actualizando `total` como antes

    const dayIndex = new Date().getDay() - 1; // Lunes = 0, ..., Viernes = 4
    if (dayIndex >= 0 && dayIndex < 5) {
      newActivities[index].weeklyTotal[dayIndex] += increment;
    }

    saveActivities(newActivities);
  };

  const clearActivities = () => {
    saveActivities([]);
  };

  return { activities, addActivity, updateActivityTotal, clearActivities };
};

export default useActivityList;
