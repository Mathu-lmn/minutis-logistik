import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonList, IonLabel, IonItem, IonInfiniteScroll, IonToolbar, IonHeader, IonTitle , IonButton} from '@ionic/angular/standalone';


interface Demand { id: number, status: string, assigned: boolean, priority: string, timestampDemand: string, comment: string, content: {id: number, name: string, quantity: number, unit: string, comment: string}[]; };

let demands: Demand[] = [
  {
    id: 1,
    status: 'Pending',
    assigned: true,
    priority: 'High',
    timestampDemand: '2021:01:01-12:00',
    comment: 'Comment 1Comment 1Comment 1Comment 1Comment 1Comment 1Comment 1Comment 1Comment 1Comment 1Comment 1Comment 1Comment 1Comment 1',
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
  templateUrl: './log-l-my-demands.component.html',
  styleUrls: ['./log-l-my-demands.component.scss'],
  standalone: true,
  imports: [IonList, IonLabel, IonItem, IonInfiniteScroll, IonToolbar, IonHeader, IonTitle, CommonModule, IonButton],
})
export class LogLMyDemandsComponent  implements OnInit {
  demands: Demand[];

  constructor() {
    this.demands = demands;
  }

  getProducts (demand: Demand) {
    return demand.content.map((product) => product.name + ' (' + product.quantity + ' ' + product.comment + ')').join(', ');
  }

  getColor (demand: Demand) {
    if (demand.status === 'Pending') {
      return 'danger';
    } else if (demand.status === 'Selected') {
      return 'warning';
    } else if (demand.status === 'Shipping') {
      return 'primary';
    } else if (demand.status === 'Finished') {
      return 'success';
    }
    return 'secondary';
  }

  log(demand: Demand) {
    console.log(demand);
  }


  // lint:disable-next-line: use-lifecycle-interface
  ngOnInit() {}

}
