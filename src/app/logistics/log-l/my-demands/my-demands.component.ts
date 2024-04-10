import { AfterViewInit, Component, OnInit, ViewChildren } from '@angular/core';
import { CommonModule } from '@angular/common';
import { chatboxEllipsesOutline, closeOutline } from 'ionicons/icons';
import { Demand, DemandStatus, DemandPriority } from '../../types';
import { addIcons } from 'ionicons';
import * as I from '@ionic/angular/standalone';

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
    I.IonButtons,
    CommonModule,
  ],
})
export class LogLMyDemandsComponent implements OnInit, AfterViewInit {
  myDemands: Demand[];
  isCurrentlyShipping: boolean = false;

  @ViewChildren(I.IonModal) modals: any[] = [];

  constructor(public utils: Utils) {
    this.myDemands = demands.sort((a, b) => {
      if (a.priority === b.priority) {
        return a.timestampDemand - b.timestampDemand;
      }
      return (
        Object.values(DemandPriority).indexOf(a.priority) -
        Object.values(DemandPriority).indexOf(b.priority)
      );
    });
    addIcons({
      closeOutline,
      chatboxEllipsesOutline,
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

  getTimeDifference(timestamp: number): string {
    const now = Date.now();
    const difference = now - timestamp;
    const minutes = Math.floor(difference / 60000); // Convert milliseconds to minutes

    if (minutes < 1) {
      return "à l'instant";
    } else if (minutes < 60) {
      return `Il y a ${minutes} minute${minutes > 1 ? 's' : ''}`;
    } else {
      const hours = Math.floor(minutes / 60);
      if (hours < 24) {
        return `Il y a ${hours} heure${hours > 1 ? 's' : ''}`;
      } else {
        const days = Math.floor(hours / 24);
        return `Il y a ${days} jour${days > 1 ? 's' : ''}`;
      }
    }
  }

  log(demand: Demand) {
    console.log(demand);
  }

  openChat(event: Event, demand: Demand) {
    event.stopPropagation();
    // TODO : call backend
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
    this.ngOnInit();
  }

  checkIfCurrentlyShipping() {
    // ici call au backend
    this.isCurrentlyShipping = !this.isCurrentlyShipping;
    return this.isCurrentlyShipping;
  }

  dismissModal() {
    this.modals.forEach((m) => m.dismiss(null, 'cancel'));
  }

  // eslint-disable-next-line @angular-eslint/no-empty-lifecycle-method
  ngOnInit() {}

  ngAfterViewInit(): void {
    // this.checkIfCurrentlyShipping();
    console.log('isShipping=' + this.isCurrentlyShipping);
  }
}
