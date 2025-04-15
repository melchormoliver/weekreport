import React from 'react';
import { IonModal, IonButton, IonHeader, IonToolbar, IonTitle, IonContent, IonButtons, IonIcon } from '@ionic/react';
import { close } from 'ionicons/icons';
import Report from './Report';
import LineChartReport from './LineChartReport';
import useActivityList from '../services/useActivityList';
import './ModalReport.css';

interface ModalReportProps {
  isOpen: boolean;
  onClose: () => void;
}

const ModalReport: React.FC<ModalReportProps> = ({ isOpen, onClose }) => {
  const { activities } = useActivityList();

  return (
    <IonModal isOpen={isOpen} onDidDismiss={onClose}>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Reportes de Actividad</IonTitle>
          <IonButtons slot="end">
            <IonButton onClick={onClose}>
              <IonIcon icon={close} />
            </IonButton>
          </IonButtons>
        </IonToolbar>
      </IonHeader>

      <IonContent className="ion-padding">
        <div className="report-wrapper">
          {activities.map((activity, index) => (
            <div key={index} className="report-card">
              <Report activity={activity} view={[500, 300]} total={activity.total} />
            </div>
          ))}
          <LineChartReport activities={activities} view={[500, 300]} />
        </div>
      </IonContent>
    </IonModal>
  );
};

export default ModalReport;
