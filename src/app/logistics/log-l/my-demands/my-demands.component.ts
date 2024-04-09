import { Component, OnInit, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  IonIcon,
  IonContent,
  IonText,
  IonModal,
  IonList,
  IonLabel,
  IonItem,
  IonInfiniteScroll,
  IonToolbar,
  IonHeader,
  IonTitle,
  IonButton
} from '@ionic/angular/standalone';
import { closeOutline } from 'ionicons/icons';
import { DemandPriority, DemandStatus, Demand } from '../../types';
import { Utils } from '../../utils';
import { addIcons } from 'ionicons';


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
    priority: DemandPriority.Urgent,
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
    id: 3,
    status: DemandStatus.Assigned,
    assigned: false,
    priority: DemandPriority.Low,
    timestampDemand: '2021-07-03',
    comment: 'Comment 3',
    content: [tableData[2]],
  },
  {
    id: 4,
    status: DemandStatus.Shipping,
    assigned: false,
    priority: DemandPriority.High,
    timestampDemand: '2021-07-04',
    comment: 'Comment 4',
    content: [
      tableData[1],
      tableData[2],
      tableData[0],
    ],
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
    status: DemandStatus.Pending,
    assigned: false,
    priority: DemandPriority.Low,
    timestampDemand: '2021-07-06',
    comment: 'Comment 6',
    content: [tableData[1]],
  },
  {
    id: 7,
    status: DemandStatus.ReadyToShip,
    assigned: false,
    priority: DemandPriority.High,
    timestampDemand: '2021-07-07',
    comment: 'Comment 7',
    content: [tableData[2]],
  },
  {
    id: 8,
    status: DemandStatus.Pending,
    assigned: false,
    priority: DemandPriority.Medium,
    timestampDemand: '2021-07-08',
    comment: 'Comment 8',
    content: [tableData[0]],
  },
  {
    id: 9,
    status: DemandStatus.Assigned,
    assigned: false,
    priority: DemandPriority.Low,
    timestampDemand: '2021-07-09',
    comment: 'Comment 9',
    content: [tableData[1]],
  },
  {
    id: 10,
    status: DemandStatus.Shipping,
    assigned: false,
    priority: DemandPriority.High,
    timestampDemand: '2021-07-10',
    comment: 'Comment 10',
    content: [tableData[2]],
  },
  {
    id: 11,
    status: DemandStatus.Delivered,
    assigned: false,
    priority: DemandPriority.Medium,
    timestampDemand: '2021-07-11',
    comment: 'Comment 11',
    content: [tableData[0]],
  },
];


@Component({
  selector: 'app-my-demands',
  templateUrl: './my-demands.component.html',
  styleUrls: ['./my-demands.component.scss'],
  standalone: true,
  imports: [
    IonIcon,
    IonContent,
    IonText,
    IonList,
    IonLabel,
    IonItem,
    IonInfiniteScroll,
    IonToolbar,
    IonHeader,
    IonTitle,
    IonModal,
    CommonModule,
    IonButton,
  ],
})
export class LogLMyDemandsComponent implements OnInit {
  demands: Demand[];
  
  @ViewChild(IonModal) modal: any;

  constructor(public utils: Utils) {
    this.demands = demands;
    addIcons({
      closeOutline
    });
  }

  getProducts(demand: Demand) {
    return demand.content
      .map((item: any) => item.label + ' (' + item.quantity + ')')
      .join(', ');
  }

  showDemand(demand: Demand) {
    console.log('showDemand', demand);
  }

  log(demand: Demand) {
    console.log(demand);
  }

  

  // lint:disable-next-line: use-lifecycle-interface
  ngOnInit() {}

}
