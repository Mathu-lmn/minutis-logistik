import { Component, NgModule } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonSegment, IonLabel, IonSegmentButton } from '@ionic/angular/standalone';
import { ExploreContainerComponent } from '../explore-container/explore-container.component';
import { CommonModule } from '@angular/common';
import {LogLMyDemandsComponent} from './log-l/log-l-my-demands/log-l-my-demands.component';

@Component({
  selector: 'app-logistics',
  templateUrl: 'logistics.page.html',
  styleUrls: ['logistics.page.scss'],
  standalone: true,
  imports: [IonHeader, IonToolbar, IonLabel, IonTitle, IonContent, IonSegment, IonSegmentButton, ExploreContainerComponent, LogLMyDemandsComponent, CommonModule]
})
export class LogisticsPage {
  isER: boolean = false; // pour la démonstration, changez cette valeur pour le point de vue du secouriste & du logisticien
  segmentValue: string;
  constructor() {
    this.segmentValue = 'all-orders';
  }

  segmentChanged(event: any) {
    this.segmentValue = event.detail.value;
  }

}
