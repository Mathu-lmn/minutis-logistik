import { Injectable } from "@angular/core";

import { DemandPriority, DemandStatus } from "./types";

@Injectable({
  providedIn: 'root'
})
export class Utils {
  getIcon(status: string) {
    switch (status) {
      case 'Pending':
      return 'assets/icon/pending.svg';
      case 'Assigned':
      return 'assets/icon/assigned.svg';
      case 'Ready-to-Ship':
      return 'assets/icon/rts.svg';
      case 'Shipping':
      return 'assets/icon/shipping.svg';
      case 'Delivered':
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