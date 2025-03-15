import { useState, useEffect } from 'react';
import activityService from '../services/activityService';

const useActivityList = () => {
  const [activities, setActivities] = useState<string[]>([]);

  useEffect(() => {
    setActivities(activityService.getActivities());
  }, []);

  const addActivity = (activity: string) => {
    activityService.addActivity(activity);
    setActivities(activityService.getActivities());
  };

  return { activities, addActivity };
};

export default useActivityList;
