import React, { useState } from 'react';
import { personCircle } from "ionicons/icons";
import { useHistory } from "react-router-dom";
import { IonGrid, IonRow, IonCol } from '@ionic/react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import { IonItem, IonLabel, IonInput, IonButton, IonIcon, IonAlert } from '@ionic/react';

const Login: React.FC = () => {
  const history = useHistory();
  const [error, setError] = useState<boolean>(false);
  const [mensaje, setMensaje] = useState<string>("");
  const [usuario, setUsuario] = useState<string>("");
  const [contrasena, setContrasena] = useState<string>("");

  const iniciarSesion = () => {
    
    if (!usuario || usuario.length <= 0) {
        setMensaje("Usuario/a Incorrecto.");
        setError(true);
        return;
    }

    if (!contrasena || contrasena.length < 9) {
        setMensaje("Contraseña Incorrecta.");
        setError(true);
        return;
    }

    if(String(usuario).toLowerCase() == "henrya.castillo" && String(contrasena).toLowerCase() == "administrador"){
      history.push("/Home/");
    }

  };

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Iniciar sesión</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen className="ion-padding ion-text-center">
        <IonGrid>
        <IonRow>
          <IonCol>
            <IonAlert
                isOpen={error}
                onDidDismiss={() => setError(false)}
                cssClass="my-custom-class"
                header={"Up!"}
                message={mensaje}
                buttons={["Cerrar"]}/>
          </IonCol>
        </IonRow>

        <IonRow>
          <IonCol>
            <IonIcon
                style={{ fontSize: "70px", color: "#0040ff" }}
                icon={personCircle}/>
          </IonCol>
        </IonRow>

          <IonRow>
            <IonCol>
            <IonItem>
            <IonLabel position="floating">Usuario</IonLabel>
            <IonInput
                type="text"
                value={usuario}
                onIonChange={(e) => setUsuario(e.detail.value!)}>
            </IonInput>
            </IonItem>
            </IonCol>
          </IonRow>

          <IonRow>
            <IonCol>
            <IonItem>
              <IonLabel position="floating">Contraseña</IonLabel>
              <IonInput
                type="password"
                value={contrasena}
                onIonChange={(e) => setContrasena(e.detail.value!)}>
              </IonInput>
            </IonItem>
            </IonCol>
          </IonRow>

          <IonRow>
            <IonCol>
              <IonButton expand="block" onClick={iniciarSesion}>Iniciar sesión</IonButton>
              <p style={{ fontSize: "medium" }}>
                 <a href="#">¿Olvidó su contraseña?</a>
              </p>
            </IonCol>
          </IonRow>
        </IonGrid>
      </IonContent>
    </IonPage>
  );
};

export default Login;