import { AfterViewInit, Component, Input, OnInit } from '@angular/core';
import { Demand, Message } from '../logistics/types';
import { ModalController } from '@ionic/angular';

import * as I from '@ionic/angular/standalone';

@Component({
  selector: 'app-chat-modal',
  standalone: true,
  templateUrl: './chat-modal.component.html',
  styleUrls: ['./chat-modal.component.scss'],
  imports: [
    I.IonModal,
    I.IonContent,
    I.IonText,
    I.IonList,
    I.IonItem,
    I.IonLabel,
    I.IonInput,
    I.IonButton,
    I.IonIcon,
    I.IonGrid,
    I.IonRow,
    I.IonCol,
    I.IonToolbar,
    I.IonHeader,
    I.IonTitle,
    I.IonButton,
    I.IonButtons,
  ],
})
export class ChatModalComponent  implements AfterViewInit {
  @Input() demand?: Demand;

  messageToSend: string = '';
  messages: Message[] = [];

  constructor(private modalCtrl: ModalController) { }

  sendMessage() {
    // call l'api pour envoyer le message
    this.messages.push({content: this.messageToSend, from: 'me'});
    this.messageToSend = '';
  }

  setMessageToSend(event: CustomEvent) {
    this.messageToSend = event.detail.value;
  }

  cancel() {
    return this.modalCtrl.dismiss(null, 'cancel');
  }

  ngAfterViewInit() {
    // call l'api pour récupérer les messages
    let res: Message[] = [{content: 'Hello', from: 'me'}, {content: 'Hi', from: 'you'}];
    this.messages.push(...res);
  }

}
