import { Component, NgModule } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonSegment, IonLabel, IonSegmentButton } from '@ionic/angular/standalone';
import { ExploreContainerComponent } from '../explore-container/explore-container.component';
import {LogLMyDemandsComponent} from './log-l/log-l-my-demands/log-l-my-demands.component';

@Component({
  selector: 'app-logistics',
  templateUrl: 'logistics.page.html',
  styleUrls: ['logistics.page.scss'],
  standalone: true,
  imports: [IonHeader, IonToolbar, IonLabel, IonTitle, IonContent, IonSegment, IonSegmentButton, ExploreContainerComponent, LogLMyDemandsComponent]
})
export class LogisticsPage {

  constructor() {}

}
