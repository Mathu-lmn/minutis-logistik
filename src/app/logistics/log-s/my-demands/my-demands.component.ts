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
  IonListHeader,
} from '@ionic/angular/standalone';
import {
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
    IonListHeader,
  ],
})
export class LogSMyDemandsComponent implements OnInit {
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

  getProducts(demand: any) {
    return demand.content
      .map((item: any) => item.label + ' (' + item.quantity + ')')
      .join(', ');
  }

  showDemand(demand: any) {
    console.log('showDemand', demand);
  }

  ngOnInit() {
    console.log('AllDemandsComponent ngOnInit');
  }
}
