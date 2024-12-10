import {
  IonButton,
  IonButtons,
  IonCard,
  IonCardHeader,
  IonCardSubtitle,
  IonCardTitle,
  IonChip,
  IonContent,
  IonHeader,
  IonIcon,
  IonImg,
  IonPage,
  IonText,
  IonTextarea,
  IonToolbar,
} from '@ionic/react';
import { trailSignOutline } from 'ionicons/icons';
import { useInputValidationProps } from '../../useCases/useInputValidation';

const Navigator = ({
  currentNode,
  onDismiss,
}: {
  currentNode: string;
  onDismiss: (data?: string | null | undefined, role?: string) => void;
}) => {
  const {
    value: node,
    isValid: isNodeValid,
    isTouched: isNodeTouched,
    onBlur: onBlurNode,
    onInputChange: setNode,
  } = useInputValidationProps((node: string) =>
    /(?<=^|\s)(\w*-?\w+\.[a-z]{2,}\S*)/.test(node),
  );
  const host = 'sure-formerly-filly.ngrok-free.app';
  const genesisID =
    '00000000c746b9e51cd4ddf5fa6d3e88a7e8d0cfca941436a4a9c842beb7c7e5';

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonButton
              color="medium"
              disabled={!currentNode && !node}
              onClick={() => onDismiss(null, 'cancel')}
            >
              Cancel
            </IonButton>
          </IonButtons>
          <IonButtons slot="end">
            <IonButton
              disabled={!node}
              onClick={() => onDismiss(node, 'confirm')}
              strong={true}
            >
              Confirm
            </IonButton>
          </IonButtons>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonCard>
          <IonCardHeader>
            <IonCardTitle>
              <h1>
                Return
                <div style={{ display: 'inline-block', width: '1em' }}>
                  <IonImg
                    src={`${process.env.PUBLIC_URL}/favicon.ico`}
                    alt="Return to the beginning."
                  />
                </div>
              </h1>
              <IonText color="tertiary">
                <h6>There is no end; only the inconsiderable beginning.</h6>
              </IonText>
            </IonCardTitle>
          </IonCardHeader>
        </IonCard>
        <section className="ion-padding">
          <IonText color="primary">
            <p>Enter a pass-trail to continue.</p>
          </IonText>
          <IonTextarea
            className={`${isNodeValid && 'ion-valid'} ${
              isNodeValid === false && 'ion-invalid'
            } ${isNodeTouched && 'ion-touched'}`}
            label="pass-trail url"
            labelPlacement="stacked"
            placeholder="peer-url/pass-id"
            value={node}
            onIonBlur={onBlurNode}
            enterkeyhint="go"
            onIonInput={(event) =>
              setNode((event.target.value! ?? '').replace(/^https?:\/\//, ''))
            }
            rows={5}
          />
          <IonText color="secondary">
            <p>Favorite pass-trail.</p>
          </IonText>
          <IonChip onClick={() => setNode(`${host}/${genesisID}`)}>
            <>Japa-da</>
            <IonIcon icon={trailSignOutline} color="primary"></IonIcon>
          </IonChip>
        </section>
      </IonContent>
    </IonPage>
  );
};

export default Navigator;
