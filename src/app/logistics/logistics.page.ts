import { Component, NgModule } from '@angular/core';
import {
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonSegment,
  IonLabel,
  IonSegmentButton,
} from '@ionic/angular/standalone';
import { CommonModule } from '@angular/common';
import { LogLMyDemandsComponent } from './log-l/my-demands/my-demands.component';
import { LogLAllDemandsComponent } from './log-l/all-demands/all-demands.component';
import { LogSMyDemandsComponent } from './log-s/my-demands/my-demands.component';

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
  ],
})
export class LogisticsPage {
  isER: boolean = true; // pour la démonstration, changez cette valeur pour le point de vue du secouriste & du logisticien
  segmentValue: string;
  constructor() {
    this.segmentValue = 'all-orders';
  }

  segmentChanged(event: any) {
    this.segmentValue = event.detail.value;
  }
}
