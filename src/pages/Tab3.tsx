import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonButton } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './Tab3.css';

const Tab3: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Instalados</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>

          <IonButton color="success">Usuario</IonButton>
          <IonButton color="warning">Avanzado</IonButton>
          <IonButton color="danger">Reciente</IonButton>

      </IonContent>
    </IonPage>
  );
};

export default Tab3;
