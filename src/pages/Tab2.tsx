import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './Tab2.css';

const Tab2: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Fuentes</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
          <IonToolbar>
            <IonTitle size="large">Desglose por fuentes</IonTitle>
          </IonToolbar>
      </IonContent>
    </IonPage>
  );
};

export default Tab2;
