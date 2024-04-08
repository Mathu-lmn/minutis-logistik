import { Component } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonSegment, IonLabel, IonSegmentButton } from '@ionic/angular/standalone';
import { ExploreContainerComponent } from '../explore-container/explore-container.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-logistics',
  templateUrl: 'logistics.page.html',
  styleUrls: ['logistics.page.scss'],
  standalone: true,
  imports: [IonHeader, IonToolbar, IonLabel, IonTitle, IonContent, IonSegment, IonSegmentButton, ExploreContainerComponent, CommonModule]
})
export class LogisticsPage {
  segmentValue: string;
  constructor() {
    this.segmentValue = 'all-orders';
  }

  segmentChanged(event: any) {
    this.segmentValue = event.detail.value;
  }

}
