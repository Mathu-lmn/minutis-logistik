import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonSegment,
  IonLabel,
  IonButton,
  IonList,
  IonItem,
  IonIcon,
} from '@ionic/angular/standalone';
import {
  hourglassOutline,
  storefrontOutline,
  cubeOutline,
  sendOutline,
  checkmarkDoneOutline,
} from 'ionicons/icons';
import { addIcons } from 'ionicons';
import { DemandPriority, DemandStatus, Demand } from '../../types';
import { Utils } from '../../utils';

import { demands } from '../../dummy';


@Component({
  selector: 'app-s-all-demands',
  templateUrl: './all-demands.component.html',
  styleUrls: ['./all-demands.component.scss'],
  standalone: true,
  imports: [
    CommonModule,
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    IonSegment,
    IonButton,
    IonLabel,
    IonList,
    IonItem,
    IonIcon,
  ],
})
export class LogSAllDemandsComponent implements OnInit {
  demands: Demand[];

  constructor(public utils: Utils) {
    addIcons({
      hourglassOutline,
      storefrontOutline,
      cubeOutline,
      sendOutline,
      checkmarkDoneOutline,
    });
    this.demands = demands;
  }

  getProducts(demand: Demand) {
    return demand.content
      .map((item: any) => item.label + ' (' + item.quantity + ')')
      .join(', ');
  }

  showDemand(demand: Demand) {
    console.log('showDemand', demand);
  }

  ngOnInit() {
    console.log('AllDemandsComponent ngOnInit');
  }
}
