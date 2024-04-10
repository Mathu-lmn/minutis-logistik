import { Component, OnInit, ViewChildren } from '@angular/core';
import { CommonModule } from '@angular/common';
import * as I from '@ionic/angular/standalone';
import {
  closeOutline,
  hourglassOutline,
  storefrontOutline,
  cubeOutline,
  sendOutline,
  checkmarkDoneOutline,
} from 'ionicons/icons';
import { addIcons } from 'ionicons';
import { DemandStatus, DemandPriority, Demand } from '../../types';
import { Utils } from '../../utils';

import { demands } from '../../dummy';
import { MapComponent } from 'src/app/map/map.component';


@Component({
  selector: 'app-s-my-demands',
  templateUrl: './my-demands.component.html',
  styleUrls: ['./my-demands.component.scss'],
  standalone: true,
  imports: [
    MapComponent,
    I.IonItemGroup,
    I.IonItemDivider,
    I.IonGrid,
    I.IonRow,
    I.IonBadge,
    I.IonIcon,
    I.IonContent,
    I.IonText,
    I.IonList,
    I.IonLabel,
    I.IonItem,
    I.IonInfiniteScroll,
    I.IonToolbar,
    I.IonHeader,
    I.IonTitle,
    I.IonModal,
    I.IonCard,
    I.IonCardHeader,
    I.IonCardTitle,
    I.IonCardContent,
    I.IonButton,
    I.IonListHeader,
    CommonModule,
  ],
})
export class LogSMyDemandsComponent implements OnInit {
  demands: Demand[];
  @ViewChildren(I.IonModal) modals: any[] = [];

  constructor(public utils: Utils) {
    addIcons({
      closeOutline,
      hourglassOutline,
      storefrontOutline,
      cubeOutline,
      sendOutline,
      checkmarkDoneOutline,
    });
    this.demands = demands.sort((a, b) => {
      if (a.priority === b.priority) {
        return a.timestampDemand - b.timestampDemand;
      }
      return Object.values(DemandPriority).indexOf(a.priority) - Object.values(DemandPriority).indexOf(b.priority);
    });
  }

  getProducts(demand: any) {
    return demand.content
      .map((item: any) => item.label + ' (' + item.quantity + ')')
      .join(', ');
  }

  getTimeDifference(timestamp: number): string {
    const now = Date.now();
    const difference = now - timestamp;
    const minutes = Math.floor(difference / 60000); // Convert milliseconds to minutes

    if (minutes < 1) {
      return "à l'instant";
    } else if (minutes < 60) {
      return `Il y a ${minutes} minute${minutes > 1 ? 's' : ''}`;
    } else {
      const hours = Math.floor(minutes / 60);
      if (hours < 24) {
        return `Il y a ${hours} heure${hours > 1 ? 's' : ''}`;
      } else {
        const days = Math.floor(hours / 24);
        return `Il y a ${days} jour${days > 1 ? 's' : ''}`;
      }
    }
  }

  showDemand(demand: any) {
    console.log('showDemand', demand);
  }

  dismissModal() {
    this.modals.forEach(m => m.dismiss(null, 'cancel'))
  }

  ngOnInit() {
    console.log('AllDemandsComponent ngOnInit');
  }
}
