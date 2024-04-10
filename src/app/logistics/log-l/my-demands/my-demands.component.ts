import { AfterViewInit, Component, OnInit, ViewChild, ViewChildren } from '@angular/core';
import { CommonModule } from '@angular/common';
import * as I from '@ionic/angular/standalone';
import { closeOutline } from 'ionicons/icons';
import { Demand, DemandStatus } from '../../types';
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
    MapComponent,
    I.IonGrid,
    I.IonRow,
    I.IonBadge,
    I.IonIcon,
    I.IonContent,
    I.IonText,
    I.IonList,
    I.IonLabel,
    I.IonItem,
    I.IonInfiniteScroll,
    I.IonToolbar,
    I.IonHeader,
    I.IonTitle,
    I.IonModal,
    I.IonCard,
    I.IonCardHeader,
    I.IonCardTitle,
    I.IonCardContent,
    I.IonButton,
    CommonModule,
  ],
})
export class LogLMyDemandsComponent implements OnInit, AfterViewInit {
  myDemands: Demand[];
  isCurrentlyShipping: boolean = false;
  
  @ViewChildren(I.IonModal) modals: any[] = [];

  constructor(public utils: Utils) {
    this.myDemands = demands;
    addIcons({
      closeOutline,
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

  openChat(event: Event, demand: Demand) {
    event.stopPropagation();
    // call au backend pour ouvrir le chat
    console.log('openChat', demand);
  }
  
  markAsShipping(event: Event) {
    if (this.checkIfCurrentlyShipping()) {
      // erreur OU return; pour annuler l'action
    }
    for (let myDemand of this.myDemands) {
      // envoi d'un message au backend, puis...
      myDemand.status = DemandStatus.Shipping;
    }
    this.ngOnInit()
  }

  checkIfCurrentlyShipping() {
    // ici call au backend
    this.isCurrentlyShipping = !this.isCurrentlyShipping;
    return this.isCurrentlyShipping;
  }

  dismissModal() {
    this.modals.forEach(m => m.dismiss(null, 'cancel'))
  }
  
  // lint:disable-next-line: use-lifecycle-interface
  ngOnInit() {}
  
  ngAfterViewInit(): void {
    // this.checkIfCurrentlyShipping();
    console.log("isShipping=" + this.isCurrentlyShipping);
  }

}
