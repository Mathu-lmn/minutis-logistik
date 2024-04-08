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
} from '@ionic/angular/standalone';

let tableData = [
  { label: 'Medikit', quantity: '1', item: 'medkit' },
  { label: 'Brancard', quantity: '20', item: 'brancard' },
  { label: 'Feur', quantity: '24', item: 'feur' },
];

let demands = [
  {
    id: 1,
    status: 'Pending',
    assigned: false,
    priority: 'High',
    timestampDemand: '2021-07-01',
    comment: 'Comment 1',
    content: [tableData[0]],
  },
  {
    id: 2,
    status: 'Pending',
    assigned: false,
    priority: 'Medium',
    timestampDemand: '2021-07-02',
    comment: 'Comment 2',
    content: [
      tableData[2],
      tableData[1],
      tableData[1],
      tableData[1],
      tableData[1],
      tableData[1],
    ],
  },
  {
    id: 3,
    status: 'Pending',
    assigned: false,
    priority: 'Low',
    timestampDemand: '2021-07-03',
    comment: 'Comment 3',
    content: [tableData[2]],
  },
];

@Component({
  selector: 'app-all-demands',
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
  ],
})
export class AllDemandsComponent implements OnInit {
  demands: {
    id: number;
    status: string;
    assigned: boolean;
    priority: string;
    timestampDemand: string;
    comment: string;
    content: { label: string; quantity: string; item: string }[];
  }[];

  constructor() {
    console.log('AllDemandsComponent constructor');
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
}
