export enum DemandStatus {
  Pending = 'Pending',
  Assigned = 'Assigned',
  ReadyToShip = 'Ready-to-Ship',
  Shipping = 'Shipping',
  Delivered = 'Delivered',
}

export enum DemandPriority {
    Urgent = 'Urgent',
    High = 'High',
    Medium = 'Medium',
    Low = 'Low',
}

export type Demand = {
    id: number;
    status: DemandStatus;
    assigned: boolean;
    priority: DemandPriority;
    timestampDemand: string;
    comment: string;
    content: { label: string; quantity: string; item: string }[];
}
