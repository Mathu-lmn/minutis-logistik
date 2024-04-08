import { Component } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonSegment, IonLabel, IonSegmentButton } from '@ionic/angular/standalone';
import { ExploreContainerComponent } from '../explore-container/explore-container.component';
import { AllDemandsComponent } from './log-l/all-demands/all-demands.component';

@Component({
  selector: 'app-logistics',
  templateUrl: 'logistics.page.html',
  styleUrls: ['logistics.page.scss'],
  standalone: true,
  imports: [IonHeader, IonToolbar, IonLabel, IonTitle, IonContent, IonSegment, IonSegmentButton, ExploreContainerComponent, AllDemandsComponent]
})
export class LogisticsPage {

  constructor() {}

}
