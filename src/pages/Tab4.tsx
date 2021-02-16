import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonButton, IonInput, IonLabel, IonItem } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './Tab4.css';

const Tab4: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Buscar</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
      <IonButton color="success">Buscar</IonButton>
      <IonItem>
            <IonLabel position="fixed">Búsqueda</IonLabel>
            <IonInput value="" ></IonInput>
      </IonItem>
      </IonContent>
    </IonPage>
  );
};

export default Tab4;
