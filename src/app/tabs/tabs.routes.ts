import { Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

export const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'logistics',
        loadComponent: () =>
          import('../logistics/logistics.page').then((m) => m.LogisticsPage),
      }
    ]
  },
  {
    path: '',
    redirectTo: '/tabs/logistics',
    pathMatch: 'full',
  },
];
