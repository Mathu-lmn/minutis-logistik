import { Component, OnInit, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonContent, IonText, IonList, IonLabel, IonItem, IonInfiniteScroll, IonToolbar, IonHeader, IonTitle, IonButton, IonModal} from '@ionic/angular/standalone';
import { Demand, DemandPriority, DemandStatus } from 'src/app/logistics/types';

let demands: Demand[] = [
  {
    id: 1,
    status: DemandStatus.Pending,
    assigned: true,
    priority: DemandPriority.High,
    timestampDemand: '2021:01:01-12:00',
    comment: 'Comment 1Comment 1Comment 1Comment 1Comment 1Comment 1Comment 1Comment 1Comment 1Comment 1Comment 1Comment 1Comment 1Comment 1',
    content: [
      {
        label: 'Product 1',
        quantity: 10,
        comment: 'Comment 1'
      },
      {
        id: 2,
        name: 'Product 2',
        quantity: 20,
        comment: 'Comment 2'
      },
      {
        id: 3,
        name: 'Product 3',
        quantity: 30,
        unit: 'kg',
        comment: 'Comment 3'
      } 
    ]
  },
  {
    id: 2,
    status: 'Selected',
    assigned: false,
    priority: 'Low',
    timestampDemand: '2021:01:02-12:00',
    comment: 'Comment 2',
    content: [
      {
        id: 1,
        name: 'Product 1',
        quantity: 10,
        unit: 'kg',
        comment: 'Comment 1'
      },
      {
        id: 2,
        name: 'Product 2',
        quantity: 20,
        unit: 'kg',
        comment: 'Comment 2'
      }
    ]
  },
  {
    id: 3,
    status: 'Pending',
    assigned: true,
    priority: 'Medium',
    timestampDemand: '2021:01:03-12:00',
    comment: 'Comment 3',
    content: [
      {
        id: 1,
        name: 'Product 1',
        quantity: 10,
        unit: 'kg',
        comment: 'Comment 1'
      },
      {
        id: 2,
        name: 'Product 2',
        quantity: 20,
        unit: 'kg',
        comment: 'Comment 2'
      }
    ]
  },
  {
    id: 4,
    status: 'Finished',
    assigned: false,
    priority: 'High',
    timestampDemand: '2021:01:04-12:00',
    comment: 'Comment 4',
    content: [
      {
        id: 1,
        name: 'Product 1',
        quantity: 10,
        unit: 'kg',
        comment: 'Comment 1'
      },
      {
        id: 2,
        name: 'Product 2',
        quantity: 20,
        unit: 'kg',
        comment: 'Comment 2'
      }
    ]
  }
]


@Component({
  selector: 'app-log-l-my-demands',
  templateUrl: './my-demands.component.html',
  styleUrls: ['./my-demands.component.scss'],
  standalone: true,
  imports: [IonContent, IonText, IonList, IonLabel, IonItem, IonInfiniteScroll, IonToolbar, IonHeader, IonTitle, IonModal, CommonModule, IonButton],
})
export class LogLMyDemandsComponent  implements OnInit {
  demands: Demand[];
  
  @ViewChild(IonModal) modal: any;

  constructor() {
    this.demands = demands;
  }

  getProducts (demand: Demand) {
    return demand.content.map((product) => product.name + ' (' + product.quantity + ' ' + product.comment + ')').join(', ');
  }

  getColor (demand: Demand) {
    switch (demand.status) { 
      case 'Pending': {
        return 'danger';
      }
      case 'Selected': {
        return 'warning';
      }
      case 'Shipping': {
        return 'primary';
      }
      case 'Finished': {
        return 'success';
      }
      default: {
        return 'secondary';
      }
    }
  }

  log(demand: Demand) {
    console.log(demand);
  }

  

  // lint:disable-next-line: use-lifecycle-interface
  ngOnInit() {}

}
