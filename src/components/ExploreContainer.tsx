import {
  IonButton,
  IonCard,
  IonCardContent,
  IonCol,
  IonGrid,
  IonIcon,
  IonItem,
  IonItemOption,
  IonItemOptions,
  IonItemSliding,
  IonLabel,
  IonList,
  IonReorder,
  IonReorderGroup,
  IonRow,
  IonSlide,
  IonSlides,
} from "@ionic/react";
import React from "react";
import { ItemReorderEventDetail } from "@ionic/core";
import { pencil, trash, home, addOutline } from "ionicons/icons";
import "./ExploreContainer.css";

interface ContainerProps {}

const ExploreContainer: React.FC<ContainerProps> = () => {
  const doReorder = (event: CustomEvent<ItemReorderEventDetail>) => {
    event.detail.complete();
  };

  const slideOpts = {
    initialSlide: 1,
    speed: 500,
  };

  return (
    <IonSlides pager options={slideOpts}>
      <IonSlide>
        <IonLabel>Slide 1</IonLabel>
      </IonSlide>
      <IonSlide>
        <IonCard>
          <IonItem>
            <IonIcon icon={home} slot="start" />
            <IonLabel>Card Title</IonLabel>
            <IonButton fill="solid" slot="end">
              <IonIcon icon={addOutline} />
            </IonButton>
          </IonItem>
          <IonCardContent>
            <IonGrid>
              <IonRow>
                <IonCol>
                  <IonReorderGroup
                    disabled={false}
                    onIonItemReorder={doReorder}
                  >
                    <IonItemSliding>
                      <IonItemOptions side="start">
                        <IonItemOption
                          onClick={() => console.log("SWIPE END 1")}
                          color="danger"
                        >
                          <IonIcon slot="icon-only" icon={trash} />
                        </IonItemOption>
                      </IonItemOptions>
                      <IonItem>
                        <IonLabel>Item 1</IonLabel>
                        <IonIcon icon={pencil} slot="end" />
                        <IonReorder slot="end" />
                      </IonItem>
                      <IonItemOptions side="end">
                        <IonItemOption
                          onClick={() => console.log("SWIPE END 2")}
                          color="danger"
                        >
                          <IonIcon slot="icon-only" icon={trash} />
                        </IonItemOption>
                      </IonItemOptions>
                    </IonItemSliding>
                    <IonItemSliding>
                      <IonItemOptions side="start">
                        <IonItemOption
                          onClick={() => console.log("SWIPE END 11")}
                          color="danger"
                        >
                          <IonIcon slot="icon-only" icon={trash} />
                        </IonItemOption>
                      </IonItemOptions>
                      <IonItem>
                        <IonLabel>Item 2</IonLabel>
                        <IonIcon icon={pencil} slot="end" />
                        <IonReorder slot="end" />
                      </IonItem>
                      <IonItemOptions side="end">
                        <IonItemOption
                          color="danger"
                          onClick={() => console.log("SWIPE END 22")}
                        >
                          <IonIcon slot="icon-only" icon={trash} />
                        </IonItemOption>
                      </IonItemOptions>
                    </IonItemSliding>
                  </IonReorderGroup>
                </IonCol>
              </IonRow>
            </IonGrid>
          </IonCardContent>
        </IonCard>
      </IonSlide>
      <IonSlide>
        <IonLabel>Slide 3</IonLabel>
      </IonSlide>
    </IonSlides>
  );
};

export default ExploreContainer;
