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

let tableData = [
  { label: 'Medikit', quantity: 1, item: 'medkit' },
  { label: 'Brancard', quantity: 20, item: 'brancard' },
  { label: 'Feur', quantity: 24, item: 'feur' },
];

let demands: Demand[] = [
  {
    id: 1,
    status: DemandStatus.ReadyToShip,
    assigned: false,
    priority: DemandPriority.High,
    timestampDemand: '2021-07-01',
    comment: 'Comment 1',
    content: [tableData[0]],
  },
  {
    id: 2,
    status: DemandStatus.Pending,
    assigned: false,
    priority: DemandPriority.Medium,
    timestampDemand: '2021-07-02',
    comment: 'Comment 2',
    content: [
      tableData[2],
      tableData[1],
      tableData[0],
      tableData[1],
      tableData[1],
      tableData[1],
    ],
  },
  {
    id: 4,
    status: DemandStatus.Assigned,
    assigned: false,
    priority: DemandPriority.High,
    timestampDemand: '2021-07-04',
    comment: 'Comment 4',
    content: [tableData[1], tableData[2], tableData[0]],
  },
  {
    id: 5,
    status: DemandStatus.Delivered,
    assigned: false,
    priority: DemandPriority.Medium,
    timestampDemand: '2021-07-05',
    comment: 'Comment 5',
    content: [tableData[0]],
  },
  {
    id: 6,
    status: DemandStatus.Delivered,
    assigned: false,
    priority: DemandPriority.Medium,
    timestampDemand: '2021-07-02',
    comment: 'Comment 2',
    content: [
      tableData[2],
      tableData[1],
      tableData[0],
      tableData[1],
      tableData[1],
      tableData[1],
    ],
  },
];

@Component({
  selector: 'app-s-my-demands',
  templateUrl: './my-demands.component.html',
  styleUrls: ['./my-demands.component.scss'],
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
