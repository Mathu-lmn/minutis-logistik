import { Component, OnInit, ViewChildren } from '@angular/core';
import { CommonModule } from '@angular/common';
import * as I from '@ionic/angular/standalone';
import {
  hourglassOutline,
  storefrontOutline,
  cubeOutline,
  sendOutline,
  checkmarkDoneOutline,
  closeOutline,
} from 'ionicons/icons';
import { addIcons } from 'ionicons';
import { DemandPriority, DemandStatus, Demand } from '../../types';

import { Utils } from '../../utils';

import { demands } from '../../dummy';
import { MapComponent } from 'src/app/map/map.component';

@Component({
  selector: 'app-all-demands',
  templateUrl: './all-demands.component.html',
  styleUrls: ['./all-demands.component.scss'],
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
    CommonModule,
  ],
})
export class LogLAllDemandsComponent implements OnInit {
  pendingDemands: Demand[]; // Demands with status 'Pending'
  otherDemands: Demand[]; // Demands with status 'Assigned'

  @ViewChildren(I.IonModal) modals: any[] = [];

  constructor(public utils: Utils) {
    addIcons({
      hourglassOutline,
      storefrontOutline,
      cubeOutline,
      sendOutline,
      checkmarkDoneOutline,
      closeOutline,
    });
    this.pendingDemands = demands.filter(
      (demand) => demand.status === DemandStatus.Pending
    );
    this.pendingDemands.sort((a, b) => {
      if (a.priority === b.priority) {
        return a.timestampDemand - b.timestampDemand;
      }
      return Object.values(DemandPriority).indexOf(a.priority) - Object.values(DemandPriority).indexOf(b.priority);
    });
    this.otherDemands = demands.filter(
      (demand) => demand.status !== DemandStatus.Pending
    );
    this.otherDemands.sort((a, b) => {
      if (a.priority === b.priority) {
        return a.timestampDemand - b.timestampDemand;
      }
      return Object.keys(DemandPriority).indexOf(a.priority) - Object.keys(DemandPriority).indexOf(b.priority);
    });
  }

  getProducts(demand: Demand) {
    return demand.content
      .map((item: any) => item.label + ' (' + item.quantity + ')')
      .join(', ');
  }
  //?
  showDemand(demand: Demand) {
    console.log('showDemand', demand);
  }

  dismissModal() {
    this.modals.forEach(m => m.dismiss(null, 'cancel'))
  }

  ngOnInit() {
    console.log('AllDemandsComponent ngOnInit');
  }
}
