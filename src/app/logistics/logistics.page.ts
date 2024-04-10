import { Component, NgModule } from '@angular/core';
import {
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonSegment,
  IonLabel,
  IonSegmentButton,
  IonToggle,
  IonModal,
  IonList,
  IonItem,
  IonInput,
  IonSelect,
  IonSelectOption,
  IonIcon,
  IonButton
} 

from '@ionic/angular/standalone';
import { CommonModule } from '@angular/common';
import { LogLMyDemandsComponent } from './log-l/my-demands/my-demands.component';
import { LogLAllDemandsComponent } from './log-l/all-demands/all-demands.component';
import { LogSMyDemandsComponent } from './log-s/my-demands/my-demands.component';
import { Demand, DemandPriority, DemandStatus } from './types';
import { addIcons } from 'ionicons';
import { add } from 'ionicons/icons';

interface Item {id: number, name: string, comment:string}

@Component({
  selector: 'app-logistics',
  templateUrl: 'logistics.page.html',
  styleUrls: ['logistics.page.scss'],
  standalone: true,
  imports: [
    IonHeader,
    IonToolbar,
    IonLabel,
    IonTitle,
    IonContent,
    IonSegment,
    IonSegmentButton,
    LogLMyDemandsComponent,
    LogLAllDemandsComponent,
    LogSMyDemandsComponent,
    CommonModule,
    IonToggle,
    IonModal,
    IonList,
    IonItem,
    IonInput,
    IonSelect,
    IonSelectOption,
    IonIcon,
    IonButton
  ],
})
export class LogisticsPage {
  isER: boolean = false; // pour la démonstration, changez cette valeur pour le point de vue du secouriste & du logisticien
  segmentValue: string;
  listItems: Item[] = [{id: 1, name: 'Item 1', comment: 'Comment 1'}, {id: 2, name: 'Item 2', comment: 'Comment 2'}, {id: 3, name: 'Item 3', comment: 'Comment 3'}];
  static iD: number = 0;
  selection: String = "Autre"
  currentDemand: Demand;


  constructor() {
    this.segmentValue = 'all-orders';
    this.currentDemand = this.initCurrentDemand();
    addIcons({add});
  }


  segmentChanged(event: any) {
    this.segmentValue = event.detail.value;
  }

  toggleLogistic() {
    this.isER = !this.isER;
  }

  /* id: number;
  status: DemandStatus;
  assigned: boolean;
  priority: DemandPriority;
  timestampDemand: string;
  comment: string;
  location: {
    latitude: number;
    longitude: number;
  },
  content: { label: string; quantity: number; item: string }[]; */

  initCurrentDemand() {
    return {
      id: ++LogisticsPage.iD,
      status: DemandStatus.Pending,
      assigned: false,
      priority: DemandPriority.Medium,
      timestampDemand: new Date().toISOString(),
      comment:'',
      location: this.rdmCoord(),
      content: [],
    }
  }

  rdmCoord() {
    return {latitude: Math.random(), longitude: Math.random()}
  }

  addItem() {
    this.currentDemand.content.push({label: '', quantity: 0, item: ''});
   }

   saveSelection(event: any) {
    this.selection = event.detail.value;
    console.log(event);
   }

   
}
