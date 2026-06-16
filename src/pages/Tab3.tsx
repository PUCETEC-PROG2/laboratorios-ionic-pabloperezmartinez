import {
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardSubtitle,
  IonCardTitle,
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import ExploreContainer from "../components/ExploreContainer";
import "./Tab3.css";

const Tab3: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Perfil de usuario</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Perfil de usuario</IonTitle>
          </IonToolbar>
        </IonHeader>

        <div className="card-container">
          <IonCard className="card">
            <img
              src="https://avatars.githubusercontent.com/u/48026030?v=4"
              alt="Foto de perfil"
            />
            <IonCardHeader>
              <IonCardTitle>Pablo Pérez Martínez</IonCardTitle>
              <IonCardSubtitle>pabloperezmartinez</IonCardSubtitle>
            </IonCardHeader>
            <IonCardContent>
              <p>Desarrollador de software con experiencia en tecnologías web y móviles.</p>
              <p>Docente, desarrollador y adicto al café</p>
            </IonCardContent>
          </IonCard>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Tab3;
