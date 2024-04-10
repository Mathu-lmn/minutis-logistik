export enum DemandStatus {
  New = 'New',
  Pending = 'Pending',
  Assigned = 'Assigned',
  ReadyToShip = 'Ready-to-Ship',
  Shipping = 'Shipping',
  Delivered = 'Delivered',
}

export enum DemandPriority {
  Urgent = 'Urgent',
  High = 'Élevée',
  Medium = 'Moyenne',
  Low = 'Basse',
}

export type Demand = {
  id: number;
  status: DemandStatus;
  assigned: boolean;
  priority: DemandPriority;
  timestampDemand: number;
  comment: string;
  location: {
    latitude: number;
    longitude: number;
  },
  content: { label: string; quantity: number; item: string }[];
};

export type Item = {id: number, name: string, comment:string}