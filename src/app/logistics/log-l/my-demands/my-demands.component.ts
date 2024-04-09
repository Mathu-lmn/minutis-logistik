import { Component, OnInit, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  IonBadge,
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
import { Demand } from '../../types';
import { addIcons } from 'ionicons';

import { demands } from '../../dummy';
import { Utils } from '../../utils';
import { MapComponent } from 'src/app/map/map.component';


@Component({
  selector: 'app-my-demands',
  templateUrl: './my-demands.component.html',
  styleUrls: ['./my-demands.component.scss'],
  standalone: true,
  imports: [
    IonBadge,
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
