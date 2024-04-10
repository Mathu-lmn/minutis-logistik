import { Component, NgModule, ViewChildren } from '@angular/core';
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
  IonButton,
  IonFabButton,
} 

from '@ionic/angular/standalone';
import { CommonModule } from '@angular/common';
import { LogLMyDemandsComponent } from './log-l/my-demands/my-demands.component';
import { LogLAllDemandsComponent } from './log-l/all-demands/all-demands.component';
import { LogSMyDemandsComponent } from './log-s/my-demands/my-demands.component';
import { Demand, DemandPriority, DemandStatus, Item } from './types';
import { listItems as IList } from './dummy';
import { addIcons } from 'ionicons';
import { add } from 'ionicons/icons';


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
    IonButton,
    IonFabButton,
  ],
})
export class LogisticsPage {
  isER: boolean = false; // pour la démonstration, changez cette valeur pour le point de vue du secouriste & du logisticien
  segmentValue: string;
  listItems: Item[] = IList ;
  static iD: number = 0;
  static contentID: number = 1;
  selection: String = "Autre"
  currentDemand: Demand;


  @ViewChildren(IonModal) modals: any[] = [];


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


  initCurrentDemand() {
    
    return {
      id: ++LogisticsPage.iD,
      status: DemandStatus.Pending,
      assigned: false,
      priority: DemandPriority.Medium,
      timestampDemand: new Date().getTime(),
      comment:'',
      location: this.rdmCoord(), // replace by backend
      content: [],
      statusHistory: []
    }
  }

  rdmCoord() {
    return {latitude: Math.random(), longitude: Math.random()}
  }

  addItem() {
    this.currentDemand.content.push({label: '', quantity: 0, item: ''});
  }

  saveSelection(event: CustomEvent) {
    this.selection = event.detail.value;
    console.log(event);
  }

  saveDemand() {
    this.dismissModal()
    // add backend to save demand
    return
  }

  dismissModal() {
    this.modals.forEach(m => m.dismiss(null, 'cancel'))
  }


}
