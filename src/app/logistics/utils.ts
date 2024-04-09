import { Injectable } from '@angular/core';

import { DemandPriority, DemandStatus } from './types';

@Injectable({
  providedIn: 'root',
})
export class Utils {
  getIcon(status: DemandStatus) {
    switch (status) {
      case DemandStatus.Pending:
        return 'assets/icon/pending.svg';
      case DemandStatus.Assigned:
        return 'assets/icon/assigned.svg';
      case DemandStatus.ReadyToShip:
        return 'assets/icon/rts.svg';
      case DemandStatus.Shipping:
        return 'assets/icon/shipping.svg';
      case DemandStatus.Delivered:
        return 'assets/icon/delivered.svg';
      default:
        return 'hourglass-outline';
    }
  }

  getBgColor(priority: DemandPriority) {
    switch (priority) {
      case DemandPriority.Urgent:
        return 'danger';
      case DemandPriority.High:
        return 'warning';
      case DemandPriority.Medium:
        return 'secondary';
      case DemandPriority.Low:
        return 'success';
    }
  }
}
