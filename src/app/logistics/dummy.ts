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
      statusHistory: [
        { status: DemandStatus.Pending, timestamp: 1712733254155 },
        { status: DemandStatus.Assigned, timestamp: 1712734820000 },
        { status: DemandStatus.ReadyToShip, timestamp: 1712737320000 },
      ],
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
      statusHistory: [
        { status: DemandStatus.Pending, timestamp: 1712577345000 },
      ],
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
      statusHistory: [
        { status: DemandStatus.Pending, timestamp: 1712733254155 },
        { status: DemandStatus.Assigned, timestamp: 1712737320000 },
      ],
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
      statusHistory: [
        { status: DemandStatus.Pending, timestamp: 1712728959000 },
        { status: DemandStatus.ReadyToShip, timestamp: 1712731320000 },
        { status: DemandStatus.Shipping, timestamp: 1712737320000 },
      ],
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
      statusHistory: [
        { status: DemandStatus.Pending, timestamp: 1712720598000 },
        { status: DemandStatus.Assigned, timestamp: 1712737320000 },
        { status: DemandStatus.ReadyToShip, timestamp: 1712737420000 },
        { status: DemandStatus.Shipping, timestamp: 1712738480000 },
        { status: DemandStatus.Delivered, timestamp: 1712739590000 },
      ],
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
      statusHistory: [
        { status: DemandStatus.Pending, timestamp: 1712712237000 },
      ],
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
      statusHistory: [
        { status: DemandStatus.Pending, timestamp: 1712703876000 },
        { status: DemandStatus.Assigned, timestamp: 1712707320000 },
        { status: DemandStatus.ReadyToShip, timestamp: 1712717320000 },
      ],
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
      statusHistory: [
        { status: DemandStatus.Pending, timestamp: 1712598157000 },
      ],
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
      statusHistory: [
        { status: DemandStatus.Pending, timestamp: 1712601599000 },
        { status: DemandStatus.Assigned, timestamp: 1712607320000 },
      ],
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
      statusHistory: [
        { status: DemandStatus.Pending, timestamp: 1712549009000 },
        { status: DemandStatus.ReadyToShip, timestamp: 1712551320000 },
        { status: DemandStatus.Shipping, timestamp: 1712562320000 },
      ],
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
      statusHistory: [
        { status: DemandStatus.Pending, timestamp: 1712610433000 },
        { status: DemandStatus.Assigned, timestamp: 1712617320000 },
        { status: DemandStatus.ReadyToShip, timestamp: 1712727320000 },
        { status: DemandStatus.Shipping, timestamp: 1713137320000 },
        { status: DemandStatus.Delivered, timestamp: 1713247320000 },
      ],
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