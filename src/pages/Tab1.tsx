import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './Tab1.css';

const Tab1: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Favorito</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
          <IonToolbar>
            <IonTitle size="large">Bienvenido a la clase de Programación de dispositivos móviles</IonTitle>
          </IonToolbar>
      </IonContent>
    </IonPage>
  );
};

export default Tab1;
