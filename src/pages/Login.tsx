import React, { useState } from 'react';
import { useHistory } from "react-router-dom";
import { IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import { IonContent, IonItem, IonLabel, IonInput, IonButton } from '@ionic/react';

const Login: React.FC = () => {
  const history = useHistory();
  const [usuario, setValueUsuario] = useState<string>("");
  const [contrasena, setValueContrasena] = useState<string>("");

  const Login = () => {
    if ((!usuario) || (!contrasena)) {
        alert("Usuario y/o Contraseña incorrecto.");
        return;
    }else{
      history.push("index");
    }
  };

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Login</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen className="ion-padding ion-text-center">
        <IonItem>
          <IonLabel position="fixed">Usuario</IonLabel>
          <IonInput type="text" value={usuario} onIonChange={(e) => setValueUsuario(e.detail.value!)} required={true} />
        </IonItem>

        <IonItem>
          <IonLabel position="fixed">Contraseña</IonLabel>
          <IonInput type="password" value={contrasena} onIonChange={(e) => setValueContrasena(e.detail.value!)} required={true} />
        </IonItem>
        
        <IonButton onClick={Login} className="ion-margin-top" type="submit">Login</IonButton>
      </IonContent>
    </IonPage>
  );
};

export default Login;