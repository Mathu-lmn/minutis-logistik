import { Demand, DemandPriority, DemandStatus, Item } from "./types";

export const tableData = [
    { label: 'Medikit', quantity: 1, item: 'medkit' },
    { label: 'Brancard', quantity: 20, item: 'brancard' },
    { label: 'Feur', quantity: 24, item: 'feur' },
];

export const demands: Demand[] = [
    {
      id: 1,
      status: DemandStatus.ReadyToShip,
      assigned: false,
      priority: DemandPriority.Urgent,
      timestampDemand: 1712733254155,
      comment: 'Comment 1',
      location: {
        latitude: 45.7431141144872,
        longitude: 4.22320976350099,
      },
      content: [tableData[0]],
    },
    {
      id: 2,
      status: DemandStatus.Pending,
      assigned: false,
      priority: DemandPriority.Medium,
      timestampDemand: 1712577345000,
      comment: 'Comment 2',
      location: {
        latitude: 45.7431141144872,
        longitude: 4.22320976350099,
      },
      content: [
        tableData[2],
        tableData[1],
        tableData[0],
        tableData[1],
        tableData[1],
        tableData[1],
      ],
    },
    {
      id: 3,
      status: DemandStatus.Assigned,
      assigned: false,
      priority: DemandPriority.Low,
      timestampDemand: 1712737320000,
      comment: 'Comment 3',
      location: {
        latitude: 45.7431141144872,
        longitude: 4.22320976350099,
      },
      content: [tableData[2]],
    },
    {
      id: 4,
      status: DemandStatus.Shipping,
      assigned: false,
      priority: DemandPriority.High,
      timestampDemand: 1712728959000,
      comment: 'Comment 4',
      location: {
        latitude: 45.7431141144872,
        longitude: 4.22320976350099,
      },
      content: [
        tableData[1],
        tableData[2],
        tableData[0],
      ],
    },
    {
      id: 5,
      status: DemandStatus.Delivered,
      assigned: false,
      priority: DemandPriority.Medium,
      timestampDemand: 1712720598000,
      comment: 'Comment 5',
      location: {
        latitude: 45.7431141144872,
        longitude: 4.22320976350099,
      },
      content: [tableData[0]],
    },
    {
      id: 6,
      status: DemandStatus.Pending,
      assigned: false,
      priority: DemandPriority.Low,
      timestampDemand: 1712712237000,
      comment: 'Comment 6',
      location: {
        latitude: 45.7431141144872,
        longitude: 4.22320976350099,
      },
      content: [tableData[1]],
    },
    {
      id: 7,
      status: DemandStatus.ReadyToShip,
      assigned: false,
      priority: DemandPriority.High,
      timestampDemand: 1712703876000,
      comment: 'Comment 7',
      location: {
        latitude: 45.7431141144872,
        longitude: 4.22320976350099,
      },
      content: [tableData[2]],
    },
    {
      id: 8,
      status: DemandStatus.Pending,
      assigned: false,
      priority: DemandPriority.Medium,
      timestampDemand: 1712598157000,
      comment: 'Comment 8',
      location: {
        latitude: 45.7431141144872,
        longitude: 4.22320976350099,
      },
      content: [tableData[0]],
    },
    {
      id: 9,
      status: DemandStatus.Assigned,
      assigned: false,
      priority: DemandPriority.Low,
      timestampDemand: 1712601599000,
      comment: 'Comment 9',
      location: {
        latitude: 45.7431141144872,
        longitude: 4.22320976350099,
      },
      content: [tableData[1]],
    },
    {
      id: 10,
      status: DemandStatus.Shipping,
      assigned: false,
      priority: DemandPriority.High,
      timestampDemand: 1712549009000,
      comment: 'Comment 10',
      location: {
        latitude: 45.7431141144872,
        longitude: 4.22320976350099,
      },
      content: [tableData[2]],
    },
    {
      id: 11,
      status: DemandStatus.Delivered,
      assigned: false,
      priority: DemandPriority.Medium,
      timestampDemand: 1712610433000,
      comment: 'Comment 11',
      location: {
        latitude: 45.7431141144872,
        longitude: 4.22320976350099,
      },
      content: [tableData[0]],
    },
];


export const listItems: Item[] = [
  {id: 1, name: 'Item 1', comment: 'Comment 1'}, 
  {id: 2, name: 'Item 2', comment: 'Comment 2'}, 
  {id: 3, name: 'Item 3', comment: 'Comment 3'}
];